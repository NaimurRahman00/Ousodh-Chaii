const UserPaymentHistory = () => {
  return (
    <div className="p-8">
      <div className="">
        <h2 className="text-3xl font-semibold text-black/70">
          My Payment History
          <span className="text-lg ms-2 px-4 py-0 bg-[#9fe870] rounded-2xl">
            9
          </span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] w-full shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-[#9fe870] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">Date</th>
              <th className="py-4 px-6 text-lg text-left border-b">Amount</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Transaction Id
              </th>
              <th className="py-4 px-6 text-lg border-b text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
              <td className="py-4 px-4 flex justify-start">05/06/2024</td>
              <td className="py-4 px-6 border-b text-xl font-medium">$29.00</td>
              <td className="py-4 px-6 border-b text-lg font-medium">
                f1e48d9a-982b-4c61-8dbd-3e4f2ae5b982
              </td>
              <td className="py-4 px-6 border-b text-end">
                <div className="inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-[#5ba5da]">
                  Paid
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPaymentHistory;
