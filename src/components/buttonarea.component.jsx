/* eslint-disable react/prop-types */
function ButtonArea({ theme, onclick, lightimage, darkimage }) {
  return (
    <section className="flex flex-row items-center absolute bottom-6 w-8/12">
      <hr className="hidden md:block flex-grow border-2 border-black dark:border-light-main  h-px" />
      <img
        src={theme === "light" ? lightimage : darkimage}
        alt="description"
        className="mx-6 w-96 md:w-72 h-auto ml-14 md:ml-16"
        onClick={onclick}
      />
      <hr className="hidden md:block flex-grow border-2 border-black  dark:border-light-main h-px" />
    </section>
  );
}

export default ButtonArea;
