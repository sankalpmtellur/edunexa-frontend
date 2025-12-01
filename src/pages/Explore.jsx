import { Link } from "react-router-dom";

function Explore() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center px-4 py-10">
            <div className="relative w-full max-w-5xl">
                <div className="pointer-events-none absolute -top-10 -left-10 h-36 w-36 rounded-full bg-indigo-200/40 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />

                <div className="relative rounded-3xl border border-white/70 bg-white/80 px-6 py-8 shadow-2xl backdrop-blur-xl md:px-10 md:py-9">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                                Explore
                            </p>
                            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                                Browse projects & student profiles
                            </h1>
                            <p className="mt-2 text-sm text-slate-600">
                                This is a preview of how the explore space will look. Soon, you&apos;ll
                                be able to filter by skills, interests, and project type to find the
                                right collaborators.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
                                <span className="rounded-full bg-slate-50 px-3 py-1">
                                    Filter by skills (e.g. React, ML, UI/UX)
                                </span>
                                <span className="rounded-full bg-slate-50 px-3 py-1">
                                    See availability and interest level
                                </span>
                                <span className="rounded-full bg-slate-50 px-3 py-1">
                                    View complete student profiles
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 w-full max-w-sm rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm md:mt-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                What&apos;s next
                            </p>
                            <h2 className="mt-2 text-base font-semibold text-slate-900">
                                Complete your profile to appear here
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Students who finish their academic, skills, and social details are more
                                likely to be discovered for teams and projects.
                            </p>

                            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-700">
                                <div className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    <span>Stand out with a rich profile card.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                                    <span>Showcase your GitHub, LinkedIn, and portfolio.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                    <span>Let others know your weekly availability.</span>
                                </div>
                            </div>

                            <Link
                                to="/completeprofile"
                                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
                            >
                                Complete my profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
