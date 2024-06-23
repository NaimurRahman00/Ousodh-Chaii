import { FaStar } from "react-icons/fa6";

const ShopDetailModal = ({
  openShopDetailModal,
  setOpenShopDetailModal,
  modalData,
}) => {
  return (
    <div className="mx-auto flex w-2/3 items-center justify-center">
      <div
        onClick={() => setOpenShopDetailModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openShopDetailModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-2/5 rounded-2xl p-8 drop-shadow-2xl ${
            openShopDetailModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col gap-2 w-full bg-[#f1f5f9] rounded-[2rem]">
            <div className="flex justify-center items-center w-full relative h-[20rem] overflow-hidden">
              <img
                src={modalData?.image}
                alt={`${modalData.medicine_name} image`}
                className="hover:scale-110 transition-all duration-700"
                width={220}
              />
            </div>
            <div className="rounded-[2rem] border-2 border-black/5 p-4 bg-white space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-black/40 font-semibold">
                  {modalData?.generic_name}
                </h2>
                <h2 className="flex items-center gap-1 text-black/40 font-bold">
                  <FaStar className="text-[#fc8540]" />({modalData?.rating})
                </h2>
              </div>
              <div>
                <h2 className="font-bold text-2xl mb-3 text-[#36395b] leading-[1.3rem]">
                  {modalData?.medicine_name}
                </h2>
                <h2>{modalData?.mass_unit}</h2>
              </div>
              <div className="flex justify-between items-center pt-4">
                <p>{modalData?.short_description}</p>
                <h2 className="text-xl font-bold text-black/70">
                  ${modalData?.price || modalData?.discounted_price}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailModal;
