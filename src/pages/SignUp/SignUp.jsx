import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { TbEyeClosed } from "react-icons/tb";
import { HiOutlineEye } from "react-icons/hi";

// import toast from "react-hot-toast

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pass, setPass] = useState("password");
  const from = location.state || "/";
  const { createUser, user, setUser, updateUserProfile } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  // select role
  const [role, setRole] = useState("User");

  const handleSelectChange = (event) => {
    setRole(event.target.value);
  };

  // Email password sign in
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.toLowerCase();
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    console.log({ name, email, photo, password, role });
    try {
      if (!/^.{6,}$/.test(password)) {
        // return toast.error("Password length must minimum 6 letter!");
        return;
      }
      if (!/^(?=.*[A-Z]).+$/.test(password)) {
        // return toast.error("Password must have an Uppercase letter!");
        return;
      }
      if (!/^(?=.*[a-z]).+$/.test(password)) {
        // return toast.error("Password must have a Lowercase letter!");
        return;
      }
      await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ ...user, photoURL: photo, displayName: name });
      const userInfo = {
        email: email,
        name: name,
        role: role,
      };
      console.log(userInfo)
      axiosPublic.post("/users", userInfo);
      navigate(from, { replace: true });
      // toast.success("Sign up successful!");
    } catch (err) {
      console.log(err);
      // toast.error(err?.message);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-t from-[#16191c] to-[#173003] overflow-hidden">
      <div className="bg-black/50 w-full min-h-screen flex justify-center items-center backdrop-blur-[5rem] z-20">
        <div className="flex flex-col p-6 rounded-md sm:p-10 bg-transparent text-gray-900 sm:border-black/50 sm:border w-[32rem] sm:shadow-2xl sm:shadow-black scale-[0.9]">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-[#9fe870]">Sign up</h1>
            <p className="text-sm text-lime-100/70">
              Welcome to OushodhChai store
            </p>
          </div>
          <form
            onSubmit={handleSignUp}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-[#72bb45]"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="username"
                  required
                  placeholder="Username"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#9fe870] bg-transparent text-white/80"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-[#72bb45]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full lowercase px-3 py-2 border rounded-md border-gray-300 focus:outline-[#9fe870] bg-transparent text-white/80"
                  data-temp-mail-org="0"
                />
              </div>
              {/* Photo upload */}
              <div>
                <label htmlFor="photo" className="block text-sm text-[#72bb45]">
                  Image
                </label>
                <input
                  name="photo"
                  type="url"
                  className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-[#9fe870] dark:file:text-black file:font-semibold dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-300 dark:bg-transparent dark:focus:border-blue-300"
                />
              </div>
              {/* Select Seller or user */}
              <select
                // value={role}
                onChange={handleSelectChange}
                className="select select-success w-full bg-transparent text-white/70 border-gray-300 focus:outline-none focus:ring-none"
              >
                <option className="text-black bg-[#9fe870]" value="User">User</option>
                <option className="text-black bg-[#9fe870]" value="Seller">Seller</option>
              </select>
              <div className="relative">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm mb-2 text-[#72bb45]"
                  >
                    Password
                  </label>
                </div>
                <input
                  type={pass}
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#9fe870] bg-transparent text-white/80"
                />
                {pass === "password" ? (
                  <span onClick={()=> setPass('text')} className="absolute z-50 right-4 top-10 text-xl cursor-pointer text-white/80">
                    <TbEyeClosed />
                  </span>
                ) : (
                  <span onClick={()=> setPass('password')} className="absolute z-50 right-4 top-10 text-xl cursor-pointer text-white/80">
                    <HiOutlineEye />
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#9fe870] font-bold text-xl w-full rounded-md py-2 text-[#16191c] hover:bg-transparent border border-black/0 hover:border-[#9fe870] transition-all hover:text-[#9fe870]"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="px-6 text-lg text-center text-lime-100/70 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-[#9fe870] text-white/50 font-semibold text-base"
            >
              Login.
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute w-[50rem] h-[20rem] bg-gradient-to-r to-lime-300 from-blue-200 left-1/3  top-20 rounded-full -rotate-45"></div>
    </div>
  );
};

export default SignUp;
