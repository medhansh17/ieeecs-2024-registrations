import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode"; // Assuming this is installed

const useDarkSide = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const setThemeFromSystem = () => {
      if (mediaQuery.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    };

    mediaQuery.addEventListener("change", setThemeFromSystem);

    return () => {
      mediaQuery.removeEventListener("change", setThemeFromSystem);
    };
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

const SwitchBtn = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
  );
};

export default SwitchBtn;
