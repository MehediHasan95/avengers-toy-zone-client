import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [allToys, setAllToys] = useState([]);
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/count"
    )
      .then((res) => res.json())
      .then((res) => setCount(res));
  }, []);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/alltoys?page=${currentPage}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => setAllToys(res));
  }, [currentPage, limit]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  const dest = {
    count,
    allToys,
    category,
    currentPage,
    setCurrentPage,
    limit,
    setLimit,
  };
  return <DataContext.Provider value={dest}>{children}</DataContext.Provider>;
};

export default DataProvider;
