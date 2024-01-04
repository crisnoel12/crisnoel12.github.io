import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { toggleDarkMode } from "../Utils";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

export default function ThemeButton() {
  const { darkMode, setDarkMode }: any = useContext(DarkModeContext);
  return (
    <>
      <button
        onClick={() => toggleDarkMode(setDarkMode, darkMode)}
        className={`${darkMode ? "text-yellow-400" : "text-neutral-800"}`}
      >
        {darkMode ? (
          <MdLightMode className={`w-7 h-7`} />
        ) : (
          <MdDarkMode className={`w-7 h-7`} />
        )}
      </button>

      <span className={"py-1"}>
        <RxDividerVertical className={`w-8 h-8 md:w-7 md:h-7 block`} />
      </span>
    </>
  );
}
