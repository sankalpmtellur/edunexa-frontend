import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <p className="home-kicker">Welcome to EduNexa</p>
        <h1>Hello, {user?.name ?? 'there'} 👋</h1>
        <p className="home-subtitle">
          You are now signed in.
        </p>

        <div className="home-details">
          <div>
            <p className="detail-label">Name</p>
            <p className="detail-value">{user?.name}</p>
          </div>
          <div>
            <p className="detail-label">Email</p>
            <p className="detail-value">{user?.email}</p>
          </div>
        </div>

        <button className="outline-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;