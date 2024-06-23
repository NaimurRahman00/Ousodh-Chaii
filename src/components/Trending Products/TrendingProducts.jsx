import Container from "../Shared/Container";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TrendingProductCard from "./TrendingProductCard";

const TrendingProducts = () => {
    // Getting data using TanStack queries
    const { data: products = [], isLoading } = useQuery({
      queryKey: ["trend"],
      queryFn: async () => getData(),
    });
  
    // getting all trending products data using axios
    const getData = async () => {
      const data = await axios(`${import.meta.env.VITE_API_URL}/trendingMedicines`);
      return data.data;
    };
    
  return (
    <Container>
      <div className="mx-3 md:mx-20 py-10 md:py-24">
        <div className="md:flex md:justify-between items-center mb-6 md:mb-16 ">
          <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold text-center md:text-start">
            Trending products <br /> for you!
          </h1>
          <Link className="hidden md:flex">
            <h2 className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-black/70 font-bold text-xl border border-white hover:border hover:border-[#252b61]">
              See All Products
              <FaArrowRightLong />
            </h2>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0,8).map((product, index) => (
            <TrendingProductCard key={index} product={product}></TrendingProductCard>
          ))}
        </div>
        <div className="mt-6 flex justify-center items-center md:hidden">
          <Link className="">
            <h2 className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-white/80 font-semibold text-xl bg-[#252b61] border border-[#252b61] hover:bg-white hover:text-black/85">
              See All Products
              <FaArrowRightLong />
            </h2>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default TrendingProducts;
