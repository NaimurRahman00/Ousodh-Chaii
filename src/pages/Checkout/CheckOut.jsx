import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const CheckOut = () => {
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => await getData(),
  });

  const [quantities, setQuantities] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const getData = async () => {
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
    return data.data;
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedQuantities = {};
    storedCart.forEach(item => {
      storedQuantities[item._id] = item.quantity || 1;
    });
    setQuantities(storedQuantities);
  }, []);

  console.log(quantities)

  const calculateOrderTotalWithoutExtras = () => {
    let total = 0;
    cart.forEach((item) => {
      const quantity = quantities[item._id] || 1;
      total += (item.price || item.discounted_price || 12.0) * quantity;
    });
    return total;
  };

  const deliveryCharge = 10.0;
  const tax = 5.0;

  const calculateOrderTotalWithExtras = () => {
    const totalWithoutExtras = calculateOrderTotalWithoutExtras();
    return totalWithoutExtras + deliveryCharge + tax;
  };

  const onSubmit = async (data) => {
    try {
      const orderData = {
        ...data,
        totalAmount: calculateOrderTotalWithExtras(),
        products: cart.map((item) => ({
          name: item.medicine_name,
          price: item.price || item.discounted_price || 12.0,
          quantity: quantities[item._id] || 1,
        })),
      };
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ordered`,
        orderData
      );
      toast.success("Order placed");
      console.log("Checkout successful:", response.data);
      navigate("/invoice", { state: orderData });
      // await clearCart();
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 mt-6 md:-mt-8">
      <Helmet>
        <title>Oushodh Chai | CheckOut</title>
      </Helmet>
      <form
        className="relative flex flex-col md:grid gap-8 lg:grid-cols-3 rounded-xl md:p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* left side */}
        <div className="flex md:flex-col md:justify-between gap-8 col-span-2">
          <div className="w-full rounded-3xl border border-black/10 bg-card text-card-foreground shadow-sm bg-[#f1f5f9]">
            <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
              <h3 className="text-3xl font-semibold whitespace-nowrap">
                Shipping Details
              </h3>
            </div>
            <div className="lg:p-6 p-2">
              {/* Shipping Details form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    type="text"
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <input
                    {...register("address", { required: true })}
                    id="address"
                    type="text"
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <span className="text-red-500">Address is required</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">
                    City
                  </label>
                  <input
                    {...register("city", { required: true })}
                    id="city"
                    type="text"
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <span className="text-red-500">City is required</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium">
                    Country
                  </label>
                  <input
                    {...register("country", { required: true })}
                    id="country"
                    type="text"
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your country"
                  />
                  {errors.country && (
                    <span className="text-red-500">Country is required</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone number
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    id="phone"
                    type="tel"
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <span className="text-red-500">
                      Phone number is required
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="h-full w-full bg-[#f1f5f9] border border-black/10 rounded-3xl md:col-span-1 relative">
          <div className="sticky top-24">
            <div className="p-6">
              <h2 className="text-xl font-bold text-black/70 mb-3">
                Order summary
              </h2>
              {cart?.map((item, i) => (
                <div key={i} className="flex justify-between items-center ">
                  <p className="text-base text-black/55 font-semibold">
                    <span className="mr-2">x{quantities[item._id] || 1}</span> {item?.medicine_name}
                  </p>
                  <p className="text-lg font-bold text-black/60">
                    ${((item?.price || item?.discounted_price || 12.0) * (quantities[item._id] || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <hr />
            <div className="px-6 pt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-base text-black/55 font-semibold">
                  Delivery charge
                </h2>
                <h2 className="text-lg font-bold text-black/60">$10.00</h2>
              </div>
            </div>
            <div className="px-6 pb-6">
              <h2 className="flex justify-between items-center">
                <span className="text-base text-black/55 font-semibold">
                  Tax
                </span>{" "}
                <span className="text-lg font-bold text-black/60">$5.00</span>
              </h2>
            </div>
            <hr />
            <div className="flex justify-between items-center p-6">
              <h2 className="text-lg font-bold text-black/70">Order total</h2>
              <h2 className="text-lg font-bold text-black/60">
                ${calculateOrderTotalWithExtras().toFixed(2)}
              </h2>
            </div>
            <div className="p-6">
              <button
                type="submit"
                className="btn bg-gradient-to-tr from-lime-300 to-[#9fe870] text-2xl w-full mt-2 hover:bg-[#60a436]"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CheckOut;
