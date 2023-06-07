import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold my-20">
        Toy <span className="text-blueViolet">Category</span>
      </h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Marvel Legends Series</Tab>
            <Tab>Endgame Titan Hero Series</Tab>
            <Tab>Infinity War Series</Tab>
            <Tab>Age of Ultron Series</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>

            <Tabs>
              <TabList>
                <Tab>Marvel Legends Series 6</Tab>
                <Tab>Marvel Legends Series 7</Tab>
                <Tab>Marvel Legends Series 8</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 5</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 6</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 7</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;
