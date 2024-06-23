import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export const AddCategoryModal = ({ openAddModal, setOpenAddModal, refetch }) => {
  // Add new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const form = e.target;
    const label = form.category_name.value;
    const image = form.image.value;

    const addCategory = {
      label,
      image,
    };

    try {
      await mutateAsync(addCategory);
      form.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Add category using tanstack query
  const { mutateAsync } = useMutation({
    mutationFn: async (addCategory) => {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/categories`,
        addCategory
      );
    },
    onSuccess: () => {
      refetch()
      setOpenAddModal(false)
      toast.success("Category added successfully!");
    },
  });

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <Helmet>
        <title>OushodhChai | Admin DashBoard</title>
      </Helmet>
      <div
        onClick={() => setOpenAddModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openAddModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-emerald-600/15 shadow-md shadow-lime-800 backdrop-blur-md drop-shadow-2xl sm:w-[500px] ${
            openAddModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form
            onSubmit={handleAddCategory}
            className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
          >
            <svg
              onClick={() => setOpenAddModal(false)}
              className="mx-auto mr-0 w-10 cursor-pointer fill-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
              </g>
            </svg>
            <h1 className="pb-8 text-4xl font-semibold">Add category</h1>
            <div className="space-y-5">
              <label htmlFor="category-name" className="block font-semibold">
                Category Name
              </label>
              <div className="relative">
                <input
                  id="category_name"
                  type="text"
                  name="category_name"
                  placeholder="Vitamin"
                  className="block w-full rounded-lg p-3 pl-5 outline-none drop-shadow-lg bg-black/85 text-white"
                />
              </div>
              <label htmlFor="password_navigate_ui_modal" className="block font-semibold">
                Image
              </label>
              <div className="relative">
                <input
                  id="image"
                  type="text"
                  name="image"
                  placeholder="Example.jpg"
                  className="block w-full rounded-lg p-3 pl-5 outline-none drop-shadow-lg bg-black/85 text-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="relative py-2.5 px-5 rounded-lg mt-6 hover:bg-black/85 text-white drop-shadow-lg bg-gray-700 active:scale-95 transition-all"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
