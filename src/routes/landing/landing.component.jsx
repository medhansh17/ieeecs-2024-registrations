import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/heading.component";
import WelcomeBox from "../../components/welcome.component";

/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from "firebase/auth";
import firebaseConfig from "../../../firebase.config";

import validateEmail from "./validatemail";

function Landing() {
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);
  const [errorVisibility, setErrorVisibility] = useState("hidden");
  const navigate = useNavigate();

  const handleErrors = (e) => {
    setError(e);
    setErrorVisibility("visible");
    setTimeout(() => {
      setErrorVisibility("hidden");
    }, 5000);
  };

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

  function Gauth() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        if (!validateEmail(user.email)) {
          signOut(auth);
          deleteUser(auth.currentUser);
          //send an error saying not vit email
          handleErrors("Please use your VIT email address");
        } else {
          //send to the next page
          console.log("!O!O!O!O");
          navigate("/domains");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        handleErrors(errorMessage);
      });
  }

  return (
    <>
      <main className="min-h-screen h-full min-w-full bg-light-main pt-10 flex flex-col items-center dark:bg-black ">
        <Heading text="IEEE-CS" />
        <WelcomeBox theme={theme} />
        <section className="flex flex-col w-4/5 mt-10 md:w-1/2 md:mt-5 ">
          <h1 className="text-4xl md:text-5xl text-center font-elephant text-black dark:text-light-main  selection:dark:bg-light-main selection:dark:text-black selection:bg-black selection:text-light-main">
            Empowering seekers of treasure
          </h1>
          <p className="text-sub-text font-outfit text-xl md:text-2xl text-center mt-10 md:mt-6  selection:dark:bg-light-main selection:bg-black">
            Experience our IEEE Computer Society (IEEECS) chapter, where
            innovation meets exploration. Join us as we delve into the exciting
            world of technology, where we empower seekers like you to unearth
            technological treasures.
          </p>
        </section>
        <div
          className={`${errorVisibility} flex flex-row items-center justify-center mt-5 bg-red-400 rounded-xl py-2 font-outfit text-2xl text-center w-2/5 relative`}
        >
          <button
            onClick={() => setErrorVisibility("hidden")}
            className="absolute right-2"
          >
            &#10006;
          </button>
          <p>{error}</p>
        </div>{" "}
        <section className="flex flex-row items-center absolute bottom-6 w-8/12">
          <hr className="hidden md:block flex-grow border-2 border-black dark:border-light-main  h-px" />
          <img
            src={
              theme === "light"
                ? "../src/images/google_light.svg"
                : "../src/images/google_dark.svg"
            }
            alt="description"
            className="mx-6 w-72 h-auto"
            onClick={Gauth}
          />
          <hr className="hidden md:block flex-grow border-2 border-black  dark:border-light-main h-px" />
        </section>
      </main>
    </>
  );
}

export default Landing;
