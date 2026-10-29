"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Currency, ThemeMode } from "@/types/agency";

interface AppContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (ars: number, usd: number) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [currency, setCurrency] = useState<Currency>("ARS");

  useEffect(() => {
    const saved = localStorage.getItem("adrev_theme") as ThemeMode | null;
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("adrev_theme", next);
  };

  const formatPrice = (ars: number, usd: number) => {
    if (currency === "ARS") {
      return `$${ars.toLocaleString("es-AR")} ARS`;
    }
    return `USD $${usd.toLocaleString("en-US")}`;
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, currency, setCurrency, formatPrice }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp debe usarse dentro de un AppProvider");
  }
  return context;
}