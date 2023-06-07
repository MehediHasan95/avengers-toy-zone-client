import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");

  const handleAuthentication = (e) => {
    e.preventDefault();
    const displayName = e?.target?.displayName?.value;
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;
    const photoURL = e?.target?.photoURL?.value;
    console.log(displayName, email, password, photoURL);
  };

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto min-h-[70vh] grid place-items-center">
      <div className="w-10/12 lg:w-2/5 bg-base-100 p-5 rounded-lg">
        <form onSubmit={handleAuthentication}>
          <h1 className="text-center text-3xl font-bold my-10">
            {toggle ? "Register" : "Sign In"}
          </h1>
          {toggle && (
            <input
              type="text"
              pattern="[a-z A-Z]{0,}"
              name="displayName"
              className="w-full p-3 mb-3 border focus:outline-blueViolet rounded-lg"
              placeholder="Full Name"
              required
            />
          )}
          <input
            type="email"
            pattern="[\S+@\S+\.\S+]{0,}"
            name="email"
            className="w-full p-3 mb-3 border focus:outline-blueViolet rounded-lg"
            placeholder="Email ID"
            required
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              pattern="[a-zA-Z0-9]{6,}"
              name="password"
              className="w-full p-3 mb-3 border focus:outline-blueViolet rounded-lg"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              onClick={() => setShowPass(!showPass)}
              icon={showPass ? faEye : faEyeSlash}
              className="text-xl absolute top-4 right-2 text-blueViolet cursor-pointer"
            />
          </div>
          {toggle && (
            <input
              type="text"
              name="photoURL"
              className="w-full p-3 mb-3 border focus:outline-blueViolet rounded-lg"
              placeholder="PhotoURL"
              required
            />
          )}
          <button className="w-full p-3 mb-3 bg-blueViolet text-white rounded-lg">
            Sign In
          </button>
        </form>
        <p className="text-red-500 text-center">{message}</p>
        <p className="text-center my-5">
          {toggle ? "Already member?" : "New member?"}{" "}
          <button
            onClick={() => setToggle(!toggle)}
            className="text-blueViolet hover:font-bold hover:underline"
          >
            {toggle ? "SignIn" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
