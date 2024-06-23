import { useMutation, useQuery } from "@tanstack/react-query";
import { AddCategoryModal } from "../../../components/Mini/AddCategoryModal";
import { UpdateCategoryModal } from "../../../components/Mini/UpdateCategoryModal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ConfirmModal } from "../../../components/Mini/ConfirmModal";

const ManageCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [id, setId] = useState("");
  const [deleteId, setDeleteId] = useState()

  // to get all category data using TanStack queries
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => getData(),
  });

  // getting all trending products data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/categories`);
    return data.data;
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black/70">
          All Medicine Category
          <span className="text-lg ms-2 px-4 py-0 bg-[#9fe870] rounded-2xl">
            {data.length}
          </span>
        </h2>
        <button
          onClick={() => setOpenAddModal(true)}
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-black shadow shadow-black/90 transition-all duration-200 bg-[#9fe870] rounded-lg shrink-0 sm:w-auto gap-x-2 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xl">Add a new category</span>
        </button>
      </div>
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden md:rounded-2xl">
            <table className="min-w-full divide-y border-2 divide-black/10">
              <thead className="bg-[#f1f5f9]">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                  >
                    Index
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Category name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-base font-semibold text-left  text-black"
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {data.map((category, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <img
                        className={`object-cover bg-[#${category.bg}] size-14 -mx-1 rounded-md dark:border-gray-700 shrink-0`}
                        src={category.image}
                        alt=""
                      />
                    </td>
                    <td className="px-12 text-base font-medium whitespace-nowrap">
                      {category.label}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button
                        onClick={() => {
                          setId(category._id);
                          setOpenModal(true);
                        }}
                        className="hover:bg-[#74b4d0] inline px-3 py-1 text-base font-bold rounded-lg text-black/60 gap-x-2 bg-[#91d0eb] shadow shadow-black/80 active:scale-95 active:bg-[#63a9c7]"
                      >
                        Update category
                      </button>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button
                        onClick={() => {
                          setDeleteId(category._id);
                          setOpenConfirmModal(true);
                        }}
                        className="hover:bg-red-400 inline px-3 py-1 text-base font-bold rounded-lg text-black/60 gap-x-2 bg-red-300 shadow shadow-black/80 active:scale-95 active:bg-red-500/80"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Update Modal */}
      <UpdateCategoryModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        id={id}
        refetch={refetch}
      ></UpdateCategoryModal>
      {/* Add Category modal */}
      <AddCategoryModal
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        refetch={refetch}
      ></AddCategoryModal>
      {/* Confirm modal */}
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        refetch={refetch}
        deleteId={deleteId}
      ></ConfirmModal>
    </div>
  );
};

export default ManageCategory;
