import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import errPic from "../../assets/error.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
          className="absolute top-5 left-5 w-10 h-10 rounded-full bg-blueViolet text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
