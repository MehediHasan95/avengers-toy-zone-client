import AllToy from "../utilities/AllToy";
import UseTitle from "../../hooks/useTitle";
import { useContext } from "react";
import { DataContext } from "../../provider/DataProvider";

const AllToys = () => {
  const { allToys } = useContext(DataContext);
  UseTitle("All Toys");

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 uppercase bg-blueViolet py-10 text-white rounded-lg">
        All Seller Toys List
      </h1>
      <table className="w-full table table-xs lg:table-md rounded-none text-center bg-base-100">
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
        {allToys.map((e) => (
          <AllToy key={e._id} toy={e} />
        ))}
      </table>
    </div>
  );
};

export default AllToys;
