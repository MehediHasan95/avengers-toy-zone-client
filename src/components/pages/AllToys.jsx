import { useLoaderData } from "react-router-dom";
import AllToy from "../utilities/AllToy";

const AllToys = () => {
  const alltoys = useLoaderData();

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 uppercase">
        All Toys Information
      </h1>
      <table className="w-full table rounded-none text-center bg-base-100">
        <thead className="bg-blueViolet text-white">
          <tr>
            <th>Seller name</th>
            <th>Toy name</th>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        {alltoys.map((e) => (
          <AllToy key={e._id} toy={e} />
        ))}
      </table>
    </div>
  );
};

export default AllToys;
