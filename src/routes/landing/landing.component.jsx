import { useEffect, useState } from "react";
import Heading from "../../components/heading.component";
import WelcomeBox from "../../components/welcome.component";

/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "../../../firebase.config";

import validateEmail from "./validatemail";

function Landing() {
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

  function Gauth() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        return error;
      });
  }

  return (
    <>
      <main className="min-h-screen h-full min-w-full bg-light-main pt-10 flex flex-col items-center dark:bg-black">
        <Heading text="IEEE-CS" />
        <WelcomeBox theme={theme} />
        <section className="flex flex-col w-4/5 mt-10 md:w-1/2 md:mt-5 ">
          <h1 className="text-4xl md:text-5xl text-center font-elephant text-black dark:text-light-main">
            Empowering seekers of treasure
          </h1>
          <p className="text-sub-text font-outfit text-xl md:text-2xl text-center mt-10 md:mt-6">
            Experience our IEEE Computer Society (IEEECS) chapter, where
            innovation meets exploration. Join us as we delve into the exciting
            world of technology, where we empower seekers like you to unearth
            technological treasures.
          </p>
        </section>
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
