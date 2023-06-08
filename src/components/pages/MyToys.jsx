import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import notdata from "../../assets/nodata.svg";
import MyToy from "../utilities/MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?uid=${user?.uid}`)
      .then((res) => res.json())
      .then((res) => setMyToys(res));
  }, [user?.uid]);

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      {myToys.length > 0 ? (
        <table className="w-full table rounded-none text-center bg-base-100">
          <thead className="bg-blueViolet text-white">
            <tr>
              <th>Seller name</th>
              <th>Toy name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {myToys.map((e) => (
            <MyToy key={e._id} toy={e} />
          ))}
        </table>
      ) : (
        <div>
          <img src={notdata} alt="no_data_found" className="w-3/6 mx-auto" />
          <p className="text-center">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default MyToys;
