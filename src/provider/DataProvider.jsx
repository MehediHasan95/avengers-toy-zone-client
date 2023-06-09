import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [allToys, setAllToys] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
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
