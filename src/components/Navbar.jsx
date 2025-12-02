import { Link } from "react-router-dom";
import { useState } from "react";

let logoSrc = null;

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full px-6 py-4 bg-white border-b border-gray-200 z-30">
            <Link to="/" className="flex items-center gap-2">
                <span className="text-lg font-bold text-black">EduNexa</span>
            </Link>
        </header>
    );
}

export default Navbar;