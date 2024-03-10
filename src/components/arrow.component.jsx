function Arrow({ theme, margin }) {
  return (
    <>
      <img
        src={
          theme === "light"
            ? "../src/images/arrow_light.svg"
            : "../src/images/arrow_light.svg"
        }
        alt="description"
        className={`flex-grow max-h-60 w-auto md:hidden ${margin}`}
      />
    </>
  );
}

export default Arrow;
