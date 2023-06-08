import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyToy = ({ toy, handleRemove }) => {
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
          <button
            className="mx-3 cursor-pointer hover:text-amber-500 tooltip"
            data-tip="Edit"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={() => handleRemove(_id)}
            className="mx-3 cursor-pointer hover:text-red-500 tooltip"
            data-tip="Remove"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyToy;
