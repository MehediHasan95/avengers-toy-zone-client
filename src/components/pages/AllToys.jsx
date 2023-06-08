import { useLoaderData } from "react-router-dom";
import AllToy from "../utilities/AllToy";
import UseTitle from "../../hooks/useTitle";

const AllToys = () => {
  const alltoys = useLoaderData();
  UseTitle("All Toys");

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 uppercase">
        All Toys Information
      </h1>
      <table className="w-full table rounded-none text-center bg-base-100">
        <thead className="bg-blueViolet text-white">
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
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
