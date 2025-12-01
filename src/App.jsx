import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "./pages/Launch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CompleteProfile from "./pages/CompleteProfile";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Launch />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/completeprofile" element={<CompleteProfile />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;