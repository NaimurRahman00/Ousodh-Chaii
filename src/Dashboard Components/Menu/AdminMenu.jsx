import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <nav>
      <NavLink
        to="adminHome"
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
        to="manageUsers"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <FaUsersCog />
        <span className="mx-4 font-medium">Manage Users</span>
      </NavLink>
      <NavLink
        to="category"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <BiSolidCategoryAlt />
        <span className="mx-4 font-medium">Medicine Category</span>
      </NavLink>
      <NavLink
        to="paymentManagement"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <MdOutlinePayment />
        <span className="mx-4 font-medium">Payment</span>
      </NavLink>
      <NavLink
        to="salesReport"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <TbReportAnalytics />
        <span className="mx-4 font-medium">Sales Report</span>
      </NavLink>
      <NavLink
        to="BannerAdvertise"
        className={({ isActive }) =>
          isActive
            ? "flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500 transition-all"
            : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-all"
        }
        href="#"
      >
        <RiAdvertisementFill />
        <span className="mx-4 font-medium">Banner Advertise</span>
      </NavLink>
    </nav>
  );
};

export default AdminMenu;
