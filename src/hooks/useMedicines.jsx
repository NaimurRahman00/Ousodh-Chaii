import { useQuery } from "@tanstack/react-query";

const fetchMedicines = async () => {
  const response = await fetch("https://ousodh-chai.vercel.app/allData");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useMedicines = () => {
  return useQuery({
    queryKey: ["medicines"],
    queryFn: fetchMedicines,
  });
};

export default useMedicines;
