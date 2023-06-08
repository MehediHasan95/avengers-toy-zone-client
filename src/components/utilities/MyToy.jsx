import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditToyModal from "./EditToyModal";

const MyToy = ({
  toy,
  handleRemove,
  handleUpdateMyToys,
  updateToys,
  setUpdateToys,
}) => {
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
          <button
            className="mx-3 cursor-pointer hover:text-blueViolet tooltip"
            data-tip="Details"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
          <label
            htmlFor="toyedit"
            className="mx-3 cursor-pointer hover:text-amber-500 tooltip"
            data-tip="Edit"
          >
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => handleUpdateMyToys(_id)}
            />
          </label>
          <button
            onClick={() => handleRemove(_id)}
            className="mx-3 cursor-pointer hover:text-red-500 tooltip"
            data-tip="Remove"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
      <EditToyModal toyInfo={updateToys} setUpdateToys={setUpdateToys} />
    </tbody>
  );
};

export default MyToy;
