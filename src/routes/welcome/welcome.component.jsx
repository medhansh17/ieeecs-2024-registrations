import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/heading.component";
import WelcomeBox from "../../components/welcome.component";
import ButtonArea from "../../components/buttonarea.component";
import Arrow from "../../components/arrow.component";

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
import Maintext from "../../components/maintext.component";

function Welcome() {
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
        <WelcomeBox theme={theme} text="Welcomes You" />
        <section className="flex flex-col w-4/5 mt-10 md:w-1/2 md:mt-5 ">
          <Maintext text="Empowering seekers of treasure" />
          <p className="text-sub-text font-outfit text-xl md:text-2xl text-center mt-10 md:mt-6  selection:dark:bg-light-main selection:bg-black">
            Experience our IEEE Computer Society (IEEECS) chapter, where
            innovation meets exploration. Join us as we delve into the exciting
            world of technology, where we empower seekers like you to unearth
            technological treasures.
          </p>
        </section>
        <Arrow theme={theme} margin="mt-0" />
        <div
          className={`${errorVisibility} fixed z-20 flex flex-row items-center justify-center mt-5 bg-red-400 rounded-xl py-2 font-outfit text-2xl text-center w-full md:w-2/5 md:relative`}
        >
          <button
            onClick={() => setErrorVisibility("hidden")}
            className="absolute right-2"
          >
            &#10006;
          </button>
          <p>{error}</p>
        </div>{" "}
        <ButtonArea
          theme={theme}
          onclick={Gauth}
          lightimage="../src/images/google_light.svg"
          darkimage="../src/images/google_dark.svg"
        />
      </main>
    </>
  );
}

export default Welcome;
