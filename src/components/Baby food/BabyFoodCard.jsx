import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BabyFoodCard = ({ food, refetch }) => {
  const handleAddToCart = async () => {
    try {
      // add to cart products
      await axios.post(`${import.meta.env.VITE_API_URL}/cart`, food);
      refetch()
      toast.success('Item added to the cart')
    } catch {
      console.log('err')
    }
  }
  return (
    <Link
      to={`/details/${food?._id}`}
      className="col-span-1 cursor-pointer group w-full"
    >
      <div className="flex flex-col gap-2 w-full bg-[#f1f5f9] rounded-[2rem]">
        <div className="flex justify-center items-center w-full relative h-[20rem] overflow-hidden">
          <img
            src={food?.image}
            alt=""
            className="hover:scale-110 transition-all duration-700"
            width={220}
          />
        </div>
        <div className="rounded-[2rem] border-2 border-black/5 p-4 bg-white space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-black/40 font-semibold">
              {food?.generic_name}
            </h2>
            <h2 className="flex items-center gap-1 text-black/40 font-bold">
              <FaStar className="text-[#fc8540]" />({food?.rating})
            </h2>
          </div>
          <div>
            <h2 className="font-bold text-xl text-[#36395b] leading-[1.3rem]">
              {food?.medicine_name}
            </h2>
          </div>
          <div className="flex justify-between items-center pt-4">
            <Link onClick={handleAddToCart}>
              <button className="px-4 py-1.5 font-bold text-black/80 border-2 border-[#4a4f7c] text-sm rounded-full hover:bg-[#4a4f7c] hover:text-white/80 transition-all">
                + Add to Cart
              </button>
            </Link>
            <h2 className="text-xl font-bold text-black/70">${parseFloat(food?.price)}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BabyFoodCard;
