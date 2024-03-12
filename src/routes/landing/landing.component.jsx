import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Heading from "../../components/heading.component";
import WelcomeBox from "../../components/welcome.component";
import Maintext from "../../components/maintext.component";
import ButtonArea from "../../components/buttonarea.component";
import Arrow from "../../components/arrow.component";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};
const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <div className="inset-0 flex items-center justify-center">
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black dark:bg-light-main"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={1250}
            height={800}
            className="dark:text-black text-light-main"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-dynamic-h1 font-bold w-fit"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            IEEE-CS
          </text>
          {/* </svg> */}
        </motion.svg>
      </motion.div>
    </div>
  );
};

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
    <>
      <InitialTransition />
      <motion.main
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        className="min-h-screen h-full min-w-full bg-light-main pt-10 flex flex-col items-center dark:bg-black "
      >
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
      </motion.main>
    </>
  );
}

export default Landing;
