import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // npm install jwt-decode

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Restore user from token (if it exists)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decoded = jwtDecode(storedToken);
      setToken(storedToken);
      setUser(decoded.user || decoded); // adjust based on your backend JWT payload
    }
  }, []);

  // Called after successful login
  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    const decoded = jwtDecode(jwt);
    setToken(jwt);
    setUser(decoded.user || decoded);
  };

  // Called when user logs out
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
