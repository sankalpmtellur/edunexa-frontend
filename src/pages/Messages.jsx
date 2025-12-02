import { useMemo, useState } from "react";
import {
  Search,
  Send,
  Mail,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../contexts/SidebarContext";

const sampleMessages = [
  { id: 1, from: "them", text: "Hey! Are you still available for the hackathon this weekend?", time: "09:42" },
  { id: 2, from: "me", text: "Yes! I was thinking we could focus on building the matching engine.", time: "09:45" },
  { id: 3, from: "them", text: "Perfect. I can take the UI, you can own backend?", time: "09:47" },
];

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const { isCollapsed } = useSidebar();

  const conversations = useMemo(
    () => [
      {
        id: 1,
        name: "Nishant Ranjan",
        lastMessage: "Sent an attachment",
        time: "18h",
        avatar: "https://ui-avatars.com/api/?name=Nishant+Ranjan&background=4F46E5&color=fff",
      },
      {
        id: 2,
        name: "Mausam",
        lastMessage: "Shared a file",
        time: "5d",
        avatar: "https://ui-avatars.com/api/?name=Mausam&background=0EA5E9&color=fff",
      },
      {
        id: 3,
        name: "Amaan",
        lastMessage: "Active now",
        time: "Online",
        avatar: "https://ui-avatars.com/api/?name=Amaan&background=10B981&color=fff",
      },
    ],
    []
  );

  const activeChat = selectedChat ?? conversations[0] ?? null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setMessageInput("");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-slate-50 flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar />

        <div
          className={`flex flex-1 bg-white overflow-hidden transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-64"
            }`}
        >
          {/* Conversations list */}
          <section className="w-80 border-r border-slate-200 flex flex-col bg-white">
            <div className="px-6 py-4 border-b border-slate-200">
              <p className="text-lg font-semibold text-slate-900">Messages</p>
            </div>

            <div className="px-4 py-3 border-b border-slate-200">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <Search size={18} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="flex px-4 border-b border-slate-200 text-sm font-medium">
              <button className="py-3 text-indigo-600 border-b-2 border-indigo-600">Messages</button>
              <button className="py-3 ml-6 text-slate-500 hover:text-slate-900 transition-colors">Requests</button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((chat) => {
                const isActive = activeChat?.id === chat.id;
                return (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${isActive ? "bg-slate-100" : "hover:bg-slate-50"
                      }`}
                  >
                    <img src={chat.avatar} alt={chat.name} className="h-12 w-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{chat.name}</p>
                      <p className="text-xs text-slate-500 truncate">
                        {chat.lastMessage} · {chat.time}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Chat view */}
          <section className="flex-1 flex flex-col">
            {!activeChat ? (
              <div className="flex flex-1 items-center justify-center text-center px-8">
                <div>
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                    <Mail size={36} className="text-slate-500" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">Your messages</h2>
                  <p className="text-sm text-slate-500 mt-2 max-w-sm">
                    Send messages to your friends and teammates.
                  </p>
                  <button className="mt-4 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">
                    Start a chat
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-white">
                  <img src={activeChat.avatar} alt={activeChat.name} className="h-10 w-10 rounded-full" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 truncate">{activeChat.name}</p>
                    <p className="text-xs text-slate-500 truncate">{activeChat.lastMessage}</p>
                  </div>
                  <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap">
                    View profile
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 bg-slate-50">
                  <div className="space-y-4">
                    {sampleMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.from === "me" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-md rounded-2xl px-4 py-2.5 text-sm ${message.from === "me"
                              ? "bg-indigo-600 text-white rounded-br-sm"
                              : "bg-white text-slate-900 rounded-bl-sm border border-slate-200"
                            }`}
                        >
                          <p className="leading-relaxed">{message.text}</p>
                          <span
                            className={`mt-1 block text-xs ${message.from === "me" ? "text-white/70" : "text-slate-500"
                              }`}
                          >
                            {message.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="px-6 py-4 border-t border-slate-200 bg-white flex items-center gap-3"
                >
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Message..."
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
                  >
                    <Send size={18} />
                    Send
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Messages;