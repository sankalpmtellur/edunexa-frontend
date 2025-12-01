import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  const username = "username";

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-slate-50 flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar />

        <main className="flex-1 bg-white px-8 py-8 overflow-y-auto ml-64">
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