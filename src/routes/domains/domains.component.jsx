/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ButtonArea from "../../components/buttonarea.component";
import Userinfo from "../../components/userinfo.component";
import { getDomains } from "../../api";
import Heading from "../../components/heading.component";
import DomainButton from "../../components/domainbutton.component";

const Domains = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [domains, setDomains] = useState([]);

  //function to get current theme, dark or light
  const [theme, setTheme] = useState("light");
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
  }, []);

  //clear localstorage
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  // useEffect(() => {
  // if (user) {
  //   getDomains(user["email"], () => {});
  // }
  //});

  return (
    <>
      <main className="min-h-screen h-full min-w-full  bg-light-main pt-10 flex flex-col items-center dark:bg-black mt-12 md:mt-0">
        <Userinfo
          email={user["email"]}
          name={user["displayName"]}
          photoURL={user["photoURL"]}
          theme={theme}
        />
        <Heading text="Domain Selection" />

        <section className="md:w-11/12 md:h-full flex-grow mb-36 md:mb-20 flex flex-col md:flex-row items-center justify-evenly">
          <div className="flex-shrink-0">
            <DomainButton
              domainName="Technical"
              imgURL="../src/images/techdomain.jpg"
            />
          </div>
          <div className="hidden  md:block flex-grow h-full w-1 md:w-full md:h-1 border-4 border-dashed border-black dark:border-light-main"></div>
          <div className="flex-shrink-0">
            <DomainButton
              domainName="Management"
              imgURL="../src/images/managementdomain.png"
            />
          </div>
          <div className=" hidden md:block flex-grow h-full w-1 md:w-full md:h-1 border-4 border-dashed border-black dark:border-light-main"></div>
          <div className="flex-shrink-0">
            <DomainButton
              domainName="Design"
              imgURL="../src/images/designdomain.svg"
            />
          </div>
        </section>
        <ButtonArea
          theme={theme}
          lightimage="../src/images/proceedlight.svg"
          darkimage="../src/images/proceeddark.svg"
        />
      </main>
    </>
  );
};

export default Domains;
