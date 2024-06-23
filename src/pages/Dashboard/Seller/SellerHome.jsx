import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FcPaid } from "react-icons/fc";
import { MdOutlinePendingActions } from "react-icons/md";

const SellerHome = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black/70 mb-2">
            Dashboard
          </h1>
          <p className="text-lg font-medium text-black/60">
            Here's your dashboard sales details overview
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <select className="select select-bordered select-sm w-fit max-w-xs shadow-sm shadow-black/50">
            <option disabled selected>
              Filter by
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
          <div className="rounded-md active:scale-95 active:bg-[#5eaa2e] select-sm w-fit max-w-xs bg-[#9fe870] shadow-sm shadow-black/50">
            Export
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Sales revenue card */}
        <div className="px-8 py-4 bg-white rounded-lg shadow-md border-2 border-black/10 w-full">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-600">
              Total revenue
            </span>
            <a
              className="py-1 text-lg font-bold text-gray-800 transition-colors duration-300 transform rounded cursor-pointer"
              tabIndex={0}
              role="button"
            >
              <BsThreeDotsVertical />
            </a>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div>
              <h1 className="text-4xl text-black/70 font-bold">$558.59</h1>
              <h2 className="text-xl text-lime-500 flex items-center gap-2 mt-4">
                <FaArrowTrendUp />
                12% <span className="text-black">from last week</span>
              </h2>
            </div>
            <img
              src="https://i.ibb.co/P5rvvPW/growth.png"
              alt=""
              className="w-16"
            />
          </div>
        </div>
        {/* Paid total card */}
        <div className="px-8 py-4 bg-white rounded-lg shadow-md border-2 border-black/10 w-full">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-600">
              Paid total
            </span>
            <a
              className="py-1 text-lg font-bold text-gray-800 transition-colors duration-300 transform rounded cursor-pointer"
              tabIndex={0}
              role="button"
            >
              <BsThreeDotsVertical />
            </a>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div>
              <h1 className="text-4xl text-black/70 font-bold">$499.79</h1>
              <h2 className="text-xl text-lime-500 flex items-center gap-2 mt-4">
                <FcPaid />
                90% <span className="text-black">completed</span>
              </h2>
            </div>
            <img
              src="https://i.ibb.co/kyjxyBk/money.png"
              alt=""
              className="w-20"
            />
          </div>
        </div>
        {/* Pending total card */}
        <div className="px-8 py-4 bg-white rounded-lg shadow-md border-2 border-black/10 w-full">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-600">
              Pending total
            </span>
            <a
              className="py-1 text-lg font-bold text-gray-800 transition-colors duration-300 transform rounded cursor-pointer"
              tabIndex={0}
              role="button"
            >
              <BsThreeDotsVertical />
            </a>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div>
              <h1 className="text-4xl text-black/70 font-bold">$59.59</h1>
              <h2 className="text-xl text-lime-500 flex items-center gap-2 mt-4">
                <MdOutlinePendingActions />
                12% <span className="text-black">from last week</span>
              </h2>
            </div>
            <img
              src="https://i.ibb.co/tQ8fhVK/payment.png"
              alt=""
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
