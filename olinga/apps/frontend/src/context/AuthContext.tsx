import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";
import { apiUrl } from "../i18n";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, { username, password });
      const { token } = response.data;

      setToken(token);
      localStorage.setItem("authToken", token);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error("Авторизація не вдалася", error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
