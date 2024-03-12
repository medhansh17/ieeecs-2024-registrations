const ErrorButton = (props) => {
  return (
    <button
      type="button"
      className="text-light-main dark:text-black  dark:bg-light-main bg-black dark:hover:bg-light-main/90  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:px-5 sm:py-2.5 text-center flex sm:me-2 sm:mb-2 gap-2 w-fit flex-col sm:flex-row justify-center items-center px-0 py-0 mb-8"
      onClick={() => window.open("https://www.google.com", "_blank")}
    >
      <img src={props.src} alt={props.title} />
      <p className="sm:inline hidden m-0">Connect with us in {props.title}</p>
    </button>
  );
};

export default ErrorButton;
