import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const ManageBannerAdvertise = () => {
  // Getting data using TanStack queries
  const { data: advertise = [], refetch } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => getData(),
  });

  // Getting all slide data
  const { data: bannerSlide = [], refetch: refetchSlider } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => getBannerData(),
  });

  // getting all trending products data using axios
  const getData = async () => {
    const response = await axios(`${import.meta.env.VITE_API_URL}/advertise`);
    return response.data;
  };

  // getting all banner data using axios
  const getBannerData = async () => {
    const response = await axios(`${import.meta.env.VITE_API_URL}/slider`);
    return response.data;
  };

  // Add category using tanstack query
  const { mutateAsync } = useMutation({
    mutationFn: async (slide) => {
      await axios.post(`${import.meta.env.VITE_API_URL}/slider`, slide);
    },
    onSuccess: () => {
      toast.success("Slider added successfully!");
      refetch();
      refetchSlider();
    },
  });

  // post slider
  const handleAddToSlide = async (i) => {
    const slide = advertise[i];
    try {
      await mutateAsync(slide);
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Remove from slider using tanstack query
  const handleRemoveFromSlide = async (medicine_name) => {
    try {
      mutate(medicine_name);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const { mutate } = useMutation({
    mutationFn: async (medicine_name) => {
      await axios.delete(`${import.meta.env.VITE_API_URL}/slider/${medicine_name}`);
    },
    onSuccess: () => {
      refetchSlider();
      toast.success("Slide remove successful!");
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black/70 mb-2">
            All Advertise Request list
          </h1>
        </div>
      </div>
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border-2 border-black/10 md:rounded-2xl">
            <table className="min-w-full divide-y divide-black/10">
              <thead className="bg-[#f1f5f9]">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                  >
                    <button className="flex items-center gap-x-3 focus:outline-none text-nowrap">
                      <span>Medicine Image</span>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black text-nowrap"
                  >
                    Medicine name
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Seller Email
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-end text-black text-nowrap "
                  >
                    Add/Remove Slide
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {advertise.map((add, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <img
                        className="object-cover size-14 -mx-1 rounded-md dark:border-gray-700 shrink-0"
                        src={add.image}
                        alt=""
                      />
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                      {add.medicine_name}
                    </td>
                    <td className="px-12 py-4 text-xs font-medium whitespace-wrap">
                      {add.short_description}
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                      {add.seller_email}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                      {bannerSlide.find((item) => item._id === add._id) ? (
                        <button
                          onClick={() => {
                            handleRemoveFromSlide(add.medicine_name);
                          }}
                          className="hover:bg-red-700 transition-all inline px-3 py-1 text-base font-normal rounded-full text-white gap-x-2 bg-red-600 active:bg-black active:scale-95"
                        >
                          Remove from slide
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            handleAddToSlide(i);
                          }}
                          className="hover:bg-lime-700 transition-all inline px-3 py-1 text-base font-normal rounded-full text-white gap-x-2 bg-lime-600 active:bg-black active:scale-95"
                        >
                          Add to slide
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBannerAdvertise;
