import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MessageCircle,
  Users,
  FolderGit2,
  UserSearch,
  Sparkles,
  Settings,
  User
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/messages", label: "Messages", icon: MessageCircle },
    { to: "/friends", label: "Your Friends", icon: Users },
    { to: "/projects", label: "Your Projects", icon: FolderGit2 },
    { to: "/find-teammates", label: "Find teammates", icon: UserSearch },
    { to: "/hackathons", label: "Hackathons", icon: Sparkles },
    { to: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-16 w-64 flex flex-col border-r border-slate-200 bg-white px-6 py-6 h-[calc(100vh-4rem)] z-20">
      <nav className="flex flex-col space-y-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} className={isActive ? "text-white" : "text-slate-500"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pb-4">
        <Link
          to="/profile"
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
            location.pathname === "/profile"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <User size={18} className={location.pathname === "/profile" ? "text-white" : "text-slate-500"} />
          <span>Profile</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;