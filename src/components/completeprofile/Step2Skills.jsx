import { motion } from "framer-motion";

function Step2Skills({ formData, setFormData, nextStep, prevStep }) {
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
                        Skills & interests
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 max-w-md">
                        Highlight what you&apos;re good at and what you&apos;d love to learn or
                        build next. This powers better matches with teams and projects.
                    </p>
                </div>
                <span className="hidden md:inline-flex rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1">
                    Step 2 · Skills
                </span>
            </div>

            <form className="mt-7 flex flex-col gap-5" onSubmit={handleNext}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="skills"
                        className="text-sm font-medium text-slate-700"
                    >
                        Primary skills
                    </label>
                    <input
                        id="skills"
                        type="text"
                        name="skills"
                        placeholder="e.g. React, Python, Figma, Machine Learning"
                        value={formData.skills || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                        required
                    />
                    <p className="text-[11px] text-slate-500">
                        Separate skills with commas – we&apos;ll use these to understand your
                        strengths.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="interests"
                        className="text-sm font-medium text-slate-700"
                    >
                        Interests / domains
                    </label>
                    <input
                        id="interests"
                        type="text"
                        name="interests"
                        placeholder="e.g. Web development, AI, Hackathons, Open-source"
                        value={formData.interests || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="availability"
                        className="text-sm font-medium text-slate-700"
                    >
                        Weekly availability
                    </label>
                    <select
                        id="availability"
                        name="availability"
                        value={formData.availability || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    >
                        <option value="">Select an option</option>
                        <option value="Low">Low (2–4 hrs / week)</option>
                        <option value="Medium">Medium (5–8 hrs / week)</option>
                        <option value="High">High (9+ hrs / week)</option>
                    </select>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
                    >
                        Back
                    </button>

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

export default Step2Skills;