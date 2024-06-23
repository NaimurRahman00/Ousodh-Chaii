import { RiShoppingCartLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import { IoLanguage } from "react-icons/io5";
import Select from "../../Mini/Select";
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";

const Navbarr = () => {
  return (
    <Container>
      <div className="navbar bg-[#f6f7f8] rounded-3xl px-4 md:px-10 py-3 md:py-6 mt-4">
        <div className="navbar-start flex items-center gap-4">
          <div className="md:border-r-2 border-black/20 pr-6">
            <Link to="/" className="flex items-center gap-2 ">
              <img
                // className='hidden md:block'
                src="medicine.png"
                alt="logo"
                width="30"
                height="30"
                className="w-10"
              />
              <h2 className="text-green-900 text-2xl md:text-3xl font-bold">
                Ousodh<span>Chai</span>
              </h2>
            </Link>
          </div>
          <div className="pl-6 flex-col items-end hidden md:flex">
            <h2 className="flex items-center text-base gap-2">
              <IoLanguage className="text-xl" /> Select Language
            </h2>
            <Select></Select>
          </div>
          <div className="ml-6 w-80">
            <label className="input hidden md:flex items-center gap-2 bg-white rounded-full w-full overflow-hidden border border-black/10">
              <div className="bg-[#9fe870] -ml-3 p-2.5 font-thin rounded-full m-1 cursor-pointer">
                <CiSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="grow outline-none pr-4"
                placeholder="Medicine and healthcare items"
              />
            </label>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-lime-600 hover:text-lime-700"
                    : "text-xl font-medium hover:text-black/70"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-lime-600 hover:text-lime-700"
                    : "text-xl font-medium hover:text-black/70"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium text-lime-600 hover:text-lime-700 flex gap-2 items-center transition-all"
                    : "text-xl font-medium hover:text-black/70 flex gap-2 items-center transition-all"
                }
              >
                <RiShoppingCartLine className="text-2xl" />
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow-md bg-base-100 rounded-box -ml-40 shadow-black w-52 "
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-lime-600 hover:text-lime-700"
                      : "text-xl font-medium hover:text-black/70"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-lime-600 hover:text-lime-700"
                      : "text-xl font-medium hover:text-black/70"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-lime-600 hover:text-lime-700 flex gap-2 items-center transition-all"
                      : "text-xl font-medium hover:text-black/70 flex gap-2 items-center transition-all"
                  }
                >
                  <RiShoppingCartLine className="text-2xl" />
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-medium text-lime-600 hover:text-lime-700 flex gap-2 items-center transition-all"
                      : "text-xl font-medium hover:text-black/70 flex gap-2 items-center transition-all"
                  }
                >
                  <RxDashboard className="text-2xl" />
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbarr;
