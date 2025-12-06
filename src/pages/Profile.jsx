import React from "react";

function Profile() {
  const userProfile = {
    name: "John Doe",
    college: "National Institute of Technology, Trichy",
    department: "Computer Science & Engineering",
    year: "2nd year",
    skills: "React, Python, Figma, Machine Learning",
    interests: "Web development, AI, Hackathons, Open-source",
    availability: "Medium (5-8 hrs / week)",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
    portfolio: "https://johndoe.dev",
    bio: "I'm a 2nd year CSE student interested in web dev and AI. I love hackathons and building products that solve real student problems.",
    profileImage: "https://via.placeholder.com/150",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/60 max-w-4xl w-full px-6 py-7 md:px-10 md:py-9">
        <div className="flex flex-col items-center gap-6">
          {/* Profile Image */}
          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
            <img
              src={userProfile.profileImage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name and Bio */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              {userProfile.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              {userProfile.bio}
            </p>
          </div>
        </div>

        {/* Academic Details */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Academic Details
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <p>
              <span className="font-medium text-slate-800">College: </span>
              {userProfile.college}
            </p>
            <p>
              <span className="font-medium text-slate-800">Department: </span>
              {userProfile.department}
            </p>
            <p>
              <span className="font-medium text-slate-800">Year: </span>
              {userProfile.year}
            </p>
          </div>
        </section>

        {/* Skills and Interests */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Skills & Interests
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <p>
              <span className="font-medium text-slate-800">Skills: </span>
              {userProfile.skills}
            </p>
            <p>
              <span className="font-medium text-slate-800">Interests: </span>
              {userProfile.interests}
            </p>
            <p>
              <span className="font-medium text-slate-800">Availability: </span>
              {userProfile.availability}
            </p>
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Social Links
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <p>
              <span className="font-medium text-slate-800">GitHub: </span>
              <a
                href={userProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {userProfile.github}
              </a>
            </p>
            <p>
              <span className="font-medium text-slate-800">LinkedIn: </span>
              <a
                href={userProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {userProfile.linkedin}
              </a>
            </p>
            <p>
              <span className="font-medium text-slate-800">Portfolio: </span>
              <a
                href={userProfile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {userProfile.portfolio}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;