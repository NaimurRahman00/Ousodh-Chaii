import Container from "../Shared/Container";
import CategoriesCard from "./CategoriesCard.jsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const Categories = () => {

  // Getting data using TanStack queries
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => getData(),
  });

  // getting all trending products data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/categories`);
    return data.data;
  };
  // const data = [10, 16, 8, 10, 11, 13]
  return (
    <Container>
      <div className="bg-white rounded-t-[2rem] z-30 mt-20 relative">
        <div className="py-6 md:py-20 mx-4 md:px-16 relative flex gap-5 md:gap-6 items-center justify-between overflow-x-auto bg-white rounded-t-[2rem]">
          {categories.map((item, index) => (
            <CategoriesCard key={index} item={item} index={index}></CategoriesCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
