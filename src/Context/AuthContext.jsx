// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function parseJwt(token) {
  // safe jwt parse without external deps
  try {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodeURIComponent(escape(decoded)));
  } catch (e) {
    return null;
  }
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  // initialize token from localStorage if present
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("token") || null;
    } catch {
      return null;
    }
  });

  // derived user from token (id, role, exp, etc.)
  const user = useMemo(() => {
    if (!token) return null;
    const decoded = parseJwt(token);
    // optionally validate exp
    if (decoded && decoded.exp && Date.now() / 1000 > decoded.exp) {
      return null;
    }
    return decoded;
  }, [token]);

  const isAuthenticated = !!user;

  // persist token changes to localStorage
  useEffect(() => {
    try {
      if (token) localStorage.setItem("token", token);
      else localStorage.removeItem("token");
    } catch (err) {
      console.warn("Auth: could not access localStorage", err);
    }
  }, [token]);

  // login(tokenString) — call after successful backend login
  const login = (newToken) => {
    setToken(newToken);
  };

  // logout — clear token and redirect to home or login
  const logout = (redirect = "/") => {
    setToken(null);
    try {
      localStorage.removeItem("token");
    } catch {}
    // optional navigation
    navigate(redirect, { replace: true });
  };

  // helper: returns headers for authenticated fetches
  const authHeaders = useMemo(() => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        login,
        logout,
        authHeaders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// convenience hook
export function useAuth() {
  return useContext(AuthContext);
}
