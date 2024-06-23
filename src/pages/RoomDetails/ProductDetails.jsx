import { FaFire, FaRegHeart } from "react-icons/fa6";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Rating from "../../components/Mini/Rating";
import { RiHome2Line } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Loader component
const Loader = () => (
  <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-green-400"></div>
  </div>
);

const ProductDetails = () => {
  const { id } = useParams();
  // Getting data using TanStack queries
  const { data: details = [], isLoading } = useQuery({
    queryKey: ["detailss"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/discountedMedicines/${id}`
    );
    const data2 = await axios(
      `${import.meta.env.VITE_API_URL}/trendingMedicines/${id}`
    );
    const data3 = await axios(`${import.meta.env.VITE_API_URL}/babyFood/${id}`);
    return data.data || data2.data || data3.data;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Helmet>
        <title>OushodhChai | Details</title>
      </Helmet>
      <div className="bg-gradient-to-b from-[#e4e4e4] rounded-t-[3rem]">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="relative flex-1 flex items-center justify-center rounded-xl py-10">
            <img
              src={details?.image}
              alt=""
              className="w-[15rem] md:w-[30rem]"
            />
            <div className="absolute top-10 left-10 text-2xl hover:text-red-500 cursor-pointer">
              <FaRegHeart />
            </div>
          </div>
          <div className="flex-1 rounded-xl px-6 md:px-0 md:py-10">
            <p className="text-lg font-bold text-black/70">
              {details?.generic_name}
            </p>
            <h2 className="text-2xl font-bold text-black/80">
              {details?.medicine_name}
            </h2>
            <h2 className="text-base font-medium text-black/50">
              {details?.company_name}
            </h2>
            <h2 className="mt-4 md:mt-10">
              <span className="text-4xl font-bold text-black/85">
                ${details?.discounted_price || details?.price || 20}
              </span>{" "}
              <del className="text-black/40 font-semibold text-lg ms-2">
                ${details?.previous_price}.00
              </del>
            </h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center mt-4">
              <Rating></Rating>
              <p>{details?.rating} | 7 Reviews</p>
              <p className="underline text-blue-400 hover:text-blue-600 md:ms-3">
                Write a review
              </p>
            </div>
            <h4 className="underline text-blue-400 hover:text-blue-600 mt-3">
              Check Stores availability
            </h4>
            <div className="flex items-center gap-4 py-2 md:py-4 px-4 md:px-6 my-4 bg-[#9fe870] md:w-[29rem] rounded-2xl font-bold text-black/90 md:text-xl">
              <RiHome2Line className="text-2xl text-black/90" />
              <h2>Home delivery within 2 Hours</h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="join">
                <button className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a] flex-1">
                  -
                </button>
                <h2 className="join-item text-2xl hover:bg-transparent px-6 py-2 flex-1 text-center">
                  1
                </h2>
                <button className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a] flex-1">
                  +
                </button>
              </div>
              <button className="btn bg-[#9fe870] hover:bg-[#79c44a] text-xl font-semibold md:ml-4">
                Add to Cart
              </button>
              <button className="btn bg-[#9fe870] hover:bg-[#79c44a] text-xl font-semibold">
                Buy Now
              </button>
            </div>
            <div className="flex items-center gap-4 border border-[#5f9a3b] rounded-xl px-2 md:px-6 py-2 md:py-4 my-4 md:text-xl font-medium w-fit">
              <FaFire className="text-orange-600 text-2xl" />
              <h3>Running fast! 100+ sold in the last 7 days</h3>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <div className="w-full flex bg-[#f4f4f5]">
                <Tab className="flex-1 py-2 text-center text-xl ">Details</Tab>
                <Tab className="flex-1 py-2 text-center text-xl">
                  Specifications
                </Tab>
                <Tab className="flex-1 py-2 text-center text-xl">Reviews</Tab>
              </div>
            </TabList>

            <TabPanel className="px-5 md:px-20">
              <h2 className="text-black/70 font-bold text-lg">
                Product Description
              </h2>
              <ul className="list-disc px-10 space-y-1 mt-2 mb-6">
                <li>
                  Nourishing and intensively rehydrating care for a better
                  compliance of ultra-drying treatments.
                </li>
                <li>
                  Sébium Hydra is specifically formulated to biologically
                  counteract temporary side effects of dermatological treatments
                </li>
              </ul>
              <Link className="text-lg font-bold underline text-blue-400">
                Read more
              </Link>
            </TabPanel>
            <TabPanel className="px-5 md:px-20">
              <ul className="list-disc px-16 space-y-2 pt-4 mb-6">
                <li>Manufacturer: 207868</li>
                <li>Product form: 155791</li>
                <li>Product function: 162248</li>
              </ul>
            </TabPanel>
            <TabPanel className="px-5 md:px-20 py-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-3xl text-blue-400">Reviews</h2>
                <button className="text-xl font-bold btn bg-blue-500 text-white rounded-xl hover:bg-blue-700">
                  Write a review
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                    checked
                  />
                </div>
                <h2 className="font-bold text-lg text-black/70">
                  Naimur .{" "}
                  <span className="text-xs font-normal">1 day ago</span>
                </h2>
              </div>
              <div>
                <h2 className="font-medium text-3xl my-3">
                  I like their Service
                </h2>
                <p>
                  I love the Product. Great for acne prone skin, dried out from
                  acne treatments. Replenishes moisture.However, I wish they
                  would improve their containers. The plastic is too rigid to
                  squeeze out the moisturizer, even when there is a lot left. I
                  have to cut open the bottle to get to the moisturizer but then
                  it just dries out more quickly. Such a waste of product. I've
                  been using it for years, but I'm thinking of switching because
                  of this issue.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                    checked
                  />
                </div>
                <h2 className="font-bold  text-lg text-black/70">
                  Zubaer .{" "}
                  <span className="text-xs font-normal">1 Week ago</span>
                </h2>
              </div>
              <div>
                <h2 className="font-medium text-3xl my-3">
                  Super fast delivery
                </h2>
                <p>
                  Great for acne prone skin, dried out from acne treatments.
                  Replenishes moisture.However, I wish they would improve their
                  containers. The plastic is too rigid to squeeze out the
                  moisturizer, even when there is a lot left. I have to cut open
                  the bottle to get to the moisturizer but then it just dries
                  out more quickly. Such a waste of product.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                    checked
                  />
                </div>
                <h2 className="font-bold text-lg text-black/70">
                  Tasfiqur .{" "}
                  <span className="text-xs font-normal">2 week ago</span>
                </h2>
              </div>
              <div>
                <h2 className="font-medium text-3xl my-3">
                  OushodhChai is best
                </h2>
                <p>
                  Replenishes moisture.However, I wish they would improve their
                  containers. The plastic is too rigid to squeeze out the
                  moisturizer, even when there is a lot left.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
