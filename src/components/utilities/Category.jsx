import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { DataContext } from "../../provider/DataProvider";
import { useContext, useEffect, useState } from "react";

const Category = () => {
  const { category } = useContext(DataContext);
  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [dataLoadByCategory, setDataLoadByCategory] = useState([]);

  useEffect(() => {
    if (category.length > 0) {
      const data = category[mainIndex]?.sub;
      const name = data[subIndex].name;
      fetch(`http://localhost:5000/alltoys/${name}`)
        .then((res) => res.json())
        .then((res) => setDataLoadByCategory(res));
    }
  }, [category, mainIndex, subIndex]);

  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold my-20">
        Toy By <span className="text-blueViolet">Category</span>
      </h1>
      <div>
        <Tabs
          selectedIndex={mainIndex}
          onSelect={(index) => setMainIndex(index)}
        >
          <TabList className="flex justify-evenly mb-5">
            {category.map((e, index) => (
              <Tab
                key={index}
                className="w-full text-center p-3 cursor-pointer"
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
                <TabList className="flex justify-center mb-5">
                  {e.sub.map((e, index) => (
                    <Tab className="text-center p-3 cursor-pointer" key={index}>
                      {e.name}
                    </Tab>
                  ))}
                </TabList>
                {e.sub.map((e, index) => (
                  <TabPanel key={index}>{e.name}</TabPanel>
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
