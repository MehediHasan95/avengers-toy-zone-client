import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");

  const { userSignUp, userProfileUpdate, userSignIn, signInWithGoogle } =
    useContext(AuthContext);

  const handleAuthentication = (e) => {
    e.preventDefault();
    const displayName = e?.target?.displayName?.value;
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;
    const photoURL = e?.target?.photoURL?.value;

    if (displayName && photoURL) {
      userSignUp(email, password)
        .then(() => {
          userProfileUpdate(displayName, photoURL);
        })
        .catch((err) => {
          setMessage(err);
        });
    } else {
      console.log("login");
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {})
      .catch((err) => setMessage(err.code));
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

        <div>
          <button onClick={handleGoogleSignIn} className="w-full p-3">
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
