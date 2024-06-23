import { MdDelete, MdLocationPin } from "react-icons/md";
import Container from "../../components/Shared/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Getting cart data using TanStack queries
  const { refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => getData(),
  });

  // getting cart data using axios
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`);
      const data = response.data;
      setCart(data);
      setIsLoading(false);
      localStorage.setItem('cart', JSON.stringify(data));
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  // Effect to fetch cart data from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedQuantities = {};
    storedCart.forEach(item => {
      storedQuantities[item._id] = item.quantity || 1;
    });
    // setCart(storedCart);
    setQuantities(storedQuantities);
    setIsLoading(false);
  }, [cart]);

  // Delete a data using tanstack query
  const { mutate: mutateDelete } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${id}`);
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = async (id) => {
    try {
      await mutateDelete(id);
      // Update localStorage after deletion
      const updatedCart = cart.filter(item => item._id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (err) {
      console.log(err);
    }
  };

  // Delete all cart data
  const deleteAllData = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/cart`);
    localStorage.removeItem('cart');
    setCart([]);
  };

  const handleDeleteAll = () => {
    try {
      deleteAllData();
    } catch (err) {
      console.log(err);
    }
  };

  // Manage quantities for each item
  const handleQuantity = (id, calculate) => {
    const newQuantity = calculate < 1 ? 1 : calculate;
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
    // Store updated quantities in localStorage
    const updatedCart = cart.map(item => ({
      ...item,
      quantity: item._id === id ? newQuantity : (quantities[item._id] || 1)
    }));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total amount without tax and delivery charge
  const totalAmountWithoutExtras = cart.reduce((total, item) => {
    const quantity = quantities[item._id] || 1;
    const price = item.price || item.discounted_price || 12.0;
    return total + price * quantity;
  }, 0);

  // Calculate total amount with tax and delivery charge
  const deliveryCharge = 10.0;
  const tax = 5.0;
  const totalAmountWithExtras = totalAmountWithoutExtras + deliveryCharge + tax;
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 md:px-10 mt-2">
        <div className="col-span-1 md:col-span-2">
          <div className="flex justify-between items-center px-6 py-3 border border-black/10 rounded-2xl bg-[#f4f4f5]">
            <h2 className="text-xl font-semibold">
              My Cart{" "}
              <span className="text-sm font-bold px-3 py-0.5 bg-[#9fe870] rounded-full ml-2">
                {cart?.length}
              </span>
            </h2>
            <div className="flex items-center gap-2">
              <h2
                onClick={handleDeleteAll}
                className="text-lg font-semibold text-black/70 shadow-sm shadow-[#343434] px-4 py-0.5 rounded-lg bg-red-300 active:scale-95 cursor-pointer"
              >
                Remove all
              </h2>
            </div>
          </div>

          {/* Loading indicator */}
          {isLoading ? (
            <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
              <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-green-400"></div>
            </div>
          ) : cart.length === 0 ? (
            <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
              <p>You have no medicine in cart</p>
            </div>
          ) : (
            <div className="mt-6 flex flex-col gap-4">
              {cart?.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-3xl border p-6 bg-[#f4f4f5]"
                >
                  <div className="flex flex-col col-span-1">
                    <div>
                      <h1 className="text-2xl font-bold text-black/70">
                        {item?.medicine_name}
                      </h1>
                      <p className="text-sm font-semibold text-black/40">
                        {item?.medicine_category}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                      <img src={item?.image} alt="" className="w-3/5" />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col justify-end">
                    <h2 className="font-semibold text-xl text-black/70 underline mb-4">
                      Description
                    </h2>
                    <p>{item?.short_description}</p>
                    <p className="px-4 py-1 bg-[#9fe870] text-black/60 font-bold mt-4 rounded-xl w-fit ">
                      {item?.mass_unit}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 md:mt-6">
                      <h2 className="text-3xl font-semibold mb-3 md:mb-0">
                        ${item?.price || item?.discounted_price || "$12.00"}
                      </h2>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            handleDelete(item?._id);
                          }}
                          className="btn text-2xl bg-[#9ee87063] hover:bg-[#9ee870]"
                        >
                          <MdDelete />
                        </button>
                        <div className="join">
                          <button
                            onClick={() =>
                              handleQuantity(
                                item._id,
                                (quantities[item._id] || 1) - 1
                              )
                            }
                            className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a]"
                          >
                            -
                          </button>
                          <h2 className="join-item text-2xl hover:bg-transparent px-6 py-2">
                            {quantities[item._id] || 1}
                          </h2>
                          <button
                            onClick={() =>
                              handleQuantity(
                                item._id,
                                (quantities[item._id] || 1) + 1
                              )
                            }
                            className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-1 border border-black/10 bg-[#f4f4f5] rounded-3xl">
          <div className="sticky top-16">
            <div className="p-6">
              <h2 className="text-xl font-bold text-black/70 mb-3">
                Order summary
              </h2>
              {cart?.map((item, i) => (
                <div key={i} className="flex justify-between items-center ">
                  <p className="text-base text-black/55 font-semibold">
                    <span className="mr-2">x{quantities[item._id] || 1}</span>{" "}
                    {item?.medicine_name}
                  </p>
                  <p className="text-lg font-bold text-black/60">
                    $
                    {((item?.price || item?.discounted_price || "$12.00") *
                      (quantities[item._id] || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <hr />
            <div className="p-6">
              <h2 className="flex justify-between items-center">
                <span className="text-base text-black/55 font-semibold">
                  Amount
                </span>{" "}
                <span className="text-lg font-bold text-black/60">
                  ${totalAmountWithoutExtras.toFixed(2)}
                </span>
              </h2>
            </div>
            <hr />
            <div className="p-6 space-y-1">
              <h2 className="flex justify-between items-center">
                <span className="text-base text-black/55 font-semibold">
                  Tax
                </span>{" "}
                <span className="text-lg font-bold text-black/60">$5.00</span>
              </h2>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base text-black/55 font-semibold">
                  Delivery charge
                </h2>
                <h2 className="text-lg font-bold text-black/60">$10.00</h2>
              </div>
              <div className="flex gap-2 items-center text-base font-bold text-black/70">
                <TbTruckDelivery /> Pathao Express
              </div>
              <div className="flex gap-2 items-center">
                <MdLocationPin /> Deliver to{" "}
                <span className="text-base font-bold text-black/70">
                  Shariatpur, Dhaka
                </span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center p-6">
              <h2 className="text-lg font-bold text-black/70">Order total</h2>
              <h2 className="text-lg font-bold text-black/60">
                ${totalAmountWithExtras.toFixed(2)}
              </h2>
            </div>
            <div className="p-6">
              <label className="input flex items-center gap-2 bg-white rounded-xl w-full overflow-hidden border border-black/20">
                <div className="bg-[#9fe870] -ml-3 p-2.5 font-thin rounded-lg m-1 cursor-pointer">
                  <BiSolidCoupon className="text-xl" />
                </div>
                <input
                  type="text"
                  className="grow outline-none pr-4"
                  placeholder="Add coupon code here"
                />
              </label>
              <Link to="/checkout">
                <button className="btn bg-gradient-to-tr to-lime-300 from-[#9fe870] text-2xl w-full mt-2 hover:bg-[#60a436]">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
