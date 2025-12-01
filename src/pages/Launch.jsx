import { Link } from "react-router-dom";

function Launch() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center px-4 py-10">
            <div className="relative max-w-5xl w-full">
                <div className="pointer-events-none absolute -top-10 -left-12 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl" />

                <div className="relative grid gap-10 rounded-3xl border border-white/70 bg-white/80 px-6 py-8 shadow-2xl backdrop-blur-xl md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] md:px-12 md:py-10">
                    <div className="flex flex-col justify-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                            Welcome to
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                            EduNexa - your space to{" "}
                            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 bg-clip-text text-transparent">
                                discover peers & build projects
                            </span>
                        </h1>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base max-w-xl">
                            Match with students who share your skills and interests, form teams in
                            minutes, and work on meaningful projects—from hackathons to research to
                            side products.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                to="/signup"
                                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
                            >
                                Get started for free
                            </Link>
                            <Link
                                to="/explore"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-1"
                            >
                                Explore projects
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 text-[11px] font-medium text-slate-500">
                            <div className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Built for students
                            </div>
                            <div className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                Skill-based matching
                            </div>
                            <div className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                Project-first approach
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Quick preview
                            </p>
                            <h2 className="mt-2 text-base font-semibold text-slate-900">
                                How EduNexa helps you
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm text-slate-700">
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                                    <span>Showcase your academic profile, skills, and interests in a clean student card.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                                    <span>Discover peers looking for collaborators on similar topics and technologies.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                                    <span>Join or start projects, from class assignments to passion projects and hackathons.</span>
                                </li>
                            </ul>

                            <p className="mt-5 text-[11px] text-slate-500">
                                No credit card, no complex setup—just log in with your email and start
                                building with your campus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Launch;