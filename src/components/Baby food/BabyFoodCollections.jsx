import Container from "../Shared/Container";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BabyFoodCard from "./BabyFoodCard";


const BabyFoodCollections = () => {
    // Getting data using TanStack queries
    const { data: babyFoods = [], isLoading, refetch } = useQuery({
      queryKey: ["babyFood"],
      queryFn: async () => getData(),
    });
  
    // getting all trending products data using axios
    const getData = async () => {
      const data = await axios(`${import.meta.env.VITE_API_URL}/babyFood`);
      return data.data;
    };

  const isSmallScreen = window.innerWidth <= 600;
  const isMedScreen = window.innerWidth <= 900;
  return (
    <Container>
      <div title="Swipe to see more Baby food" className="mx-4 md:mx-20 my-12 md:my-28">
        <div className="md:flex md:justify-between items-center mb-6 md:mb-16 ">
          <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold text-center md:text-start">
            Baby Food <br /> Collection
          </h1>
          <div className="hidden md:flex">
            <h2 className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-black/70 font-bold text-xl">
              Swipe right to see more product <FaArrowRightLong className="mr-2" />
            </h2>
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={isSmallScreen ? 1 : isMedScreen ? 3 : 4}
            spaceBetween={10}
            mousewheel={isSmallScreen ? false : true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper cursor-pointer bg-transparent"
          >
            {babyFoods.map((food, inx) => (
              <SwiperSlide
                key={inx}
                className="flex justify-between gap-6 px-2 bg-transparent"
              >
                <BabyFoodCard food={food} refetch={refetch}></BabyFoodCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default BabyFoodCollections;
