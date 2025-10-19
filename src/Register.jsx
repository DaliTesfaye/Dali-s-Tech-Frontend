// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!form.username.trim() || !form.email.trim() || !form.password) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Safely parse response
      let data = {};
      const text = await res.text();
      try {
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        console.warn("Failed to parse JSON:", text);
      }

      // Handle errors from backend
      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      // Success: reset form and redirect to login
      setForm({ username: "", email: "", password: "" });
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0226] to-[#040006] px-6 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Illustration / brand block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-col justify-center px-8"
        >
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-[#E80BFF] shadow-[0_10px_40px_rgba(232,11,255,0.12)] flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-black"
              >
                <path
                  d="M3 12h18"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 3v18"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-3">
            Welcome to DalixTech
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fast practical ebooks, cheat-sheets and starter kits designed for
            learners and builders. Create an account to start downloading
            high-quality digital resources.
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <div className="px-3 py-2 bg-white/6 rounded-md text-sm text-white/80">
              Ebooks
            </div>
            <div className="px-3 py-2 bg-white/6 rounded-md text-sm text-white/80">
              Cheatsheets
            </div>
            <div className="px-3 py-2 bg-white/6 rounded-md text-sm text-white/80">
              Starter kits
            </div>
          </div>
        </motion.div>

        {/* Right - Form card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-white/4 to-white/2 backdrop-blur-md border border-white/6 p-8 rounded-2xl shadow-[0_10px_40px_rgba(11,0,121,0.12)]"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">
              Create your account
            </h3>
            <p className="text-sm text-white/80 mt-1">
              Join DalixTech — practical digital products for developers.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-700/20 text-red-100 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <label className="block mb-3">
            <span className="text-sm text-white/90">Username</span>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder:text-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-[#E80BFF]/40"
              placeholder="yourusername"
              autoComplete="username"
            />
          </label>

          <label className="block mb-3">
            <span className="text-sm text-white/90">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder:text-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-[#E80BFF]/40"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="block mb-4 relative">
            <span className="text-sm text-white/90">Password</span>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder:text-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-[#E80BFF]/40 pr-12"
              placeholder="Create a secure password"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible((s) => !s)}
              className="absolute right-3 top-[60%] -translate-y-1/2 text-white/60 hover:text-white"
              aria-label="Toggle password visibility"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-[#E80BFF] text-black font-semibold shadow-md hover:brightness-95 transition"
            aria-busy={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          <div className="mt-4 text-center text-sm text-white/70">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#1b0079] font-semibold underline"
            >
              Sign in
            </Link>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
