import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const active = "px-3 text-blueViolet font-bold";
  const inActive = "px-3";

  return (
    <div>
      <div className="navbar bg-base-100 max-w-8xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
          <h1 className="font-lobster text-2xl">AvengersToyZone</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal">
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
          <button>
            Sign In <FontAwesomeIcon icon={faSignIn} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
