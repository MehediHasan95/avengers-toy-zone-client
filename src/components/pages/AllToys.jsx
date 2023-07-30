import AllToy from "../utilities/AllToy";
import UseTitle from "../../hooks/useTitle";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../provider/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import searchNotFound from "../../assets/searchNotFound.svg";

const AllToys = () => {
  const { count, allToys, currentPage, setCurrentPage, limit, setLimit } =
    useContext(DataContext);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  UseTitle("All Toys");
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const page = Math.ceil(count?.count / (parseInt(limit) || 5));
    if (page) {
      setPageNumbers([...Array(page).keys()]);
    }
  }, [count?.count, limit]);

  useEffect(() => {
    let results = [];
    for (const elements of allToys) {
      if (elements.name.toLowerCase().includes(searchText.toLowerCase())) {
        results.push(elements);
      }
    }
    setSearchResults(results);
  }, [allToys, searchText]);

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <h1 className="text-center text-xl uppercase bg-blueViolet py-10 text-white rounded-lg">
        All Seller Toys List
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

      {searchResults.length > 0 ? (
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
          {searchResults.map((e, index) => (
            <AllToy key={e._id} toy={e} index={index} />
          ))}
        </table>
      ) : (
        <div>
          <img
            src={searchNotFound}
            alt="result_not_found"
            className="w-2/6 mx-auto"
          />
          <p className="text-center text-red-500">
            Sorry, Your Search not Found
          </p>
        </div>
      )}
      <div className="my-5 text-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`w-12 h-12 border border-blueViolet ${
              currentPage === number ? "bg-blueViolet text-white" : "bg-none"
            } rounded-full mx-2 tooltip`}
            data-tip={`Page ${number + 1}`}
          >
            {number + 1}
          </button>
        ))}
        <select
          onChange={(e) => setLimit(e.target.value)}
          className="px-4 py-2 border-none outline-none rounded-lg"
        >
          <option value="5" selected>
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default AllToys;
