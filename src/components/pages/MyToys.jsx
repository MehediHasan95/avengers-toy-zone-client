import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import notdata from "../../assets/nodata.svg";
import MyToy from "../utilities/MyToy";
import useTitle from "../../hooks/useTitle";
import swal from "sweetalert";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [viewToys, setViewToys] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?uid=${user?.uid}`)
      .then((res) => res.json())
      .then((res) => setMyToys(res));
  }, [user?.uid, viewToys]);

  const handleRemove = (_id) => {
    swal({
      text: "Do you want to delete this toy?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.acknowledged) {
              setMyToys(myToys.filter((e) => e._id !== _id));
              swal("Your toy has been successfully deleted!", {
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleUpdateMyToys = (_id) => {
    fetch(`http://localhost:5000/mytoys/${_id}`, {})
      .then((res) => res.json())
      .then((res) => {
        setViewToys(res);
      });
  };

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5 uppercase bg-blueViolet py-10 text-white rounded-lg">
        My Toys List
      </h1>
      {myToys.length > 0 ? (
        <table className="w-full table table-xs lg:table-md rounded-none text-center bg-base-100">
          <thead className="bg-blueViolet text-white">
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {myToys.map((e) => (
            <MyToy
              key={e._id}
              toy={e}
              handleRemove={handleRemove}
              handleUpdateMyToys={handleUpdateMyToys}
              viewToys={viewToys}
              setViewToys={setViewToys}
            />
          ))}
        </table>
      ) : (
        <div>
          <img src={notdata} alt="no_data_found" className="w-3/6 mx-auto" />
          <p className="text-center">No information was found for you</p>
        </div>
      )}
    </div>
  );
};

export default MyToys;
