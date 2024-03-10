// eslint-disable-next-line react/prop-types
function WelcomeBox({ theme, text }) {
  return (
    <section className="flex flex-row items-center justify-center mt-10 md:mt-6 w-3/5">
      <img
        className="size-10 md:size-12 mt-5  z-10 left-0"
        src={
          theme === "light"
            ? "../src/images/scribble_bottom_dark.svg"
            : "../src/images/scribble_bottom_light.svg"
        }
        alt="scribble"
      />
      <h2 className="text-center rounded-3xl px-4 py-2 italic md:text-2xl font-elephant bg-black dark:bg-light-main text-light-main dark:text-black relative z-20 selection:dark:bg-light-main selection:dark:text-black selection:bg-black selection:text-light-main">
        {text}
      </h2>
      <img
        className="size-10 md:size-12 mb-5  z-10 right-0"
        src={
          theme === "light"
            ? "../src/images/scribble_top_dark.svg"
            : "../src/images/scribble_top_light.svg"
        }
        alt="scribble"
      />
    </section>
  );
}

export default WelcomeBox;
