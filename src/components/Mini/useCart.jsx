import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchCart = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
  return response.data;
};

const useCart = () => {
  const queryClient = useQueryClient();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const updateCart = async (newCartData) => {
    // Update cart data with the new data
    await axios.post(`${import.meta.env.VITE_API_URL}/cart`, newCartData);
    
    // Invalidate the cart query to refetch the data
    queryClient.invalidateQueries(["cart"]);
  };

  return { cart, refetch, updateCart };
};

export default useCart;
