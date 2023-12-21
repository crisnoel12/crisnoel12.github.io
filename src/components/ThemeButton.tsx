import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { toggleDarkMode } from "../Utils";

export default function ThemeButton() {
  const { darkMode, setDarkMode }: any = useContext(DarkModeContext);
  return (
    <button
      onClick={() => toggleDarkMode(setDarkMode, darkMode)}
      className={`fixed w-8 h-8 bottom-4 right-4 text-xs md:w-16 md:h-16 md:bottom-8 md:right-8 md:text-base bg-neutral-800 dark:bg-neutral-50 text-white dark:text-black rounded-full font-semibold`}
    >
      {darkMode ? "LHT" : "DRK"}
    </button>
  );
}
