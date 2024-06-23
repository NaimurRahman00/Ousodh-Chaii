import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export const UpdateCategoryModal = ({ openModal, setOpenModal, id, refetch }) => {
  // Getting data using TanStack queries
  const {
    data: categoryData,
    isLoading,
  } = useQuery({
    queryKey: ["data", id],
    queryFn: () => getData(id),
  });

  const getData = async (id) => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/categories/${id}`
    );
    return data.data;
  };

  // Update data using TanStack query
  const { mutateAsync } = useMutation({
    mutationFn: async (updateCategoryData) => {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/categories/${id}`,
        updateCategoryData
      );
    },
    onSuccess: () => {
      console.log("Mutation successful, calling refetch...");
      refetch();
      setOpenModal(false);
      toast.success("Update successful!");
    },
    onError: (error) => {
      toast.error(`Update failed: ${error.message}`);
    },
  });

  const handleUpdateData = async (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const label = form.category_name.value;
      const image = form.image.value;

      const updateCategoryData = {
        label,
        image,
      };

      await mutateAsync(updateCategoryData);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <Helmet>
        <title>OushodhChai | Admin DashBoard</title>
      </Helmet>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-sky-500/15 shadow-md shadow-black/30 backdrop-blur-xl drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form
            onSubmit={handleUpdateData}
            className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
          >
            <svg
              onClick={() => setOpenModal(false)}
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
            <h1 className="pb-8 text-4xl font-semibold">Update category</h1>
            <div className="space-y-5">
              <label htmlFor="category-name" className="block font-semibold">
                Category Name
              </label>
              <div className="relative">
                <input
                  id="category_name"
                  type="text"
                  name="category_name"
                  defaultValue={categoryData?.label}
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
                  defaultValue={categoryData?.image}
                  className="block w-full rounded-lg p-3 pl-5 outline-none drop-shadow-lg bg-black/85 text-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="relative py-2.5 px-5 rounded-lg mt-6 hover:bg-black/85 text-white drop-shadow-lg bg-gray-700 active:scale-95 transition-all"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
