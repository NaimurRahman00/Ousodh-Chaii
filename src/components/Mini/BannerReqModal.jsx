import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const BannerReqModal = ({
  openBannerReqModal,
  setOpenBannerReqModal,
  refetch,
}) => {
  const { user } = useAuth();
  const handleAddMedicine = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      medicine_name: form.name.value,
      image: form.image.value,
      short_description: form.description.value,
      seller_email: user?.email,
    };

    try {
      await mutateAsync(formData);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Add medicine using tanstack query
  const { mutateAsync } = useMutation({
    mutationFn: async (formData) => {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/advertise`,
        formData
      );
    },
    onSuccess: () => {
      setOpenBannerReqModal(false);
      refetch();
      toast.success("Advertise request sent successfully!");
    },
  });

  return (
    <div className="mx-auto flex w-2/3 items-center justify-center">
      <div
        onClick={() => setOpenBannerReqModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openBannerReqModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[30%] rounded-3xl bg-gradient-to-tr from-blue-50 to-zinc-300 p-4 drop-shadow-2xl ${
            openBannerReqModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form onSubmit={handleAddMedicine} className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-nowrap border-2 border-black/20 rounded-full px-2">
              <label
                htmlFor="name"
                className="text-base font-medium bg-gradient-to-tr from-black/20 to-black/50 text-white rounded-full px-3 w-[12rem] text-center"
              >
                Item name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="bg-transparent flex h-10 w-full px-3 outline-none"
                placeholder="Glucose-D"
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-nowrap border-2 border-black/20 rounded-full px-2">
              <label
                htmlFor="image"
                className="text-base font-medium bg-gradient-to-tr from-black/20 to-black/50 text-white rounded-full px-3 w-[12rem] text-center"
              >
                Product Image
              </label>
              <input
                name="image"
                id="image"
                className="bg-transparent flex h-10 w-full rounded-md px-3 outline-none"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-nowrap rounded-xl px-2">
              <label
                htmlFor="description"
                className="text-base font-medium bg-gradient-to-tr from-black/20 to-black/50 text-white rounded-md px-3"
              >
                Short description
              </label>
              <textarea
                name="description"
                id="description"
                className="bg-transparent flex h-32 w-full rounded-md p-3 outline-none border-2 border-black/30 resize-none"
                placeholder="Product short description"
              />
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Request"
                className="btn rounded-2xl w-full text-xl  text-white border-none hover:bg-gradient bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerReqModal;
