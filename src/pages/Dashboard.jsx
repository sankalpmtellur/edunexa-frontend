import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";
import {
  FolderGit2,
  MessageCircle,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";

function Dashboard() {
  const username = "John Doe";
  const { isCollapsed } = useSidebar();

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-slate-50 flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar />

        <main
          className={`flex-1 bg-white px-8 py-8 overflow-y-auto transition-all duration-300 ${
            isCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <section className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
              Welcome {username}!
            </h2>
            <p className="text-sm text-slate-600">
              Here's what's happening in your network today.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl border border-slate-200 bg-indigo-50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  Projects
                </h3>
                <FolderGit2 size={20} className="text-indigo-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">5</p>
              <p className="text-sm text-slate-600">Active projects</p>
              <p className="text-xs text-indigo-600 mt-2 font-medium">
                2 new invites
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-sky-50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                  Messages
                </h3>
                <MessageCircle size={20} className="text-sky-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">12</p>
              <p className="text-sm text-slate-600">Unread messages</p>
              <p className="text-xs text-sky-600 mt-2 font-medium">
                3 new conversations
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-purple-50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Connections
                </h3>
                <Users size={20} className="text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">34</p>
              <p className="text-sm text-slate-600">Total connections</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">
                5 new requests
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Recent Activity
            </h3>
            <div className="rounded-xl border border-slate-200 bg-white divide-y divide-slate-200">
              <div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900">
                    <span className="font-semibold">Jane Doe</span> commented on
                    your project{" "}
                    <span className="font-semibold text-indigo-600">
                      "AI Research"
                    </span>
                    .
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock size={12} className="text-slate-400" />
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm flex-shrink-0">
                  AB
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900">
                    <span className="font-semibold">Alex Brown</span> sent you a
                    connection request.
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock size={12} className="text-slate-400" />
                    <p className="text-xs text-slate-500">5 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm flex-shrink-0">
                  CP
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900">
                    <span className="font-semibold">Chris Parker</span> joined
                    your team for{" "}
                    <span className="font-semibold text-purple-600">
                      "Hackathon 2025"
                    </span>
                    .
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock size={12} className="text-slate-400" />
                    <p className="text-xs text-slate-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/projects"
                className="group flex items-center justify-between rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-4 text-indigo-700 font-medium hover:bg-indigo-100 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
              >
                <span>View My Projects</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/find-teammates"
                className="group flex items-center justify-between rounded-xl border border-sky-200 bg-sky-50 px-6 py-4 text-sky-700 font-medium hover:bg-sky-100 hover:border-sky-300 transition-all shadow-sm hover:shadow-md"
              >
                <span>Find Teammates</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/explore"
                className="group flex items-center justify-between rounded-xl border border-purple-200 bg-purple-50 px-6 py-4 text-purple-700 font-medium hover:bg-purple-100 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
              >
                <span>Explore Opportunities</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;