import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const active = "px-3 text-blueViolet underline font-bold";
  const inActive = "px-3";

  return (
    <div>
      <div className="navbar max-w-8xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-russianViolet mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>Home</p>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/alltoys">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>All Toys</p>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/mytoys">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>My Toys</p>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/addtoy">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>Add Toy</p>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>Blog</p>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>About</p>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog">
                  {({ isActive }) => (
                    <p className={isActive ? active : inActive}>Contact</p>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="font-lobster text-2xl">
            <span className="text-russianViolet">Avengers</span>
            <span className="text-blueViolet">ToyZone</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal text-russianViolet">
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>Home</p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/alltoys">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>All Toys</p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/mytoys">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>My Toys</p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/addtoy">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>Add Toy</p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>Blog</p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>About</p>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog">
                {({ isActive }) => (
                  <p className={isActive ? active : inActive}>Contact</p>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/authentication">
            <button>
              Sign In <FontAwesomeIcon icon={faSignIn} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
