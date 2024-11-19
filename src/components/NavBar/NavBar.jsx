import { NavLink } from "react-router-dom";

const NavBar = () => {

  const routes = <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'btn btn-outline btn-success text-white font-semibold text-xl'  // Active state
            : 'text-xl text-black font-semibold'  // Inactive state
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/author"
        className={({ isActive }) =>
          isActive
            ? 'btn btn-outline btn-success text-white font-semibold text-xl'  // Active state
            : 'text-xl text-black font-semibold'  // Inactive state
        }
      >
        Author
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/genre"
        className={({ isActive }) =>
          isActive
            ? 'btn btn-outline btn-success text-white font-semibold text-xl'  // Active state
            : 'text-xl text-black font-semibold'  // Inactive state
        }
      >
        Genre
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/listedBooks"
        className={({ isActive }) =>
          isActive
            ? 'btn btn-outline btn-success text-white font-semibold text-xl'  // Active state
            : 'text-xl text-black font-semibold'  // Inactive state
        }
      >
        Listed Books
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/pagesToRead"
        className={({ isActive }) =>
          isActive
            ? 'btn btn-outline btn-success text-white font-semibold text-xl'  // Active state
            : 'text-xl text-black font-semibold'  // Inactive state
        }
      >
        Pages to Read
      </NavLink>
    </li>
  </>

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {routes}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold text-black">The Book Alley</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-4">
          {routes}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success text-white text-xl font-semibold me-4">Sign In</a>
        <a className="btn btn-info text-xl font-semibold text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
