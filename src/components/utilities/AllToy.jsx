import { Link } from "react-router-dom";

const AllToy = ({ toy, index }) => {
  const { _id, sellerName, name, price, subCategory, quantity } = toy;

  return (
    <tbody>
      <tr className="hover:bg-[#f1e9fc] cursor-pointer">
        <td>{index + 1}</td>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/toydetails/${_id}`}>
            <button className="text-blueViolet hover:underline">Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default AllToy;
