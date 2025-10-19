import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  // Token simulado: por defecto true (logueado)
  const [token, setToken] = useState(true);

  const login = () => setToken(true);
  const logout = () => setToken(false);

  const value = useMemo(() => ({ token, login, logout }), [token]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de <UserProvider>");
  return ctx;
}