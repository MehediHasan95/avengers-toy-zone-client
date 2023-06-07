import moment from "moment/moment";
import { useEffect, useState } from "react";

const AddToy = () => {
  const create = moment().format("DD/MM/YYYY, HH:mm:ss");
  const rating = () => parseFloat(Math.random() * 5).toFixed(2);
  const [selectCategory, setSelectCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  const category = [
    {
      name: "Iron Man Toys",
      sub: [{ name: "Mini Iron Man Toys" }, { name: "Large Iron Man Toys" }],
    },
    {
      name: "Captain America Toys",
    },
    {
      name: "Black Panther Toys",
    },
    {
      name: "Spiderman Toys",
    },
    {
      name: "Hulk Toys",
    },
    {
      name: "Thanos Toys",
    },
    {
      name: "Thor Toys",
    },
    {
      name: "Hawkeye Toys",
    },
  ];

  useEffect(() => {
    setSubCategory(category.find((e) => e.name === selectCategory)?.sub || []);
  }, [selectCategory]);

  const handleAddToyForm = (e) => {
    e.preventDefault();
    const name = e?.target?.name?.value;
    const price = e?.target?.price?.value;
    const quantity = e?.target?.quantity?.value;
    const img = e?.target?.img?.value;
    const sellerName = e?.target?.sellerName?.value;
    const sellerEmail = e?.target?.sellerEmail?.value;
    const category = e?.target?.category?.value;
    const subCategory = e?.target?.subCategory?.value;
    const manufacturer = e?.target?.manufacturer?.value;
    const description = e?.target?.description?.value;

    const data = {
      create,
      name,
      price,
      quantity,
      rating: rating(),
      img,
      sellerName,
      sellerEmail,
      category,
      subCategory,
      manufacturer,
      description,
    };
    console.log(data);
  };

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-32">
      <div className="w-10/12 mx-auto bg-base-100 rounded-lg p-5">
        <form onSubmit={handleAddToyForm}>
          <h1 className="text-center text-xl my-3 uppercase">
            Please add a toy
          </h1>
          <div className="flex justify-between">
            <input
              type="text"
              name="name"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="price"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Price"
              required
            />
          </div>

          <div className="flex justify-between">
            <input
              type="text"
              name="quantity"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Quantity"
              required
            />
            <input
              type="text"
              name="img"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="PhotoURL"
              required
            />
          </div>

          <div className="flex justify-between">
            <input
              type="text"
              name="sellerName"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Seller name"
              required
            />
            <input
              type="text"
              name="sellerEmail"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Seller email"
              required
            />
          </div>

          <div className="flex justify-between">
            <select
              onChange={(e) => setSelectCategory(e.target.value)}
              name="category"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
            >
              <option value={null} selected disabled>
                Please select any category
              </option>
              {category.map((e, index) => (
                <option value={e.name} key={index}>
                  {e.name}
                </option>
              ))}
            </select>

            <select
              name="subCategory"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
            >
              <option value={null} selected disabled>
                Please select sub-category
              </option>
              {subCategory.map((e, index) => (
                <option value={e.name} key={index}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            name="manufacturer"
            className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
            placeholder="Manufacturer"
            required
          />

          <textarea
            name="description"
            rows="5"
            className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
            placeholder="Descriptions..."
          ></textarea>
          <button className="w-full p-3 rounded-lg bg-blueViolet text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
