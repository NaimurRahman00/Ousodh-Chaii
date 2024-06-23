import { GoHomeFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";

const SellerMenu = () => {
  return (
    <nav>
      <NavLink
        to="sellerHome"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <GoHomeFill />
        <span className="mx-4 font-medium">Home</span>
      </NavLink>
      <NavLink
        to="manageMedicine"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <AiFillMedicineBox />
        <span className="mx-4 font-medium">Manage Medicines</span>
      </NavLink>
      <NavLink
        to="paymentHistory"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <FaHistory />
        <span className="mx-4 font-medium">Payment History</span>
      </NavLink>
      <NavLink
        to="requestAdvertisement"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <RiAdvertisementFill />
        <span className="mx-4 font-medium">Advertisement</span>
      </NavLink>
    </nav>
  );
};

export default SellerMenu;
