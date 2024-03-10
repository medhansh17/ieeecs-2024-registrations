import { useState, useEffect } from "react";
import ButtonArea from "../../components/buttonarea.component";

const techDomains = ["App Dev", "Web Dev", "DevOps", "Ai/Ml", "RnD"];
const managementDomains = ["Events", "Documentation", "Pnm and Outreach"];
const designDomains = ["Design", "Video Editing"];

const Domains = () => {
  //function to get current theme, dark or light
  const [theme, setTheme] = useState("light");
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

  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedManagement, setSelectedManagement] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState([]);

  const handleOnClickTech = (name) => {
    setSelectedTech((prevSelected) => {
      if (prevSelected.includes(name)) {
        const element = document.getElementById(name);
        element.classList.remove(
          "dark:bg-light-main",
          "dark:text-black",
          "bg-black",
          "text-light-main"
        );
        return prevSelected.filter((item) => item !== name);
      }
      if (prevSelected.length === 2) {
        return prevSelected;
      } else {
        const element = document.getElementById(name);
        element.classList.add(
          "dark:bg-light-main",
          "dark:text-black",
          "bg-black",
          "text-light-main"
        );
        return [...prevSelected, name];
      }
    });
  };
  useEffect(() => {
    console.log(selectedTech);
  }, [selectedTech]);
  const handleOnClickManagement = (name) => {
    setSelectedManagement((prevSelected) => {
      if (prevSelected.includes(name)) {
        const element = document.getElementById(name);
        element.classList.remove(
          "dark:bg-light-main",
          "dark:text-black",
          "bg-black",
          "text-light-main"
        );
        return prevSelected.filter((item) => item !== name);
      }
      if (prevSelected.length === 2) {
        return prevSelected;
      } else {
        const element = document.getElementById(name);
        element.classList.add(
          "dark:bg-light-main",
          "dark:text-black",
          "bg-black",
          "text-light-main"
        );
        return [...prevSelected, name];
      }
    });
  };

  useEffect(() => {
    console.log(selectedManagement);
  }, [selectedManagement]);

  const handleOnClickDesign = (name) => {
    setSelectedDesign((prevSelected) => {
      if (prevSelected.includes(name)) {
        const element = document.getElementById(name);
        element.classList.remove(
          "dark:bg-light-main",
          "dark:text-black",
          "bg-black",
          "text-light-main"
        );
        return prevSelected.filter((item) => item !== name);
      } else {
        const element = document.getElementById(name);
        element.classList.add(
          "dark:bg-light-main",
          "dark:text-black",
          "bg-black",
          "text-light-main"
        );
        return [...prevSelected, name];
      }
    });
  };
  useEffect(() => {
    console.log(selectedDesign);
  }, [selectedDesign]);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="md:w-[90%] w-full h-[95%] flex flex-col items-center xl:gap-2 gap-4">
        <h1 className="font-elephant w-max md:p-3 heading md:text-dynamic-h1 text-4xl p-3">
          Domain Selection
        </h1>
        <div className="w-full h-fit border-t-2 dark:border-t-light-main border-t-black mt-[3%] flex flex-col items-center overflow-visible ">
          <h2 className="w-fit font-elephant relative top-0 translate-y-[-55%] dark:bg-black bg-light-main text-dynamic-h2 px-4 transform scale-x-1/2">
            Technical Domains
          </h2>
          <form className="w-full h-fit flex flex-row md:justify-evenly justify-around xl:mt-[-1%]  md:flex-nowrap flex-wrap mb:gap-0 gap-4">
            {techDomains.map((domain) => (
              <label
                key={domain}
                className="inline-flex items-center w-fit justify-center h-[60px] rounded-2xl lg:dark:hover:bg-light-main lg:dark:hover:text-black text-dynamic-label font-outfit p-4 lg:hover:bg-black lg:hover:text-light-main border-dashed dark:border-light-main border-black border-2 "
                id={domain}
                onClick={() => handleOnClickTech(domain)}
              >
                {domain}
              </label>
            ))}
          </form>
        </div>
        <div className="w-full h-fit border-t-2 dark:border-t-light-main border-t-black mt-[40px] flex flex-col items-center overflow-visible">
          <h2 className="w-fit font-elephant relative top-0 translate-y-[-55%] dark:bg-black bg-light-main text-dynamic-h2 px-4">
            Management Domains
          </h2>
          <form className="w-full h-fit flex flex-row items-center md:justify-evenly justify-around xl:mt-[-1%] md:flex-nowrap flex-wrap mb:gap-0 gap-4">
            {managementDomains.map((domain) => (
              <label
                key={domain}
                className="inline-flex w-fit items-center justify-around h-[60px] rounded-2xl lg:dark:hover:bg-light-main lg:dark:hover:text-black text-dynamic-label font-outfit p-4 md:p-8 lg:hover:bg-black lg:hover:text-light-main  border-dashed dark:border-light-main border-black border-2 "
                id={domain}
                onClick={() => handleOnClickManagement(domain)}
              >
                {domain}
              </label>
            ))}
          </form>
        </div>
        <div className="w-full h-fit border-t-2 dark:border-t-light-main border-t-black mt-[40px] flex flex-col items-center overflow-visible">
          <h2 className="w-fit font-elephant relative top-0 translate-y-[-55%] dark:bg-black bg-light-main text-dynamic-h2 px-4">
            Design Domains
          </h2>
          <form className="w-full h-fit flex flex-row items-center md:justify-evenly justify-around xl:mt-[-1%] md:flex-nowrap flex-wrap ">
            {designDomains.map((domain) => (
              <label
                key={domain}
                className="inline-flex w-fit items-center justify-center h-[60px] rounded-2xl lg:dark:hover:bg-light-main lg:dark:hover:text-black text-dynamic-label font-outfit p-4 md:p-8 lg:hover:bg-black lg:hover:text-light-main  border-dashed dark:border-light-main border-black border-2"
                id={domain}
                onClick={() => handleOnClickDesign(domain)}
              >
                {domain}
              </label>
            ))}
          </form>
        </div>
        <ButtonArea
          theme={theme}
          lightimage="../src/images/proceedlight.svg"
          darkimage="../src/images/proceeddark.svg"
        />
      </div>
    </div>
  );
};

export default Domains;
