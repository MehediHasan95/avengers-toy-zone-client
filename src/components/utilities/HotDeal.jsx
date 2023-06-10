const HotDeal = () => {
  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-32">
      <div className="bg-deal bg-cover bg-center bg-no-repeat p-16 text-white rounded-lg flex justify-between flex-col lg:flex-row">
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold">Deal Of The Day</h1>
          <p className="uppercase my-5">
            <span className="text-yellow-300">UPTO 35% OFF</span> on all other
            daby products
          </p>
        </div>

        <div className="flex items-center">
          <div className="rounded-full text-center w-16 lg:w-24 h-16 lg:h-24 p-3 bg-blueViolet mx-3">
            <p className="text-sm lg:text-3xl font-bold">30</p>
            <p className="text-xs lg:text-base">DAYS</p>
          </div>
          <div className="rounded-full text-center w-16 lg:w-24 h-16 lg:h-24 p-3 bg-blueViolet mx-3">
            <p className="text-sm lg:text-3xl font-bold">13</p>
            <p className="text-xs lg:text-base">HOURS</p>
          </div>
          <div className="rounded-full text-center w-16 lg:w-24 h-16 lg:h-24 p-3 bg-blueViolet mx-3">
            <p className="text-sm lg:text-3xl font-bold">02</p>
            <p className="text-xs lg:text-base">MINUTES</p>
          </div>
          <div className="rounded-full text-center w-16 lg:w-24 h-16 lg:h-24 p-3 bg-blueViolet mx-3">
            <p className="text-sm lg:text-3xl font-bold">52</p>
            <p className="text-xs lg:text-base">SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal;
