function Heading(props) {
  // eslint-disable-next-line react/prop-types
  return (
    <h1
      className="
  font-elephant
   dark:text-light-main
    text-center
    text-5xl
    md:text-6xl
    selection:dark:bg-light-main selection:dark:text-black selection:bg-black selection:text-light-main
   "
    >
      {props.text}
    </h1>
  );
}

export default Heading;
