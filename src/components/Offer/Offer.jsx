
import Container from "../Shared/Container";
import { FaArrowRightLong } from "react-icons/fa6";

const Offer = () => {
    const offers = [
      {title: "Maternal Health and Comfort",
        image: "https://i.ibb.co/VgL1fMH/Screenshot-2024-06-09-095529-removebg-preview.png",
        discount: 15,
        bgColor: "#fec091"
      },
      {title: "Headache and Migraine Solution",
        image: "https://i.ibb.co/28gvNFR/Screenshot-2024-06-09-095543-removebg-preview.png",
        discount: 10,
        bgColor: "#a0e1e1"
      },
      {title: "Cold and Flu Relief",
        image: "https://i.ibb.co/RCB5Tt9/Screenshot-2024-06-09-095608-removebg-preview.png",
        discount: 5,
        bgColor: "#ffeb68"
      },
    ]
  return (
    <Container>
      <div className="mx-6 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {/* card 1 */}
        {offers.map((offer, index) => (
          <div key={index} className={`relative bg-[${offer?.bgColor}] rounded-[2rem] p-4 md:p-8 flex-1 max-w-[650px] w-full`}>
            <div className="space-y-1.5 flex gap-4 flex-1 flex-col justify-between md:min-h-[17rem] w-full">
              <div className="flex-1 flex justify-start flex-col">
                <h5 className="whitespace-wrap w-4/6 text-2xl md:text-3xl font-bold text-black/80 tracking-tight mb-4">
                  {offer?.title}
                </h5>
                <p className="text-sm md:text-lg font-semibold text-gray-700 flex gap-2 items-center uppercase">
                  Browse All <FaArrowRightLong />
                </p>
              </div>
              <div className="">
                <h2 className="text-xl font-bold text-black/80">Flat</h2>
                <h3 className="text-2xl font-bold text-black/80"><span className="text-5xl font-bold">5% </span>Off</h3>
              </div>
            </div>
            <div className="absolute right-0 bottom-0">
              <img
                src={offer?.image}
                alt="prescription"
                className="w-[13rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Offer;
