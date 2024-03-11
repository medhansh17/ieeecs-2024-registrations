/* eslint-disable react/prop-types */
function DomainButton({ domainName, imgURL, onclick }) {
  return (
    <div className="flex flex-col items-center md:border-4 border-solid border-black dark:border-light-main p-2 md:p-10">
      <img src={imgURL} className=" size-20 md:size-48" onClick={onclick} />
      <h1 className="mt-5 text-2xl font-bold text-black dark:text-light-main">
        {domainName}
      </h1>
    </div>
  );
}

export default DomainButton;
