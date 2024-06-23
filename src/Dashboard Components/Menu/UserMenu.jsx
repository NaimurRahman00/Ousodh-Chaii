import { FaHistory } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <nav>
      <Link
        to="userPaymentHistory"
        className="flex items-center px-4 py-2 mt-5 text-gray-600 border-l-4 border-green-500"
        href="#"
      >
        <FaHistory />
        <span className="mx-4 font-medium">Payment History</span>
      </Link>
      
    </nav>
  );
};

export default UserMenu;
