import Container from "../Shared/Container";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DiscountedCard from "./DiscountedCard";
import { FaArrowRightLong } from "react-icons/fa6";

const DiscountProduct = () => {
  // Getting data using TanStack queries
  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["discounted medicines"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/discountedMedicines`);
    return data.data;
  };

  const isSmallScreen = window.innerWidth <= 600;
  const isMedScreen = window.innerWidth <= 900;

  return (
    <Container>
      <div className="mx-4 md:mx-20 my-12 md:my-0">
        <div className="flex justify-between items-center">
          <h1 className="text-[#242a60] text-2xl md:text-5xl font-extrabold mb-4 md:mb-16 text-center md:text-start">
            Todays best deals <br /> for you!
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
            {medicines.map((medicine, inx) => (
              <SwiperSlide
                key={inx}
                className="flex justify-between gap-6 px-2 bg-transparent"
              >
                <DiscountedCard medicine={medicine} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default DiscountProduct;
