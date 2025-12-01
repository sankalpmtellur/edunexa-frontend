import { useState } from "react";
import Step1Academic from "../components/completeprofile/Step1Academic";
import Step2Skills from "../components/completeprofile/Step2Skills";
import Step3Social from "../components/completeprofile/Step3Social";
import Step4Bio from "../components/completeprofile/Step4Bio";
import Step5Review from "../components/completeprofile/Step5Review";

const TOTAL_STEPS = 5;

function CompleteProfile() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        college: "",
        department: "",
        year: "",
        skills: "",
        interests: "",
        availability: "",
        github: "",
        linkedin: "",
        portfolio: "",
        bio: "",
        profileImage: ""
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const progress = (step / TOTAL_STEPS) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center px-4 py-10">
            <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/60 max-w-3xl w-full px-6 py-7 md:px-10 md:py-9">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500 mb-1">
                            Profile Setup
                        </p>
                        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                            Complete your student profile
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 max-w-xl">
                            This helps EduNexa recommend the right peers, projects, and opportunities
                            tailored to your skills and interests.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-3 text-xs font-medium text-indigo-700 border border-indigo-100 whitespace-nowrap">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        Step {step} of {TOTAL_STEPS}
                    </div>

                </div>

                {/* Progress bar */}
                <div className="mb-8">
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-2 flex justify-between text-[11px] font-medium text-slate-400 uppercase tracking-[0.18em]">
                        <span>Basics</span>
                        <span>Skills</span>
                        <span>Social</span>
                        <span>About</span>
                        <span>Review</span>
                    </div>
                </div>

                {/* Step content */}
                <div className="rounded-xl border border-slate-100 bg-white/70 shadow-sm px-5 py-6 md:px-8 md:py-7">
                    {step === 1 && (
                        <Step1Academic
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                        />
                    )}

                    {step === 2 && (
                        <Step2Skills
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}

                    {step === 3 && (
                        <Step3Social
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}

                    {step === 4 && (
                        <Step4Bio
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}

                    {step === 5 && (
                        <Step5Review
                            formData={formData}
                            prevStep={prevStep}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompleteProfile;