import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import notdata from "../../assets/nodata.svg";
import MyToy from "../utilities/MyToy";
import useTitle from "../../hooks/useTitle";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

const MyToys = () => {
  const { user, userSignOut } = useContext(AuthContext);
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [viewToys, setViewToys] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/mytoys?uid=${user?.uid}`,
      {
        headers: {
          authorization: localStorage.getItem("access-token"),
        },
      }
    )
      .then((res) => res.json())

      .then((res) => {
        if (!res.err) {
          let results = [];
          for (const elements of res) {
            if (
              elements.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              results.push(elements);
            }
          }
          setMyToys(results);
        } else {
          swal("Your session has expire").then((value) => {
            if (value) {
              userSignOut()
                .then(() => {
                  localStorage.removeItem("access-token");
                })
                .catch((err) => toast.error(err.code));
            }
          });
        }
      });
  }, [searchText, user?.uid, userSignOut, viewToys]);

  const handleRemove = (_id) => {
    swal({
      text: "Do you want to delete this toy?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/mytoys/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    fetch(
      `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/mytoys/${_id}`
    )
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
      <div className="w-full my-5 relative">
        <input
          onKeyUp={(e) => setSearchText(e.target.value)}
          type="text"
          className="w-full py-2 ps-9 rounded-full border-none outline-none text-blueViolet"
          placeholder="Search"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-blueViolet absolute top-3 left-4 text-sm cursor-pointer"
        />
      </div>
      {myToys.length > 0 ? (
        <table className="w-full table table-xs lg:table-md rounded-none text-center bg-base-100">
          <thead className="bg-blueViolet text-white">
            <tr>
              <th>SL</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {myToys.map((e, index) => (
            <MyToy
              key={e._id}
              toy={e}
              index={index}
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
