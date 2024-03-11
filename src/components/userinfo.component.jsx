/* eslint-disable react/prop-types */
function Userinfo({ email, name, photoURL }) {
  return (
    <div className="flex flex-row fixed top-5 right-5 items-center">
      <div className="flex flex-col text-sm text-right font-outfit text-black dark:text-light-main">
        <p>{name}</p>
        <p className="italic">{email}</p>
      </div>
      <img src={photoURL} className="size-8 ml-5 rounded" alt="user"></img>
    </div>
  );
}

export default Userinfo;
