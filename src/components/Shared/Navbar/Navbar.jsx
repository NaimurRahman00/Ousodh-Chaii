import Container from "../Container";
// import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import { IoLanguage } from "react-icons/io5";
// import Select from "../../Mini/Select";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProfileModal from "../../Mini/ProfileModal";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Dark and light mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // cart data
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

  // Notification
  const [showNotification, setShowNotification] = useState(false);

  const handleNotification = () => {
    setShowNotification(!showNotification);
  };

  // cart data
  // const [cart, setCart] = useState([]);
  const { data: myOrder = [] } = useQuery({
    queryKey: ["ordered"],
    queryFn: async () => getOrderedData(),
  });

  // getting cart data using axios
  const getOrderedData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/ordered`);
    const data = response.data;
    return data;
  };

  const myOrderData = myOrder.filter((mine) => mine?.userEmail == user?.email);

  return (
    <Container>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className={`flex justify-between items-center rounded-b-3xl px-4 md:px-10 py-3 md:py-6 -mt-4 fixed top-0 left-6 right-6 max-w-[2120px] mx-auto z-40 shadow-md bg-[#f6f7f8] shadow-[#a1a1a1] dark:shadow-black`}
      >
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
          <label className="swap swap-rotate ml-4">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={handleToggle}
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
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
              <li onClick={() => handleNotification()}>
                <span className="text-2xl text-black  cursor-pointer">
                  <FaBell />
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
                      src={user && user.photoURL ? user.photoURL : "avatarImg"}
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
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm transition-all"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      {/* Modal */}
      <ProfileModal
        openProfileModal={openProfileModal}
        setOpenProfileModal={setOpenProfileModal}
      ></ProfileModal>
      {/*  NOTIFICATION */}
      {showNotification && (
        <div className="min-w-[20rem] max-w-[40rem] flex flex-col-reverse bg-[#f6f7f8] shadow-md shadow-[#707070] rounded-lg fixed top-20 right-20 z-50 overflow-hidden">
          {!myOrderData.length == 0 ? (
            myOrderData.map((product) => (
              <p
                key={product._id}
                className="text-base flex gap-1.5 py-2.5 px-4 border-b border-gray-300 hover:bg-[#ffffff]"
              >
                You orderd{" "}
                <h4 className="text-red-800 flex gap-2">
                  {product.products.map((p, idx) => (
                    <span key={idx}>{p?.name},</span>
                  ))}
                </h4>
              </p>
            ))
          ) : (
            <p className="px-2 py-4 min-w-[20rem] text-center">
              You have no notificaton
            </p>
          )}
        </div>
      )}
    </Container>
  );
};

export default Navbar;
