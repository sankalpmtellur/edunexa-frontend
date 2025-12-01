import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const username = "username";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-slate-50 flex flex-col">
      <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white text-sm font-semibold shadow-sm">
            EN
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            EduNexa
          </span>
        </Link>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 bg-white px-8 py-8 overflow-y-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Welcome {username}
          </h2>
          <p className="text-xl font-semibold text-slate-900">
            Content of Dashboard
          </p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;