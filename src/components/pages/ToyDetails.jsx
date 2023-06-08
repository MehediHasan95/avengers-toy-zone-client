import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();

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
  } = toyDetails;

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <div className="grid lg:grid-cols-3 bg-base-100 rounded-lg">
        <div className="col-span-1 p-3">
          <img
            src={img}
            alt="action figure"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="lg:col-span-2 p-3">
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
            <div className="w-3/6 lg:w-1/6 font-bold">
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
  );
};

export default ToyDetails;
