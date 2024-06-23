import Container from "../Shared/Container";

const Brands = () => {
  const brands = [{ logo: "https://i.ibb.co/1s6MGH8/download-removebg-preview-2.png"},
    { logo: "https://i.ibb.co/cQtDXHB/download-removebg-preview-1.png"},
    { logo: "https://i.ibb.co/9Z5GvC6/download-removebg-preview.png"},
    { logo: "https://i.ibb.co/4ZCgV7F/beximco-pharmaceuticals-ltd-600-removebg-preview.png"},
    { logo: "https://i.ibb.co/f13Gb0H/images-removebg-preview.png"},
    { logo: "https://i.ibb.co/s5WHNHx/eskayef-removebg-preview.png"},
    { logo: "https://i.ibb.co/pPsjxmZ/renata-limited-logo-removebg-preview.png"}
    ]
  return (
    <Container>
      <div className="mx-3 md:mx-20">
        <div>
          <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold mb-4 md:mb-16 text-center md:text-start">
            Featured Brands
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-between overflow-x-auto w-full">
          {brands.map((brand, index) => (
            <div key={index}>
              <div className="bg-[#f1f5f9] rounded-full size-20 md:size-40 flex justify-center items-center overflow-hidden">
                <img src={brand?.logo} alt="Brand Logo" width={100}/>
              </div>
              <h2 className="text-sm md:text-xl font-bold text-center text-black/70 mt-2">Brand Name</h2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brands;
