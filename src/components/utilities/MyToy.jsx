import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditToyModal from "./EditToyModal";
import ToyDetailModal from "./ToyDetailModal";

const MyToy = ({
  toy,
  handleRemove,
  handleUpdateMyToys,
  viewToys,
  setViewToys,
}) => {
  const { _id, sellerName, name, price, subCategory, quantity } = toy;

  return (
    <tbody>
      <tr className="hover:bg-[#f1e9fc] cursor-pointer">
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <label
            onClick={() => handleUpdateMyToys(_id)}
            htmlFor="toydetail"
            className="mx-3 cursor-pointer text-blueViolet tooltip"
            data-tip="Edit"
          >
            <FontAwesomeIcon icon={faEye} />
          </label>
          <label
            onClick={() => handleUpdateMyToys(_id)}
            htmlFor="toyedit"
            className="mx-3 cursor-pointer text-amber-500 tooltip"
            data-tip="Edit"
          >
            <FontAwesomeIcon icon={faEdit} />
          </label>
          <button
            onClick={() => handleRemove(_id)}
            className="mx-3 cursor-pointer text-red-500 tooltip"
            data-tip="Remove"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
      <EditToyModal viewToys={viewToys} setViewToys={setViewToys} />
      <ToyDetailModal viewToys={viewToys} setViewToys={setViewToys} />
    </tbody>
  );
};

export default MyToy;
