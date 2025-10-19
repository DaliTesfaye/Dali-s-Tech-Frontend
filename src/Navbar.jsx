import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import logo from "./assets/logo.png";
import { useAuth } from "./Context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const nav = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Contact", to: "/contact" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-[#1b0079] to-black/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            {/* left: logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="DalixTech" className="h-10 w-auto" />
            </Link>

            {/* center / desktop nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-white underline decoration-2 underline-offset-4 decoration-[#E80BFF]"
                        : "text-white/80 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* right: actions */}
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <span className="hidden md:flex items-center gap-2 text-white/90 px-3 py-2 rounded-full bg-[#E80BFF]/10">
                    <User size={16} />
                    <span className="text-sm">{user.email}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-[#1b0079] font-semibold hover:brightness-95 transition"
                  >
                    <LogOut size={16} />
                    <span className="text-sm">Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-[#1b0079] font-semibold hover:brightness-95 transition"
                  aria-label="Login"
                >
                  <User size={16} />
                  <span className="text-sm">Login</span>
                </Link>
              )}

              {/* mobile menu button */}
              <button
                onClick={() => setOpen((s) => !s)}
                className="inline-flex md:hidden items-center p-2 rounded-md text-white hover:bg-white/5 transition"
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-black/80 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-white/90 py-2 px-3 rounded-md transition ${
                      isActive ? "bg-white/5" : "hover:bg-white/3"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {user ? (
                <>
                  <div className="flex items-center gap-2 text-white/90 px-3 py-2 rounded-full bg-[#E80BFF]/10">
                    <User size={16} />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="mt-2 w-full flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1b0079] font-semibold"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block mt-1 w-fit px-4 py-2 rounded-full bg-white text-[#1b0079] font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Login / Sign up</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
