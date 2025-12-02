import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./contexts/SidebarContext";
import Launch from "./pages/Launch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CompleteProfile from "./pages/CompleteProfile";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";

function App() {
    return (
        <SidebarProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Launch />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/completeprofile" element={<CompleteProfile />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/messages" element={<Messages />} />
                </Routes>
            </Router>
        </SidebarProvider>
    );
}

export default App;