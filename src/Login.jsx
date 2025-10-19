import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      login(data.token);

      // ✅ SUCCESS
      alert("Login successful!");
      navigate("/"); // redirect to home
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1b0079] to-black px-4">
      <div className="w-full max-w-md">
        <div className="bg-[#0b0715] border border-white/8 rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E80BFF] shadow-md" />
              <h1 className="text-white text-2xl font-bold">DalixTech</h1>
            </div>
            <p className="text-sm text-white/75 mt-3">
              Sign in to your account
            </p>
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-300 bg-red-900/30 p-3 rounded">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            autoComplete="off"
          >
            <label className="block">
              <span className="text-sm text-white/80">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg px-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#E80BFF]/30"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm text-white/80">Password</span>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg px-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#E80BFF]/30"
                placeholder="Your password"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-1 py-3 rounded-md bg-[#E80BFF] text-black font-semibold hover:brightness-95 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="mt-4 text-center text-sm text-white/70">
              Don’t have an account?{" "}
              <Link to="/register" className="text-[#E80BFF] underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
