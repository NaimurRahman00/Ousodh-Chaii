import Container from "../Container";
// import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { IoLanguage } from "react-icons/io5";
import Select from "../../Mini/Select";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProfileModal from "../../Mini/ProfileModal";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // cart data
  // const [cart, setCart] = useState([]);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => getData(),
  });

  // getting cart data using axios
  const getData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
    const data = response.data;
    return data;
  };

  useEffect(() => {
    refetch();
  }, [cart, refetch]);

  // update profile
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleUpdateProfile = () => {
    setOpenProfileModal(true);
  };

  return (
    <Container>
      <div className="flex justify-between items-center bg-[#f6f7f8] rounded-b-3xl px-4 md:px-10 py-3 md:py-6 -mt-4 fixed top-0 left-6 right-6 max-w-[2120px] mx-auto z-40 shadow-md shadow-[#a1a1a1]">
        <div className="flex items-center w-80 md:w-full">
          <div className="md:border-r-2 border-black/20 pr-6">
            <Link to="/" className="flex items-center gap-2 ">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/SBTB6sj/medicine.png"
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
        <div className="flex flex-row  items-center justify-between gap-3 md:gap-0 ">
          {/* Dropdown Menu */}
          <div className="relative flex gap-10 items-center">
            <ul className="hidden md:flex gap-10 items-center">
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
              <li className="relative">
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
                <span className="absolute -top-1 -right-3 text-orange-600  px-1 rounded-full text-xs">
                  {cart?.length === 0 ? "" : cart?.length}
                </span>
              </li>
            </ul>
            <div className="flex flex-row items-center gap-3">
              {/* Dropdown btn */}
              {user ? (
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:bg-[#b3e792] transition overflow-hidden"
                >
                  <div className="size-10">
                    {/* Avatar */}
                    <img
                      className="rounded-full object-cover size-10"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : 'avatarImg'}
                      alt="profile"
                      height="40"
                      width="40"
                    />
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-xl font-medium bg-[#9fe870] px-4 py-2 rounded-2xl hover:scale-105 transition-all w-28 flex justify-center items-center"
                >
                  Join Us
                </Link>
              )}
            </div>
            {isOpen && (
              <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                  <Link
                    to="/"
                    className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Home
                  </Link>

                  {user ? (
                    <>
                      <div
                        onClick={handleUpdateProfile}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Profile
                      </div>
                      <Link
                        to="/dashboard"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Dashboard
                      </Link>
                      <div
                        onClick={logOut}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Modal */}
      <ProfileModal
        openProfileModal={openProfileModal}
        setOpenProfileModal={setOpenProfileModal}
      ></ProfileModal>
    </Container>
  );
};

export default Navbar;
