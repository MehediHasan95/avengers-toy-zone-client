import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyToy = ({ toy }) => {
  const { sellerName, name, price, subCategory, quantity } = toy;
  return (
    <tbody>
      <tr>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <button>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyToy;
