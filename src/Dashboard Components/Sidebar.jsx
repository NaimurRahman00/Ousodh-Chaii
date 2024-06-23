import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import avatarImg from "../assets/images/placeholder.jpg";
import AdminMenu from "./Menu/AdminMenu";
import SellerMenu from "./Menu/SellerMenu";
import UserMenu from "./Menu/UserMenu";
import useRole from "../hooks/useRole";
const Sidebar = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();
  console.log(role)
  const toggle = true;
  return (
    <aside className="sticky top-0 flex flex-col w-64 h-screen px-1 py-8 bg-[#f5f9fb]">
      <Link to="/" className="flex items-center gap-2 px-4 justify-center">
        <img
          // className='hidden md:block'
          src="https://i.ibb.co/SBTB6sj/medicine.png"
          alt="logo"
          width="30"
          height="30"
          className="w-8"
        />
        <h2 className="text-green-900 text-xl md:text-2xl font-bold">
          Ousodh<span>Chai</span>
        </h2>
      </Link>
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src={user && user.photoURL ? user.photoURL : avatarImg}
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800">
          {user && user.displayName} ({role})
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">
          {user && user.email}
        </p>
      </div>
      {/* Admin, Seller, User menu */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        {role === "Admin" && <AdminMenu></AdminMenu>}
        {role === "Seller" ? (
          toggle ? (
            <SellerMenu></SellerMenu>
          ) : (
            <UserMenu></UserMenu>
          )
        ) : undefined}
        {role === "User" && <UserMenu></UserMenu>}
      </div>
    </aside>
  );
};

export default Sidebar;
