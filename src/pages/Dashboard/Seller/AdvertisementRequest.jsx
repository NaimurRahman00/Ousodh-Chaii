import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import AddMedicineModal from "../../../components/Mini/AddMedicineModal";
import BannerReqModal from "../../../components/Mini/BannerReqModal";

const AdvertisementRequest = () => {
  const [openBannerReqModal, setOpenBannerReqModal] = useState(false)

  const { user } = useAuth();
  // Getting data using TanStack queries
  const { data: advertise = [], refetch } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => getData(),
  });

  // Getting all slide data
  const { data: bannerSlide = [] } = useQuery({
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

  const myBannerSlideReq = bannerSlide.filter(
    (item) => item.seller_email === user.email
  );

  const isAdActive = (adId) => {
    return myBannerSlideReq.some((banner) => banner._id === adId);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black/70">
          My advertisement
        </h2>
        <button onClick={() => setOpenBannerReqModal(true)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-black shadow shadow-black/90 duration-200 bg-gradient-to-tr from-[#9fe870] to-[#8cd95b]  rounded-lg shrink-0 sm:w-auto gap-x-2 active:scale-95 active:bg-[#86c65f] transition-all">
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
          <span className="text-xl">Add advertisement</span>
        </button>
      </div>
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border-2 border-black/10 md:rounded-2xl">
            <table className="min-w-full divide-y divide-black/10">
              <thead className="bg-[#f1f5f9] text-nowrap">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                  >
                    <button className="flex items-center gap-x-3 focus:outline-none">
                      <span>Medicine Image</span>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
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
                    Slider status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {advertise.map((ad, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <img
                        className="object-cover size-14 -mx-1 rounded-md dark:border-gray-700 shrink-0"
                        src={ad.image}
                        alt=""
                      />
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                      {ad.medicine_name}
                    </td>
                    <td className="px-12 py-4 text-xs font-medium whitespace-wrap">
                      {ad.short_description}
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                      {isAdActive(ad._id) ? (
                        <div className="inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-[#5ba5da]">
                          Active
                        </div>
                      ) : (
                        <div className="inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-yellow-500">
                          Inactive
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal */}
      <BannerReqModal refetch={refetch} openBannerReqModal={openBannerReqModal} setOpenBannerReqModal={setOpenBannerReqModal}></BannerReqModal>
    </div>
  );
};

export default AdvertisementRequest;
