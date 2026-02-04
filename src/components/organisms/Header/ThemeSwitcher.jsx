"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu"; // Daha incə ikonlar
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button 
      className={styles.toggleBtn}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      <div className={styles.iconWrapper}>
        {theme === "dark" ? <LuSun /> : <LuMoon />}
      </div>
    </button>
  );
}