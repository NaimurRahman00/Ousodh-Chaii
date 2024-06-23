import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard Components/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
        <div className="flex-1 max-w-[1680px]">
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
