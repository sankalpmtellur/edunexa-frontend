import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  User,
  MessageCircle,
  FolderGit2,
  Users
} from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-slate-50 flex">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex md:w-64 flex-col border-r border-slate-100 bg-white/80 backdrop-blur-xl px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white text-sm font-semibold shadow-sm">
              EN
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              EduNexa
            </span>
          </Link>
        </div>

        <nav className="mt-8 space-y-1 text-sm font-medium text-slate-600">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 rounded-xl px-3 py-2 bg-slate-900 text-slate-50 shadow-sm"
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/explore"
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 transition"
          >
            <Compass size={18} className="text-slate-500" />
            <span>Explore</span>
          </Link>
          <Link
            to="/completeprofile"
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 transition"
          >
            <User size={18} className="text-slate-500" />
            <span>Profile</span>
          </Link>
          <Link
            to="/messages"
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 transition"
          >
            <MessageCircle size={18} className="text-slate-500" />
            <span>Messages</span>
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-100 text-xs text-slate-500">
          <p className="font-medium text-slate-600">Tip</p>
          <p className="mt-1">
            Complete your profile to appear in explore and improve your match
            quality.
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
        {/* Top bar */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-500">
              Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Welcome back, student 👋
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Here&apos;s a quick snapshot of what you can do today on EduNexa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-400" />
              Available for new projects
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-1 shadow-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-xs font-semibold text-white">
                S
              </div>
              <span className="text-xs font-medium text-slate-700">
                Your profile
              </span>
            </div>
          </div>
        </header>

        {/* Quick actions */}
        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <Link
            to="/completeprofile"
            className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition hover:border-indigo-100 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <User size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Profile
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Complete your profile
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Add academic, skills, and social details to stand out to potential
              teammates.
            </p>
          </Link>

          <Link
            to="/explore"
            className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition hover:border-indigo-100 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Compass size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Discover
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Explore students & teams
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Browse profiles and projects that match your skills and interests.
            </p>
          </Link>

          <Link
            to="/projects"
            className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition hover:border-indigo-100 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FolderGit2 size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Projects
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Manage your projects
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Keep track of what you&apos;re building and who you&apos;re
              building with.
            </p>
          </Link>
        </section>

        {/* Secondary grid */}
        <section className="grid gap-4 md:grid-cols-3">
          <Link
            to="/messages"
            className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition hover:border-indigo-100 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Messages
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Keep conversations with your teammates in one place.
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/matches"
            className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-4 shadow-sm transition hover:border-indigo-200 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Users size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Matches (coming soon)
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  We&apos;ll surface suggested teammates based on your skills and
                  interests.
                </p>
              </div>
            </div>
          </Link>

          <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Next steps
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
              <li>• Finish at least 80% of your profile.</li>
              <li>• Shortlist 3–5 projects or teams to reach out to.</li>
              <li>• Block 3 hours this week to work on a project you care about.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;