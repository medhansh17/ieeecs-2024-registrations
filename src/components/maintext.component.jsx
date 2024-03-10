function Maintext({ text }) {
  return (
    <h1 className="text-4xl md:text-5xl text-center font-elephant text-black dark:text-light-main  selection:dark:bg-light-main selection:dark:text-black selection:bg-black selection:text-light-main">
      {text}
    </h1>
  );
}

export default Maintext;
