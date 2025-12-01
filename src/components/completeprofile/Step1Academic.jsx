import { motion } from "framer-motion";

function Step1Academic({ formData, setFormData, nextStep }) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        nextStep();
    };

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
                        Academic details
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 max-w-md">
                        Share the basics of your current program so we can connect you with
                        like-minded students from similar domains and years.
                    </p>
                </div>
                <span className="hidden md:inline-flex rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1">
                    Step 1 · Basics
                </span>
            </div>

            <form className="mt-7 flex flex-col gap-5" onSubmit={handleNext}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="college"
                        className="text-sm font-medium text-slate-700"
                    >
                        College / University
                    </label>
                    <input
                        id="college"
                        type="text"
                        name="college"
                        placeholder="e.g. National Institute of Technology, Trichy"
                        value={formData.college || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        required
                    />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="department"
                            className="text-sm font-medium text-slate-700"
                        >
                            Department / Branch
                        </label>
                        <input
                            id="department"
                            type="text"
                            name="department"
                            placeholder="e.g. Computer Science & Engineering"
                            value={formData.department || ""}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="year"
                            className="text-sm font-medium text-slate-700"
                        >
                            Year of study
                        </label>
                        <input
                            id="year"
                            type="text"
                            name="year"
                            placeholder="e.g. 2nd year"
                            value={formData.year || ""}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                            required
                        />
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-slate-500">
                    <p>These details are visible on your public student profile.</p>
                    <p className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Can be updated later
                    </p>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default Step1Academic;