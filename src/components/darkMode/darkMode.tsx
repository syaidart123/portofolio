"use client";
import { createContext, useState, useEffect, useContext } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State untuk memastikan localStorage telah dibaca

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
    setIsMounted(true); // Tandai bahwa localStorage telah diakses
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Hanya simpan ke localStorage setelah mounted
      if (darkMode) {
        localStorage.setItem("darkMode", "true");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("darkMode", "false");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, isMounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!isMounted) return null; // Jangan render apa pun sampai localStorage dibaca

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
