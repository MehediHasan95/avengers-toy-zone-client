import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - AvengersToyZone`;
  }, [title]);
};

export default useTitle;
