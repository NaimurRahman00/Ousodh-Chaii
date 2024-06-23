import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";

const DiscountedCard = ({ medicine }) => {
  const handleAddToCart = async () => {
    try {
      // add to cart products
      await axios.post(`${import.meta.env.VITE_API_URL}/cart`, medicine);
      toast.success('Product added to the cart')
    } catch {
      console.log("err");
    }
  };
  return (
    <Link
      to={`/details/${medicine?._id}`}
      className="col-span-1 cursor-pointer group w-full"
    >
      <div className="flex flex-col gap-2 w-full h-full bg-[#f1f5f9] rounded-[2rem] my-2 hover:shadow hover:shadow-[#728ba354] ">
        <div className="flex justify-center items-center w-full h-[20rem] relative overflow-hidden">
          <img
            src={medicine?.image}
            alt=""
            className="hover:scale-110 transition-all duration-700"
            width={250}
          />
          <h2 className="absolute right-0 top-10 bg-yellow-400/60 font-bold px-4 py-1 rounded-l-md">
            {medicine?.discount}
          </h2>
        </div>
        <div className="rounded-[2rem] border-2 border-black/5 p-4 bg-white space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-black/40 font-semibold">
              {medicine?.category}
            </h2>
            <h2 className="flex items-center gap-1 text-black/40 font-bold">
              <FaStar className="text-[#fc8540]" />({medicine?.rating})
            </h2>
          </div>
          <div>
            <h2 className="font-bold text-xl text-[#36395b] leading-[1.3rem] mb-2">
              {medicine?.medicine_name}
            </h2>
            <p>{medicine?.mass_unit}</p>
          </div>
          <div className="flex justify-between items-center pt-4">
            <Link onClick={handleAddToCart}>
              <button className="px-4 py-1.5 font-bold text-black/80 border-2 border-[#4a4f7c] text-sm rounded-full hover:bg-[#4a4f7c] hover:text-white/80 transition-all">
                + Add to Cart
              </button>
            </Link>
            <h2 className="text-xl font-bold text-black/70">
              <del className="text-base font-semibold text-black/50 mr-1">
                ${medicine?.previous_price}
              </del>
              ${medicine?.discounted_price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default DiscountedCard;
