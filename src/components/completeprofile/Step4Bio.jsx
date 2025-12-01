import { motion } from "framer-motion";

function Step4Bio({ formData, setFormData, nextStep, prevStep }) {
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
                        About you
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 max-w-md">
                        A short, thoughtful introduction helps other students quickly understand
                        who you are and how you like to collaborate.
                    </p>
                </div>
                <span className="hidden md:inline-flex rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1">
                    Step 4 · About
                </span>
            </div>

            <form className="mt-7 flex flex-col gap-5" onSubmit={handleNext}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="bio"
                        className="text-sm font-medium text-slate-700"
                    >
                        Short bio
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        placeholder="Tell us in 2–3 lines what you study, what excites you, and what kind of projects you enjoy working on."
                        value={formData.bio || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 min-h-[110px] resize-none"
                        required
                    />
                    <p className="text-[11px] text-slate-500">
                        Example: &quot;I&apos;m a 2nd year CSE student interested in web dev and
                        AI. I love hackathons and building products that solve real student
                        problems.&quot;
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="profileImage"
                        className="text-sm font-medium text-slate-700"
                    >
                        Profile image URL <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                        id="profileImage"
                        type="url"
                        name="profileImage"
                        placeholder="Paste a link to your profile photo (Google Drive, Cloudinary, etc.)"
                        value={formData.profileImage || ""}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                    <p className="text-[11px] text-slate-500">
                        Make sure the link is public so your teammates can see your picture.
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

export default Step4Bio;