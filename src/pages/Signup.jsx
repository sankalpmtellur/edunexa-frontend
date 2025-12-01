import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center px-4 py-10">
            <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full bg-indigo-200/40 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-sky-200/40 blur-3xl" />

                <div className="relative rounded-3xl border border-white/70 bg-white/80 px-6 py-7 shadow-2xl backdrop-blur-xl md:px-8 md:py-8">
                    <div className="mb-6 text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                            Get started
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                            Create your EduNexa account
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            It takes less than a minute. You can complete your detailed profile
                            later.
                        </p>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1.5 text-left">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-slate-700"
                            >
                                Full name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="e.g. Ananya Rao"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 text-left">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-slate-700"
                            >
                                College email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@college.edu"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 text-left">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-slate-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Create a password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 text-left">
                            <label
                                htmlFor="confirmPassword"
                                className="text-sm font-medium text-slate-700"
                            >
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Re-enter your password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <p className="mt-1 text-[11px] text-slate-500 text-left">
                            By continuing, you agree to follow your institute&apos;s collaboration
                            and academic integrity guidelines.
                        </p>

                        <Link to="/completeprofile"
                            type="submit"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
                        >
                            Create account
                        </Link>
                    </form>

                    <p className="mt-5 text-center text-xs text-slate-500">
                        Already on EduNexa?{" "}
                        <Link to="/login" className="font-medium text-indigo-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;