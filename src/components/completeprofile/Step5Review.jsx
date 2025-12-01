import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Step5Review({ formData, prevStep }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                        Review & confirm
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 max-w-md">
                        Take a quick look at your profile details before you publish them to
                        EduNexa.
                    </p>
                </div>
                <span className="hidden md:inline-flex rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1">
                    Step 5 · Review
                </span>
            </div>

            <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 md:p-6">
                <div className="flex flex-col gap-5 text-sm text-slate-700">
                    <section>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                            Academic
                        </h3>
                        <div className="grid gap-y-1.5 md:grid-cols-2 md:gap-x-6">
                            <p>
                                <span className="font-medium text-slate-800">College: </span>
                                {formData.college || <span className="text-slate-400">Not provided</span>}
                            </p>
                            <p>
                                <span className="font-medium text-slate-800">Department: </span>
                                {formData.department || <span className="text-slate-400">Not provided</span>}
                            </p>
                            <p>
                                <span className="font-medium text-slate-800">Year: </span>
                                {formData.year || <span className="text-slate-400">Not provided</span>}
                            </p>
                        </div>
                    </section>

                    <section className="border-t border-slate-200 pt-4">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                            Skills & interests
                        </h3>
                        <div className="grid gap-y-1.5 md:grid-cols-2 md:gap-x-6">
                            <p>
                                <span className="font-medium text-slate-800">Skills: </span>
                                {formData.skills || <span className="text-slate-400">Not provided</span>}
                            </p>
                            <p>
                                <span className="font-medium text-slate-800">Interests: </span>
                                {formData.interests || <span className="text-slate-400">Not provided</span>}
                            </p>
                            <p>
                                <span className="font-medium text-slate-800">Availability: </span>
                                {formData.availability || <span className="text-slate-400">Not set</span>}
                            </p>
                        </div>
                    </section>

                    <section className="border-t border-slate-200 pt-4">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                            Social links
                        </h3>
                        <div className="grid gap-y-1.5 md:grid-cols-2 md:gap-x-6">
                            <p>
                                <span className="font-medium text-slate-800">GitHub: </span>
                                {formData.github || <span className="text-slate-400">Not provided</span>}
                            </p>
                            <p>
                                <span className="font-medium text-slate-800">LinkedIn: </span>
                                {formData.linkedin || <span className="text-slate-400">Not provided</span>}
                            </p>
                            <p className="md:col-span-2">
                                <span className="font-medium text-slate-800">Portfolio: </span>
                                {formData.portfolio || (
                                    <span className="text-slate-400">Not provided</span>
                                )}
                            </p>
                        </div>
                    </section>

                    <section className="border-t border-slate-200 pt-4">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                            Bio & profile
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                            {formData.bio || <span className="text-slate-400">No bio added yet.</span>}
                        </p>

                        {formData.profileImage && (
                            <div className="mt-4 flex items-center gap-4">
                                <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                                    <img
                                        src={formData.profileImage}
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-xs text-slate-500">
                                    <p className="font-medium text-slate-700">Profile image</p>
                                    <p>We&apos;ll show this next to your name across EduNexa.</p>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
                <button
                    onClick={prevStep}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
                >
                    Back to edit
                </button>

                <Link
                    to="/dashboard"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
                >
                    Confirm & finish
                </Link>
            </div>
        </motion.div >
    );
}

export default Step5Review;