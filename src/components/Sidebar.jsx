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
    <aside className="w-64 flex-col border-r border-slate-100 bg-white/80 backdrop-blur-xl px-6 py-6 flex h-full">
      <nav className="flex flex-col space-y-1">
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
      
      <div className="mt-auto pt-8">
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