import { motion } from "framer-motion";

function Step3Social({ formData, setFormData, nextStep, prevStep }) {
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
                        Social profiles
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 max-w-md">
                        Link your profiles so collaborators can quickly explore your work and
                        background.
                    </p>
                </div>
                <span className="hidden md:inline-flex rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1">
                    Step 3 · Links
                </span>
            </div>

            <form className="mt-7 flex flex-col gap-5" onSubmit={handleNext}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="github"
                        className="text-sm font-medium text-slate-700"
                    >
                        GitHub
                    </label>
                    <input
                        id="github"
                        type="url"
                        name="github"
                        placeholder="https://github.com/username"
                        value={formData.github || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="linkedin"
                        className="text-sm font-medium text-slate-700"
                    >
                        LinkedIn
                    </label>
                    <input
                        id="linkedin"
                        type="url"
                        name="linkedin"
                        placeholder="https://www.linkedin.com/in/username"
                        value={formData.linkedin || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="portfolio"
                        className="text-sm font-medium text-slate-700"
                    >
                        Portfolio / website
                    </label>
                    <input
                        id="portfolio"
                        type="url"
                        name="portfolio"
                        placeholder="https://your-portfolio.site"
                        value={formData.portfolio || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                    <p className="text-[11px] text-slate-500">
                        All links are optional, but adding at least one helps others trust your
                        profile.
                    </p>
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

export default Step3Social;