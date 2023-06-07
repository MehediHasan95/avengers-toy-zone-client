import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import errPic from "../../assets/error.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center text-russianViolet">
        <img src={errPic} alt="error_picture" />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
        <button
          onClick={() => navigate(from, { replace: true })}
          className="w-2/5 p-1 rounded-lg my-3 bg-blueViolet text-white"
        >
          <FontAwesomeIcon icon={faBackward} /> Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
