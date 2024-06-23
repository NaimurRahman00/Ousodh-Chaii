import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const isSmallScreen = window.innerWidth <= 600;
  const isMedScreen = window.innerWidth <= 900;
  const reviews = [
    {
      review_title: "Excellent Service!",
      review:
        "OushodhChai provided me with my medications quickly and efficiently. The ordering process was straightforward, and the delivery was on time. Highly recommend!",
      name: "Tasfiqur Rahman",
    },
    {
      review_title: "Great Quality Products",
      review:
        "I was pleasantly surprised by the quality of the products I received. Everything was well-packaged and exactly as described on the website.",
      name: "Zubaer Khan",
    },
    {
      review_title: "Fantastic Customer Support",
      review:
        "The customer support team at OushodhChai is top-notch. They helped me with my prescription verification and made sure I got my order without any issues.",
      name: "Mahfuz Khan",
    },
    {
      review_title: "Convenient and Reliable",
      review:
        "OushodhChai has made it so convenient to get my medications delivered to my home. Their service is reliable, and I appreciate the regular updates on my order status.",
      name: "Tahosin Islam",
    },
    {
      review_title: "Highly Recommended",
      review:
        "I have been using OushodhChai for a few months now, and I am very satisfied with their service. The prices are competitive, and the delivery is always prompt.",
      name: "Tamim Kazi",
    },
    {
      review_title: "Easy to Use Website",
      review:
        "The website is very user-friendly and easy to navigate. I found the products I needed quickly and checked out without any problems.",
      name: "Ayesha Jui",
    },
    {
      review_title: "Affordable Prices",
      review:
        "OushodhChai offers medications at very affordable prices. I have saved a lot compared to buying from local pharmacies. Definitely my go-to online pharmacy.",
      name: "Rokan Mahmud",
    },
    {
      review_title: "Fast and Secure Delivery",
      review:
        "I received my order much faster than expected. The packaging was secure, and all items were intact. Great experience overall.",
      name: "Adnan Hasan",
    },
  ];

  return (
    <Container>
      <div className="mx-6 md:mx-20 my-24">
        <div className="md:flex md:justify-between items-center mb-6 md:mb-16 ">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#252b61] text-2xl md:text-5xl font-extrabold text-center md:text-start">
              What our Customers say
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <ul className="flex items-center gap-1 *:p-2 *:bg-[#00b67a] md:*:text-3xl *:text-white">
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
              </ul>
              <h2 className="flex text-lg md:text-xl font-bold text-black/80">
                460 Reviews on{" "}
                <IoStarSharp className="text-[#00b67a] text-2xl md:text-3xl mx-2" />{" "}
                TrustPilot
              </h2>
            </div>
          </div>

          <Link className="hidden md:flex">
            <h2 className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-black/70 font-bold text-xl border border-white">
              Swipe right to see more review
              <FaArrowRightLong className="mr-2" />
            </h2>
          </Link>
        </div>
        <div className="">
          <Swiper
            slidesPerView={isSmallScreen ? 1 : isMedScreen ? 3 : 4}
            spaceBetween={10}
            mousewheel={isSmallScreen ? false : true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper cursor-pointer bg-transparent"
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-between gap-6 px-2 bg-transparent"
              >
                <div className="rounded-3xl bg-[#f1f5f9] p-8 h-[25rem] flex flex-col justify-between">
                  <div>
                    <h1 className="text-xl text-black/80 font-bold">
                      {review?.review_title}
                    </h1>
                    <p className="text-lg text-black/75 font-normal py-6">
                      {review?.review}
                    </p>
                  </div>
                  <div>
                    <ul className="flex items-center gap-0.5 *:p-0.5 *:bg-[#00b67a] *:text-base *:text-white mt-6">
                      <li>
                        <IoStarSharp />
                      </li>
                      <li>
                        <IoStarSharp />
                      </li>
                      <li>
                        <IoStarSharp />
                      </li>
                      <li>
                        <IoStarSharp />
                      </li>
                      <li>
                        <IoStarSharp />
                      </li>
                    </ul>
                    <h4 className="text-lg text-black/80 font-bold mt-2">
                      {review?.name}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Review;
