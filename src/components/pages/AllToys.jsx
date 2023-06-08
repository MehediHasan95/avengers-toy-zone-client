import { useLoaderData } from "react-router-dom";
import ToyCard from "../utilities/ToyCard";

const AllToys = () => {
  const alltoys = useLoaderData();

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-10">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {alltoys.map((e) => (
          <ToyCard key={e._id} toys={e} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
