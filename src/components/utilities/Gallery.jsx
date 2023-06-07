const Gallery = () => {
  const data = [
    {
      name: "Iron Man",
      img: "https://i.ibb.co/VgPNX1R/ironman.png",
    },
    {
      name: "Captain America",
      img: "https://i.ibb.co/GQSXVvT/captain.png",
    },
    {
      name: "Spiderman",
      img: "https://i.ibb.co/PzcTphS/spiderman.png",
    },
    {
      name: "Hulk",
      img: "https://i.ibb.co/drktp2F/hulk.png",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-20">
        OUR <span className="text-blueViolet">HEROS</span>
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {data.map((e, index) => (
          <div
            key={index}
            className="text-center shadow-xl rounded-lg border-b-8 border-blueViolet bg-base-100"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="h-96">
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-lobster font-bold my-3 text-russianViolet">
              {e.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
