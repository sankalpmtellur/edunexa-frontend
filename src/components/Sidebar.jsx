import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MessageCircle,
  Users,
  FolderGit2,
  UserSearch,
  Sparkles,
  Settings,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useSidebar } from "../contexts/SidebarContext";

function Sidebar() {
  const location = useLocation();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/messages", label: "Messages", icon: MessageCircle },
    { to: "/friends", label: "Connections", icon: Users },
    { to: "/projects", label: "Projects", icon: FolderGit2 },
    { to: "/find-teammates", label: "Opportunities", icon: UserSearch },
    { to: "/hackathons", label: "Hackathons", icon: Sparkles },
    { to: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 ${
        isCollapsed ? "w-20" : "w-64"
      } flex flex-col border-r border-slate-200 bg-white ${
        isCollapsed ? "px-3" : "px-6"
      } py-6 h-[calc(100vh-4rem)] z-20 transition-all duration-300`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`mb-4 ${
          isCollapsed ? "self-center" : "self-end"
        } text-slate-600 hover:text-slate-800 transition-colors`}
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <nav className="flex flex-col space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center ${
                isCollapsed ? "justify-center w-full" : "gap-3"
              } ${
                isCollapsed ? "h-12 w-12" : "px-3"
              } py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title={isCollapsed ? item.label : ""}
            >
              <Icon 
                size={isCollapsed ? 20 : 20} 
                className={isActive ? "text-white" : "text-slate-500"} 
              />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="pb-4">
        <Link
          to="/profile"
          className={`flex items-center ${
            isCollapsed ? "justify-center w-full h-12" : "gap-3 px-3"
          } py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
            location.pathname === "/profile"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100"
          }`}
          title={isCollapsed ? "Profile" : ""}
        >
          <User
            size={isCollapsed ? 20 : 20}
            className={
              location.pathname === "/profile"
                ? "text-white"
                : "text-slate-500"
            }
          />
          {!isCollapsed && <span>Profile</span>}
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;