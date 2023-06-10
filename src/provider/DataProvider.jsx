import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [allToys, setAllToys] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/alltoys"
    )
      .then((res) => res.json())
      .then((res) => setAllToys(res));
  }, []);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  const dest = { allToys, category };
  return <DataContext.Provider value={dest}>{children}</DataContext.Provider>;
};

export default DataProvider;
