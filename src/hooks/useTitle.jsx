import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - AvengersToyZone`;
  }, [title]);
};

export default UseTitle;
