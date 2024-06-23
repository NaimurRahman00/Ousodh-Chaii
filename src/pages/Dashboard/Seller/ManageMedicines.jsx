import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import AddMedicineModal from "../../../components/Mini/AddMedicineModal";
import { useState } from "react";

const ManageMedicines = () => {
  const [openAddMedicineModal, setOpenAddMedicineModal] = useState(false)
  const { user } = useAuth();
  // Getting data using TanStack queries
  const { data: medicines = [], isLoading, refetch } = useQuery({
    queryKey: ["discounted medicines"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/discountedMedicines`
    );
    return data.data;
  };

  const myAddedProduct = medicines.filter(
    (item) => item.seller_email === user.email
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black/70">
          My Medicines{" "}
          <span className="text-lg ms-2 px-4 py-0 bg-gradient-to-r from-[#9fe870] to-[#9ee8706f]  rounded-2xl">
            {myAddedProduct.length}
          </span>
        </h2>
        <button onClick={() => setOpenAddMedicineModal(true)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-black shadow shadow-black/90 duration-200 bg-gradient-to-tr from-[#9fe870] to-[#8cd95b] rounded-lg shrink-0 sm:w-auto gap-x-2 active:scale-95 active:bg-[#86c65f] transition-all">
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
          <span className="text-xl">Add a new Medicine</span>
        </button>
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
                    <button className="flex items-center gap-x-3 focus:outline-none">
                      <span>photo</span>
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
                    className="px-12 py-3.5 text-base font-semibold text-left text-black text-nowrap"
                  >
                    Category name
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black text-nowrap"
                  >
                    Discount
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5  text-base font-semibold text-center rtl:text-right text-black"
                  >
                    Mass Unit <br />
                    (Mg/Ml)
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-base font-semibold text-end  text-black"
                  >
                    Price <br /> (per Unit)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {myAddedProduct.map((item, i) => (
                  <tr key={i}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <img
                        className="object-cover size-14 -mx-1 rounded-md dark:border-gray-700 shrink-0"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                      {item.medicine_name}
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                      {item.discount}
                    </td>
                    <td className="px-12 py-4 text-base text-center font-medium whitespace-nowrap">
                      {item.mass_unit}
                    </td>
                    <td className="px-12 py-4 text-base text-end font-medium whitespace-nowrap">
                      ${item.discounted_price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal */}
      <AddMedicineModal refetch={refetch} openAddMedicineModal={openAddMedicineModal} setOpenAddMedicineModal={setOpenAddMedicineModal}></AddMedicineModal>
    </div>
  );
};

export default ManageMedicines;
