import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Container from "../../components/Shared/Container";
import { FaEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import ShopDetailModal from "../../components/Mini/ShopDetailModal";

const Shop = () => {
  // Getting data using TanStack queries
  const { data: allData = [], isLoading } = useQuery({
    queryKey: ["all data"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/allData`);
    return data.data;
  };

  let combinedArray = [].concat(...allData);

  // State for Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

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

  return (
    <Container>
      {isLoading ? (
        <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-green-400"></div>
        </div>
      ) : (
        <section className="p-8 -mt-10 mx-auto rounded-[2rem] flex flex-col">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="inline-flex overflow-hidden border-2 bg-[#f1f5f9] divide-x rounded-3xl rtl:flex-row-reverse border-[#9fe870] divide-[#9fe870]">
              <h2 className="px-5 py-2 text-xs font-medium bg-[#9fe870] text-gray-800 transition-colors duration-200 sm:text-sm">
                Price:
              </h2>
              <button className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm hover:bg-[#9fe870]">
                Low to High
              </button>
              <button className="px-5 py-2 text-xs font-medium text-black/80 transition-colors duration-200 sm:text-sm hover:bg-[#9fe870]">
                High to Low
              </button>
            </div>

            <div className="ml-6 w-80">
              <label className="input hidden md:flex items-center gap-2 rounded-full w-full overflow-hidden border-2 border-[#9fe870] bg-[#f1f5f9]">
                <div className="bg-[#9fe870] -ml-3.5 p-2.5 font-thin rounded-full m-1 cursor-pointer">
                  <CiSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  className="grow outline-none pr-4"
                  placeholder="Medicine/Generic Name"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-6 flex-1">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border-2 border-[#9fe870] md:rounded-3xl">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#f1f5f9]">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                        >
                          <button className="flex items-center gap-x-3 focus:outline-none">
                            <span>Image</span>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                        >
                          Medicine name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                        >
                          Company name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                        >
                          Add to cart
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                        >
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {paginatedData.map((data, i) => (
                        <tr key={i}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <img
                              className="object-cover size-14 -mx-1 rounded-md dark:border-gray-700 shrink-0"
                              src={data.image}
                              alt=""
                            />
                          </td>
                          <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                            {data.medicine_name}
                          </td>
                          <td className="px-4 py-4 text-md font-medium text-black/70 whitespace-nowrap">
                            {data.category}
                          </td>
                          <td className="px-4 py-4 text-base font-medium text-black/70 whitespace-nowrap">
                            {data.company_name}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="inline px-3 py-1 text-sm font-bold rounded-full text-black/60 gap-x-2 bg-[#9fe870]">
                              $
                              {data?.price ||
                                data?.discounted_price ||
                                data?.discount.split("%")[0] || data?.price}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleAddToCart(data)}
                              className="px-2 py-0.5 text-black text-base transition-colors duration-200 rounded-md font-semibold bg-blue-200 hover:bg-blue-300"
                            >
                              Select
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleOpenDetailsModal(data)}
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
              </div>
            </div>
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
        </section>
      )}
    </Container>
  );
};

export default Shop;
