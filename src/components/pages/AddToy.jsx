import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { DataContext } from "../../provider/DataProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { category } = useContext(DataContext);
  useTitle("Add Toy");
  const create = moment().format("DD/MM/YYYY, HH:mm:ss");
  const rating = () => parseFloat(Math.random() * 5).toFixed(2);
  const [selectCategory, setSelectCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    setSubCategory(category?.find((e) => e.name === selectCategory)?.sub || []);
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
    const brand = e?.target?.brand?.value;
    const description = e?.target?.description?.value;

    const data = {
      uid: user.uid,
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
      brand,
      description,
    };

    fetch(
      "https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/alltoys",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.acknowledged) {
          toast.success("Your toy add successful");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 uppercase bg-blueViolet py-10 text-white rounded-lg">
        Please add your toys
      </h1>
      <div className="w-10/12 mx-auto bg-base-100 rounded-lg p-5">
        <form onSubmit={handleAddToyForm}>
          <div className="flex justify-between">
            <input
              type="text"
              name="name"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Toy name"
              required
            />
            <input
              type="text"
              name="price"
              pattern="[0-9]{0,}"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Toy price"
              required
            />
          </div>

          <div className="flex justify-between">
            <input
              type="text"
              name="quantity"
              pattern="[0-9]{0,}"
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
              defaultValue={user?.displayName}
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Seller name"
              required
              readOnly
              disabled
            />
            <input
              type="text"
              name="sellerEmail"
              defaultValue={user?.email}
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              placeholder="Seller email"
              readOnly
              disabled
              required
            />
          </div>

          <div className="flex justify-between">
            <select
              onChange={(e) => setSelectCategory(e.target.value)}
              name="category"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              required
            >
              <option defaultValue={null} selected disabled>
                -- --
              </option>
              {category?.map((e, index) => (
                <option value={e.name} key={index}>
                  {e.name}
                </option>
              ))}
            </select>

            <select
              name="subCategory"
              className="w-49 p-3 mb-3 rounded-lg border focus:outline-blueViolet"
              required
            >
              <option defaultValue={null} selected disabled>
                -- --
              </option>
              {subCategory?.map((e, index) => (
                <option value={e.name} key={index}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            name="brand"
            pattern="[a-z A-Z]{0,}"
            className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
            placeholder="Brand"
            required
          />

          <textarea
            name="description"
            rows="5"
            className="w-full p-3 mb-3 rounded-lg border focus:outline-blueViolet"
            placeholder="Descriptions"
            required
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
