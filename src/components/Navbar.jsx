import { Link } from "react-router-dom";
import { useState } from "react";

let logoSrc = null;
try {
    logoSrc = new URL("../assets/logo.webp", import.meta.url).href;
} catch {}

function Navbar() {
    const [logoError, setLogoError] = useState(!logoSrc);

    return (
        <header className="fixed top-0 left-0 right-0 w-full px-6 py-4 bg-white border-b border-gray-200 z-30">
            <Link to="/" className="flex items-center gap-2">
                {logoSrc && !logoError ? (
                    <img
                        src={logoSrc}
                        alt="EduNexa Logo"
                        className="h-8 w-8 object-contain"
                        onError={() => setLogoError(true)}
                    />
                ) : (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white text-sm font-semibold shadow-sm">
                        EN
                    </span>
                )}
                <span className="text-lg font-bold text-black">EduNexa</span>
            </Link>
        </header>
    );
}

export default Navbar;