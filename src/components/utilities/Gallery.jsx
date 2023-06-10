const Gallery = () => {
  const data = [
    {
      name: "Iron Man",
      img: "https://i.pinimg.com/564x/5b/49/1a/5b491adbfd7ea3face3a9a5faf247f4e.jpg",
      duration: 3000,
    },
    {
      name: "Captain America",
      img: "https://i.pinimg.com/564x/f6/d4/95/f6d4951bf0cb21489d070cf365c4022e.jpg",
      duration: 1500,
    },
    {
      name: "Spiderman",
      img: "https://i.pinimg.com/736x/ea/70/78/ea70789edfcc27cbc5bd8b58ecebb3ee.jpg",
      duration: 1500,
    },
    {
      name: "Hulk",
      img: "https://i.pinimg.com/564x/75/3d/27/753d279e8c95ce8bbe48d7a8945dee23.jpg",
      duration: 3000,
    },
  ];

  return (
    <div className="px-2 lg:px-0 max-w-8xl mx-auto my-32">
      <h1 className="text-center text-5xl font-bold my-20">
        OUR <span className="text-blueViolet">HEROS</span>
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {data.map((e, index) => (
          <div
            key={index}
            className="text-center shadow-xl rounded-lg overflow-hidden bg-base-100"
            data-aos="zoom-in"
            data-aos-duration={e.duration}
          >
            <div className="h-[30rem]">
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
