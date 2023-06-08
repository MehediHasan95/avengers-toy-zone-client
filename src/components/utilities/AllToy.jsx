import { Link } from "react-router-dom";

const AllToy = ({ toy }) => {
  const { _id, sellerName, name, price, subCategory, quantity } = toy;

  return (
    <tbody>
      <tr>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/toydetails/${_id}`}>
            <button className="text-blueViolet hover:font-bold">Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default AllToy;
