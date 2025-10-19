import { useAuth } from "./Context/AuthContext";
import { User, ShoppingBag, List } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();

  const sidebarItems = [
    { label: "Personal Details", icon: <User size={16} />, path: "#" },
    { label: "My Orders", icon: <List size={16} />, path: "#" },
    { label: "My Purchases", icon: <ShoppingBag size={16} />, path: "#" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0b0715] to-black text-white pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-black/50 border-r border-white/10 p-5 space-y-4">
        <h2 className="text-lg font-semibold mb-4 text-[#E80BFF]">Dashboard</h2>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#E80BFF]/20 transition">
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#E80BFF] mb-6">Welcome, {user?.name || "User"}!</h1>

        <section className="bg-white/10 p-6 rounded-lg border border-white/10 shadow-lg">
          <h2 className="text-lg font-semibold mb-3 text-[#E80BFF]">Personal Information</h2>
          <p><span className="text-white/60">Name:</span> {user?.name || "—"}</p>
          <p><span className="text-white/60">Email:</span> {user?.email}</p>
        </section>

        <div className="mt-10 text-sm text-white/70">
          <p>Later you’ll manage products and orders from here.</p>
        </div>
      </main>
    </div>
  );
}
