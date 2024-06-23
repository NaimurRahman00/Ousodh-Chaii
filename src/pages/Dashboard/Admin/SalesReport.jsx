import DataTable from "react-data-table-component";
// import data from '../../constants/sampleMovieData';

const SalesReport = () => {
  const columns = [
    {
      name: "Medicine Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Seller Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Buyer Email",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Total Price",
      selector: (row) => row.year,
      sortable: true,
    },
  ];
  const data = [
    {
      title: "Napa",
      email: "seller@gmail.com",
    },
    {
      title: "Tahlil",
      selector: "20",
    },
    {
      name: "Mahfuz",
      age: "20",
    },
  ];
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black/70 mb-2">
            Sales Report
          </h1>
          <p className="text-lg font-medium text-black/60">
            Here's your sales report details
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <select className="select select-bordered select-sm w-fit max-w-xs shadow-sm shadow-black/50">
            <option disabled selected>
              Filter by
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
      </div>
      <div className="py-10 overflow-hidden border-2 border-[#9fe870] md:rounded-2xl font-bold">
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
};

export default SalesReport;
