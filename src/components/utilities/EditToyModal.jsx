import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-hot-toast";

const EditToyModal = ({ viewToys, setViewToys }) => {
  const { _id, name, price, quantity, description, img } = viewToys;

  const handleUpdateToyInformation = (e) => {
    e.preventDefault();
    const name = e?.target?.name?.value;
    const price = e?.target?.price?.value;
    const quantity = e?.target?.quantity?.value;
    const img = e?.target?.img?.value;
    const description = e?.target?.description?.value;
    const date = { name, price, quantity, img, description };

    fetch(
      `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/mytoys/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(date),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          toast.success("Your toy update success");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="toyedit" className="modal-toggle" />
      <div className="modal">
        <div method="dialog" className="modal-box w-11/12 lg:w-2/5 max-w-5xl">
          <label
            onClick={() => setViewToys({})}
            htmlFor="toyedit"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>
          <span className="text-center text-xl uppercase border-dashed border-2 border-blueViolet rounded-lg px-3 py-1">
            Update Your Toy Information
          </span>
          <div className="py-4">
            <form onSubmit={handleUpdateToyInformation} className="text-left">
              <label>
                <span className="text-xs text-blueViolet font-bold">
                  Toy Name:
                </span>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
                  placeholder="Toy name"
                  required
                />
              </label>
              <label>
                <span className="text-xs text-blueViolet font-bold">
                  Toy Price:
                </span>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  pattern="[0-9]{0,}"
                  className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
                  placeholder="Toy price"
                  required
                />
              </label>
              <label>
                <span className="text-xs text-blueViolet font-bold">
                  Toy Quantity:
                </span>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  pattern="[0-9]{0,}"
                  className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
                  placeholder="Quantity"
                  required
                />
              </label>
              <label>
                <span className="text-xs text-blueViolet font-bold">
                  Toy PhotoURL:
                </span>
                <input
                  type="text"
                  name="img"
                  defaultValue={img}
                  className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
                  placeholder="PhotoURL"
                  required
                />
              </label>
              <label>
                <span className="text-xs text-blueViolet font-bold">
                  Toy Description:
                </span>
                <textarea
                  name="description"
                  rows="5"
                  defaultValue={description}
                  className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
                  placeholder="Descriptions"
                  required
                />
              </label>
              <button className="w-full p-3 uppercase rounded-lg bg-blueViolet text-white">
                Update Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditToyModal;
