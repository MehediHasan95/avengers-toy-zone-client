import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { DataContext } from "../../provider/DataProvider";
import { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import nodata from "../../assets/datanotmatch.svg";
import { Link } from "react-router-dom";

const Category = () => {
  const { category } = useContext(DataContext);
  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [dataLoadByCategory, setDataLoadByCategory] = useState([]);

  useEffect(() => {
    if (category.length > 0) {
      const data = category[mainIndex]?.sub;
      const name = data[subIndex].name;
      fetch(
        `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/alltoys/${name}`
      )
        .then((res) => res.json())
        .then((res) => setDataLoadByCategory(res));
    }
  }, [category, mainIndex, subIndex]);

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-32">
      <h1 className="text-center text-5xl font-bold my-20">
        Toy By <span className="text-blueViolet">Category</span>
      </h1>
      <div>
        <Tabs
          selectedIndex={mainIndex}
          onSelect={(index) => setMainIndex(index)}
        >
          <TabList className="flex justify-center">
            {category.map((e, index) => (
              <Tab
                key={index}
                className="px-5 cursor-pointer border-x-2 border-blueViolet"
                selectedClassName="text-blueViolet font-bold outline-none"
              >
                {e.name}
              </Tab>
            ))}
          </TabList>

          {category.map((e, index) => (
            <TabPanel key={index}>
              <Tabs
                selectedIndex={subIndex}
                onSelect={(index) => setSubIndex(index)}
              >
                <TabList className="flex justify-center">
                  {e.sub.map((e, index) => (
                    <Tab
                      key={index}
                      className="my-10 px-5 cursor-pointer  border-none"
                      selectedClassName="text-blueViolet font-bold outline-none"
                    >
                      {e.name}
                    </Tab>
                  ))}
                </TabList>
                {e.sub.map((e, index) => (
                  <TabPanel key={index}>
                    <>
                      {dataLoadByCategory.length > 0 ? (
                        <div className="flex justify-center flex-col lg:flex-row">
                          {dataLoadByCategory.map((e) => (
                            <div
                              key={e._id}
                              className="bg-base-100 w-96 p-3 mx-auto lg:mx-3 mb-3 lg:mb-0 rounded-lg"
                            >
                              <div className="h-96 overflow-hidden rounded-lg">
                                <img
                                  src={e.img}
                                  alt="img"
                                  className="w-full h-full object-fill"
                                />
                              </div>
                              <div className="h-40 relative">
                                <h1 className="text-xl font-semibold my-2">
                                  {e.name.length > 60
                                    ? e.name.slice(0, 60) + "..."
                                    : e.name}
                                </h1>
                                <p>Price: ${e.price}</p>
                                <p className="flex">
                                  Rating: ({e.rating})
                                  <Rating
                                    style={{ maxWidth: 80, margin: "0 0.4rem" }}
                                    value={e.rating}
                                    readOnly
                                  />
                                </p>
                                <Link to={`/toydetails/${e._id}`}>
                                  <button className="absolute bottom-0 p-2 border-none outline-none bg-blueViolet text-white w-full rounded-lg">
                                    Details
                                  </button>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid place-items-center">
                          <img
                            src={nodata}
                            alt="data_not_found"
                            className="w-2/5 mx-auto"
                          />
                          <p>Ups!... no results found</p>
                        </div>
                      )}
                    </>
                  </TabPanel>
                ))}
              </Tabs>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
