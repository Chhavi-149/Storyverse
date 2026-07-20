import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const USERS_KEY = "inkwell_users";
const CURRENT_USER_KEY = "inkwell_current_user";

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

  const signup = (userData) => {
    const users = getUsers();

    if (users.some((u) => u.email === userData.email)) {
      throw new Error("An account with this email already exists.");
    }

    const newUser = { id: Date.now().toString(), ...userData };
    users.push(newUser);

    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    setCurrentUser(newUser);

    return newUser;
  };

  const login = (email, password) => {
    const users = getUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      throw new Error("Invalid email or password.");
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(found));
    setCurrentUser(found);

    return found;
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}