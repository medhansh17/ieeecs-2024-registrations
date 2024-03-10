import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/heading.component";
import WelcomeBox from "../../components/welcome.component";
import Maintext from "../../components/maintext.component";
import ButtonArea from "../../components/buttonarea.component";
import Arrow from "../../components/arrow.component";

function Landing() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
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

    // Set theme from system preference on load
    setThemeFromSystem();

    // Update theme when system preference changes
    mediaQuery.addEventListener("change", setThemeFromSystem);

    // Clean up event listener
    return () => {
      mediaQuery.removeEventListener("change", setThemeFromSystem);
    };
  }, []);

  return (
    <main className="min-h-screen h-full min-w-full bg-light-main pt-10 flex flex-col items-center dark:bg-black ">
      <Heading text="IEEE-CS" />
      <WelcomeBox theme={theme} text="Brings You" />
      <section className="flex flex-col w-4/5 mt-10 md:w-2/5 md:mt-10 ">
        <Maintext text="Recruitment Portal 2024-2025 " />
      </section>
      <Arrow theme={theme} margin="mt-48" />
      <ButtonArea
        theme={theme}
        lightimage="../src/images/getstarted_light.svg"
        darkimage="../src/images/getstarted_dark.svg"
        onclick={() => navigate("/welcome")}
      />
    </main>
  );
}

export default Landing;
