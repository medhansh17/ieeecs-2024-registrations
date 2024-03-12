import React from "react";
import ErrorButton from "../../components/error-button.component";

const Error = () => {
  return (
    <div className="bg-[url('./src/images/image.png')] h-[70vh] w-[100vw] md:bg-cover bg-contain  bg-center bg-no-repeat z-[-1]">
      <div className="w-[90%] absolute bottom-8 flex flex-col gap-8 left-1/2 transform translate-x-[-50%]">
        <p className="md:w-[70%] text-center text-2xl mx-auto">
          It seems like you haven't registered for our chapter yet. We're sorry,
          but you won't be able to proceed further at the moment. If you have
          any questions or need further assistance, please don't hesitate to
          contact us. We're here to help.
        </p>
        <div className="flex flex-row items-center justify-evenly ">
          <ErrorButton src="src\images\instagram.svg" title="Instagram" />
          <ErrorButton src="src\images\socials.png" title="LinkedIn" />
          <ErrorButton src="src\images\twiiter.png" title="Twitter" />
        </div>
      </div>
    </div>
  );
};
export default Error;
