import Container from "../Container";
import FooterComp from "./FooterComp";

const Footer = () => {
  return (
    <Container>
      <div className="bg-gradient-to-t from-[#153200] to-[#163300] p-6 md:p-[60px] rounded-b-3xl md:rounded-b-[4rem] rounded-[4rem] mt-28 mb-2 md:mb-8">
        <div>
          <FooterComp></FooterComp>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-8 bg-[#9fe870] rounded-[2.5rem] mt-4 py-14 md:py-28">
          <div className="w-[2.5rem] md:w-[8rem]">
            <img src="medicine.png" alt="" className="w-full"/>
          </div>
          <h2 className="text-3xl md:text-[8rem] text-[#163300] font-bold">
            OushodhChai
          </h2>
        </div>
        <div className="flex justify-between items-center mt-10 text-[#9fe870]">
          <p>&copy; 2024 OusodhChai</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
