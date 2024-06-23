import { CiSearch } from "react-icons/ci";
import useUsers from "../../../hooks/useUsers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const [allUsers, isLoading] = useUsers();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedRole, setSelectedRole] = useState({});
  const queryClient = useQueryClient();

  // Mutation function to update the user role
  const { mutateAsync } = useMutation({
    mutationFn: async ({ email, newRole }) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${email}`,
        { role: newRole }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      toast.success("Role updated!")
    }
  });

  // Function to update the user role on the server
  const updateRole = async (email, currentRole) => {
    if (email === user.email) {
      toast.success("You can't update your own role");
      return;
    }

    const newRole = selectedRole[email];
    if (newRole && newRole !== currentRole) {
      await mutateAsync({ email, newRole });
    }
  };

  // Function to handle role selection change
  const handleRoleChange = (email, newRole) => {
    setSelectedRole(prev => ({ ...prev, [email]: newRole }));
  };

  return (
    <div>
      <div className="container p-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex justify-center items-center gap-x-3">
              <h2 className="text-4xl font-medium text-gray-800">Customers</h2>
              <span className="px-4 py-0.5 font-semibold text-sm text-black bg-[#9fe870] rounded-full">
                {allUsers.length}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex overflow-hidden bg-white border border-black/60 divide-x divide-black rounded-lg">
            <button className="px-5 py-2 text-xs font-medium text-gray-600 bg-[#9fe870] transition-colors duration-200 sm:text-sm hover:bg-[#7dcd4c]">
              Admin
            </button>
            <button className="px-5 py-2 text-xs font-medium text-gray-600 bg-[#9fe870] transition-colors duration-200 sm:text-sm hover:bg-[#7dcd4c]">
              Seller
            </button>
            <button className="px-5 py-2 text-xs font-medium text-gray-600 bg-[#9fe870] transition-colors duration-200 sm:text-sm hover:bg-[#7dcd4c]">
              User
            </button>
          </div>
          <div className="relative flex items-center mt-4 md:mt-0">
            <label className="input hidden md:flex items-center gap-2 rounded-xl w-full overflow-hidden border-2 border-[#9fe870] bg-[#f1f5f9] py-0">
              <div className="bg-[#9fe870] -ml-3 p-2 font-thin rounded-md m-1 cursor-pointer">
                <CiSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="grow outline-none pr-4"
                placeholder="Username"
              />
            </label>
          </div>
        </div>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-black/10 md:rounded-2xl">
              <table className="min-w-full divide-y divide-black/10">
                <thead className="bg-[#f1f5f9] divide-y-0">
                  <tr>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-base font-semibold text-left text-black"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-semibold text-left  text-black"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-semibold text-center text-black"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-semibold text-black"
                    >
                      Change Role
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-semibold text-center text-black"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {allUsers.map((user, i) => (
                    <tr key={i}>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        {user?.name}
                      </td>
                      <td className="px-4 py-4 text-md font-medium text-black/70 whitespace-nowrap">
                        {user?.email}
                      </td>
                      <td className={`px-4 py-4 text-sm whitespace-nowrap text-center`}>
                        <div
                          className={`inline px-3 py-1 text-sm font-medium rounded-full text-black/75 gap-x-2 ${
                            user?.role === "User"
                              ? "bg-[#9fe870]"
                              : user?.role === "Seller"
                              ? "bg-[#70a8e8]"
                              : "bg-[#e8d070]"
                          }`}
                        >
                          {user?.role}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-center whitespace-nowrap">
                        <select
                          className="select select-bordered select-sm w-fit max-w-xs shadow-sm shadow-black/50"
                          value={selectedRole[user.email] || user.role}
                          onChange={(e) => handleRoleChange(user.email, e.target.value)}
                        >
                          <option value="Admin">Admin</option>
                          <option value="Seller">Seller</option>
                          <option value="User">User</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                        <button
                          onClick={() => updateRole(user?.email, user?.role)}
                          className="inline px-3 py-1 text-base font-bold rounded-lg text-black/80 gap-x-2 bg-blue-300 shadow shadow-black active:scale-95"
                        >
                          Update Role
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
          <div className="text-md text-gray-700">
            Page <span className="font-medium text-gray-700">1 of 10</span>
          </div>
          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-base font-semibold text-gray-700 capitalize transition-colors duration-200 bg-[#9fe870] rounded-md sm:w-auto gap-x-2 hover:bg-[#69ac3f]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>previous</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-base font-semibold text-gray-700 capitalize transition-colors duration-200 bg-[#9fe870] rounded-md sm:w-auto gap-x-2 hover:bg-[#69ac3f]"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
