import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ShopDetailModal from "../Mini/ShopDetailModal";

// Loader component
const Loader = () => (
  <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-green-400"></div>
  </div>
);

const AllCategoryDataTable = () => {
  const categoryData = useParams();
  // Getting data using TanStack queries
  const {
    data: category = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/category/${categoryData?.category}`
    );
    return data.data;
  };

  // Add to cart
  const handleAddToCart = async (data) => {
    // console.log(data)
    try {
      // add to cart products
      await axios.post(`${import.meta.env.VITE_API_URL}/cart`, data);
      toast.success("Medicine added to the cart");
    } catch {
      console.log("err");
    }
  };

  // Detail modal
  const [openShopDetailModal, setOpenShopDetailModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleOpenDetailsModal = (data) => {
    setModalData(data);
    setOpenShopDetailModal(true);
  };

  let combinedArray = [].concat(...category);
  // State for Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;

  // Paginated Data
  const paginatedData = combinedArray.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );

  // Calculate Total Pages
  const totalPages = Math.ceil(combinedArray.length / itemsPerPage);

  // Calculate Visible Page Numbers
  const getVisiblePages = () => {
    const maxVisiblePages = 4;
    let start = Math.max(0, pageNumber - Math.floor(maxVisiblePages / 2));
    let end = start + maxVisiblePages;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(0, end - maxVisiblePages);
    }
    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  // Update Page Number
  const updatePageNumber = (num) => {
    if (num < 0 || num >= totalPages) {
      return;
    }
    setPageNumber(num);
  };

  if (isLoading || isPending) {
    return <Loader />;
  }

  return (
    <div className="p-8">
      <div className="">
        <h2 className="text-3xl font-bold text-black/70">
          {categoryData?.category}
          <span className="text-lg ms-2 px-4 py-0 bg-[#9fe870] rounded-2xl">
            {categoryData?.category.length}
          </span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] w-full shadow-md border mx-auto border-gray-100 my-6 overflow-hidden rounded-3xl">
          <thead>
            <tr className="bg-[#9fe870] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">Name</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Description
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Company Name
              </th>
              <th className="py-4 px-6 text-lg border-b text-center">Price</th>
              <th className="py-4 px-6 text-lg border-b text-end text-nowrap">
                Add to cart
              </th>
              <th className="py-4 px-6 text-lg border-b text-end text-nowrap">
                View details
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((cat, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 border-b transition duration-300"
              >
                <td className="py-4 px-4 flex justify-start font-bold">
                  {cat?.medicine_name}
                </td>
                <td className="py-4 px-6 border-b text-xs font-medium">
                  {cat?.short_description}
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  {cat?.company_name}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <div className="inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-[#5ba5da]">
                    {cat?.price}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                  <button
                    onClick={() => handleAddToCart(cat)}
                    className="px-2 py-0.5 text-black text-base transition-colors duration-200 rounded-md font-semibold bg-blue-200 hover:bg-blue-300"
                  >
                    Select
                  </button>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                  <button
                    onClick={() => handleOpenDetailsModal(cat)}
                    className="p-2 text-black text-xl transition-colors duration-200 rounded-lg hover:bg-green-100"
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center gap-3 bg-white p-2 shadow-lg rounded-md w-fit mx-auto select-none shadow-black/10">
        <div
          onClick={() => {
            updatePageNumber(pageNumber - 1);
          }}
          className="hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-[#9ee87053]  px-1 py-1 rounded-md"
        >
          <svg
            className="w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7L10 12L15 17"
              stroke="#6acb2e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-2">
          {visiblePages.map((item) => (
            <div
              key={item}
              onClick={() => {
                setPageNumber(item);
              }}
              className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${
                pageNumber === item ? "bg-[#88e350] text-white" : "bg-white"
              } border-sky-300 font-semibold text-gray-700 py-[6px] rounded-md`}
            >
              {item + 1}
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            updatePageNumber(pageNumber + 1);
          }}
          className="hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-[#9ee87053] px-1 py-1 rounded-md"
        >
          <svg
            className="w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="#6acb2e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* Modal */}
      <ShopDetailModal
        openShopDetailModal={openShopDetailModal}
        setOpenShopDetailModal={setOpenShopDetailModal}
        modalData={modalData}
      ></ShopDetailModal>
    </div>
  );
};

export default AllCategoryDataTable;
