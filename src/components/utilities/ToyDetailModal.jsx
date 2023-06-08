import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@smastrom/react-rating";

const ToyDetailModal = ({ viewToys, setViewToys }) => {
  const {
    name,
    img,
    price,
    category,
    subCategory,
    sellerName,
    sellerEmail,
    description,
    quantity,
    rating,
    brand,
  } = viewToys;
  return (
    <>
      <input type="checkbox" id="toydetail" className="modal-toggle" />
      <div className="modal">
        <div method="dialog" className="modal-box w-11/12 lg:w-3/4 max-w-5xl">
          <label
            onClick={() => setViewToys({})}
            htmlFor="toydetail"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </label>

          <div className="py-4 text-left grid gap-5 lg:grid-cols-3">
            <div className="col-span-1">
              <img
                src={img}
                alt="image"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-5xl font-semibold">{name}</h1>
              <p className="flex my-3">
                Rating:
                <Rating
                  style={{ maxWidth: 80, margin: "0 0.4rem" }}
                  value={rating}
                  readOnly
                />
                ({rating})
              </p>
              <div className="flex my-5">
                <div className="w-3/6 lg:w-3/12 font-bold">
                  <p>Category</p>
                  <p>Sub-category</p>
                  <p>Brand</p>
                  <p>Quantity</p>
                  <p>Price</p>
                  <p>Seller Name</p>
                  <p>Seller Email</p>
                </div>
                <div className="w-full">
                  <p>
                    <span className="me-5">:</span>
                    {category}
                  </p>
                  <p>
                    <span className="me-5">:</span>
                    {subCategory}
                  </p>
                  <p>
                    <span className="me-5">:</span>
                    {brand}
                  </p>
                  <p>
                    <span className="me-5">:</span>
                    {quantity} (items left)
                  </p>
                  <p>
                    <span className="me-5">:</span>${price}
                  </p>
                  <p>
                    <span className="me-5">:</span>
                    {sellerName}
                  </p>
                  <p>
                    <span className="me-5">:</span>
                    {sellerEmail}
                  </p>
                </div>
              </div>
              <p>
                <span className="font-semibold">About - </span>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetailModal;
