import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Authentication = () => {
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  useTitle("Login");

  const { userSignUp, userProfileUpdate, userSignIn, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleAuthentication = (e) => {
    e.preventDefault();
    setLoader(true);
    const displayName = e?.target?.displayName?.value;
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;
    const photoURL = e?.target?.photoURL?.value;

    if (displayName && photoURL) {
      userSignUp(email, password)
        .then(() => {
          userProfileUpdate(displayName, photoURL)
            .then(() => {
              setLoader(false);
              navigate(from, { replace: true });
            })
            .catch((err) => {
              setMessage(err.code);
              setLoader(false);
            });
        })
        .catch((err) => {
          setMessage(err);
          setLoader(false);
        });
    } else {
      userSignIn(email, password)
        .then(() => {
          navigate(from, { replace: true });
          setLoader(false);
        })
        .catch((err) => {
          setMessage(err.code);
          setLoader(false);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setMessage(err.code));
  };

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto min-h-[70vh] my-10 grid place-items-center">
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
          <button className="w-full p-3 mb-3 bg-blueViolet text-white rounded-lg uppercase">
            {toggle ? (
              <>
                {loader ? (
                  <span className="loading loading-bars loading-xs"></span>
                ) : (
                  "Register"
                )}
              </>
            ) : (
              <>
                {loader ? (
                  <span className="loading loading-bars loading-xs"></span>
                ) : (
                  "Sign In"
                )}
              </>
            )}
          </button>
        </form>
        <p className="text-red-500 text-center">{message}</p>
        <p className="text-center my-5">
          {toggle ? "Already member?" : "New member?"}{" "}
          <button
            onClick={() => setToggle(!toggle)}
            className="text-blueViolet hover:font-bold hover:underline border-none outline-none"
          >
            {toggle ? "SignIn" : "Register"}
          </button>
        </p>

        {toggle || (
          <button
            onClick={handleGoogleSignIn}
            className="w-full p-3 border-none outline-none flex justify-center items-center hover:text-blueViolet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 326667 333333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              width={20}
            >
              <path
                d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                fill="#4285f4"
              />
              <path
                d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                fill="#34a853"
              />
              <path
                d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                fill="#fbbc04"
              />
              <path
                d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                fill="#ea4335"
              />
            </svg>
            <span className="ps-2">Google</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Authentication;
