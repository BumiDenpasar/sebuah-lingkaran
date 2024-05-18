"use client";
import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import Button from "./Button";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    sessionStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <Button
          name={darkMode ? "Dark Mode" : "Light Mode"}
          type="toggle"
          icon={darkMode ? <MdDarkMode /> : <IoMdSunny />}
          color="yellow"
          dark="slate"
          onclick={() => setDarkMode(!darkMode)}
        />
        <div className="bg-yellow-300 border-yellow-600"></div>
    </div>
  );
};
