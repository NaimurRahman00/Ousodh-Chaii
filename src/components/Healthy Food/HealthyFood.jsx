import { FaRegHandPointRight } from "react-icons/fa6";
import Container from "../Shared/Container";
import { BiCartAdd } from "react-icons/bi";

const HealthyFood = () => {
  return (
    <Container>
      <div className="mx-2 md:mx-36">
        {/* Cereal Honew flavour */}
        <div className="relative h-[43rem] md:h-[38rem] bg-[#a0e1e1] rounded-t-[2.8rem] overflow-hidden">
          <div className="text-center text-base md:text-xl font-bold py-8">
            <h2>Cereal Honey Flavour</h2>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:flex-1 p-4 md:p-14 -mt-5 md:-mt-14">
              <h2 className="hidden sm:flex text-xl md:text-4xl font-bold text-black/85">
                Cereal Healthy <br /> Food
              </h2>
              <h2 className="sm:hidden text-center text-2xl md:text-4xl font-bold text-black/85">
                Cereal Healthy Food
              </h2>
              <p className="hidden sm:flex font-semibold text-lg text-black/80 md:mt-6 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-4">
                Cereal food offers many benefits that make it <br /> a healthy
                and nutritious breakfast choice
              </p>
              <p className="sm:hidden text-center font-semibold text-base text-black/80 mt-3 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-4">
                Cereal food offers many benefits that make it a healthy and
                nutritious breakfast choice
              </p>
              <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                <FaRegHandPointRight /> Provides essential nutrients
              </p>
              <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                <FaRegHandPointRight /> High in fiber
              </p>
              <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                <FaRegHandPointRight /> Low in fat
              </p>
              <div className="flex py-4">
                <div className="px-5 md:px-10 bg-black/80 rounded-full flex justify-center items-center text-[#a0e1e1] md:text-base font-medium">
                  <h2>Buy now from $50.00</h2>
                </div>
                <div className="p-4  bg-black/80 rounded-full flex justify-center items-center text-[#a0e1e1] text-2xl">
                  <BiCartAdd />
                </div>
              </div>
            </div>
            <div className="md:flex-1 flex justify-center items-center -mt-6 md:-mt-10 w-44 md:w-full mx-auto">
              <img
                src="https://i.ibb.co/WfJbFN3/Screenshot-2024-06-02-202353-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
          {/* Chocolates flavour */}
          <div className="absolute -bottom-[30rem] md:-bottom-[28rem] left-0 right-0 h-[35rem] bg-[#ffeb68] rounded-t-[2.8rem]">
            <div className="text-center text-base md:text-xl font-bold py-2 pb-6">
              <h2>Cereal Honey Flavour</h2>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="md:flex-1 p-4 md:p-14 -mt-5 md:-mt-14">
                <h2 className="hidden sm:flex text-xl md:text-4xl font-bold text-black/85">
                  Cereal Healthy <br /> Food
                </h2>
                <h2 className="sm:hidden text-center text-xl md:text-4xl font-bold text-black/85">
                  Cereal Healthy Food
                </h2>
                <p className="hidden sm:flex font-semibold text-lg text-black/80 mt-6 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-4">
                  Cereal food offers many benefits that make it <br /> a healthy
                  and nutritious breakfast choice
                </p>
                <p className="sm:hidden text-center font-semibold text-lg text-black/80 mt-6 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-4">
                  Cereal food offers many benefits that make it a healthy and
                  nutritious breakfast choice
                </p>
                <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                  <FaRegHandPointRight /> Provides essential nutrients
                </p>
                <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                  <FaRegHandPointRight /> High in fiber
                </p>
                <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                  <FaRegHandPointRight /> Low in fat
                </p>
                <div className="flex py-4">
                  <div className="px-5 md:px-10 bg-black/80 rounded-full flex justify-center items-center text-[#a0e1e1] md:text-base font-medium">
                    <h2>Buy now from $50.00</h2>
                  </div>
                  <div className="p-4  bg-black/80 rounded-full flex justify-center items-center text-[#a0e1e1] text-2xl">
                    <BiCartAdd />
                  </div>
                </div>
              </div>
              <div className="md:flex-1 flex justify-center items-center -mt-6 md:-mt-10 w-44 md:w-full mx-auto">
                <img
                  src="https://i.ibb.co/WfJbFN3/Screenshot-2024-06-02-202353-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Oats flavour */}
          <div className="absolute -bottom-[32.5rem] md:-bottom-[31.5rem] left-0 right-0 h-[35rem] z-20 bg-[#fec091] rounded-t-[2.8rem]">
            <div className="text-center text-base md:text-xl font-bold py-2 pb-6">
              <h2>Cereal Honey Flavour</h2>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="md:flex-1 p-4 md:p-14 -mt-5 md:-mt-14">
                <h2 className="hidden sm:flex text-xl md:text-4xl font-bold text-black/85">
                  Cereal Healthy <br /> Food
                </h2>
                <h2 className="sm:hidden text-center text-xl md:text-4xl font-bold text-black/85">
                  Cereal Healthy Food
                </h2>
                <p className="hidden sm:flex font-semibold text-lg text-black/80 mt-6 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-4">
                  Cereal food offers many benefits that make it <br /> a healthy
                  and nutritious breakfast choice
                </p>
                <p className="sm:hidden text-center font-semibold text-lg text-black/80 mt-6 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-4">
                  Cereal food offers many benefits that make it a healthy and
                  nutritious breakfast choice
                </p>
                <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                  <FaRegHandPointRight /> Provides essential nutrients
                </p>
                <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                  <FaRegHandPointRight /> High in fiber
                </p>
                <p className="font-semibold text-lg text-black/80 mt-2 md:w-4/5 border-b-[3px] border-[#84d7d7] pb-2 flex gap-4 items-center">
                  <FaRegHandPointRight /> Low in fat
                </p>
                <div className="flex py-4">
                  <div className="px-5 md:px-10 bg-black/80 rounded-full flex justify-center items-center text-[#a0e1e1] md:text-base font-medium">
                    <h2>Buy now from $50.00</h2>
                  </div>
                  <div className="p-4  bg-black/80 rounded-full flex justify-center items-center text-[#a0e1e1] text-2xl">
                    <BiCartAdd />
                  </div>
                </div>
              </div>
              <div className="md:flex-1 flex justify-center items-center -mt-6 md:-mt-10 w-44 md:w-full mx-auto">
                <img
                  src="https://i.ibb.co/WfJbFN3/Screenshot-2024-06-02-202353-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HealthyFood;
