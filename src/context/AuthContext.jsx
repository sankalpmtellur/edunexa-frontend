import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import api, { setAuthToken } from '../utils/api.js';

const AuthContext = createContext(null);

const storageKey = 'edunexa_auth';

const readStoredAuth = () => {
  if (typeof window === 'undefined') {
    return { token: null, user: null };
  }
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : { token: null, user: null };
  } catch {
    return { token: null, user: null };
  }
};

export const AuthProvider = ({ children }) => {
  const initialAuth = useMemo(readStoredAuth, []);
  const [token, setToken] = useState(initialAuth.token);
  const [user, setUser] = useState(initialAuth.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setAuthToken(token);
    if (typeof window === 'undefined') {
      return;
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify({ token, user }));
    } catch (err) {
      console.error('Failed to persist auth state', err);
    }
  }, [token, user]);

  const handleAuthResponse = (data) => {
    setToken(data.token);
    setUser(data.user);
    setError(null);
    return data.user;
  };

  const authAction = useCallback(async (endpoint, payload) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post(`/auth/${endpoint}`, payload);
      return handleAuthResponse(data);
    } catch (err) {
      const message =
        err.response?.data?.error || 'Something went wrong. Please try again.';
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(
    (payload) => authAction('signup', payload),
    [authAction]
  );

  const login = useCallback(
    (payload) => authAction('login', payload),
    [authAction]
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    setError(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(storageKey);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      signup,
      login,
      logout,
      clearError,
      isAuthenticated: Boolean(token && user),
    }),
    [signup, login, logout, clearError, error, token, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

