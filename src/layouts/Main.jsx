import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Navbarr from "../components/Shared/Navbar/Navbarr";
import ScrollToTop from "../components/Mini/ScrollToTop";
const Main = () => {
  return (
    <div className="container max-w-[2160px] mx-auto">
      <ScrollToTop />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <Navbarr></Navbarr>
      </div>
      <div className="md:pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
