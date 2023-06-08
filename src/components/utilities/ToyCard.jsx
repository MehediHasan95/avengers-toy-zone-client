const ToyCard = ({ toys }) => {
  const { name, img, price, rating } = toys;

  return (
    <div className="col-span-1 bg-base-100 rounded-lg overflow-hidden">
      <div className="h-72">
        <img
          src={img}
          alt="action figure"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h1 className="font-semibold" title={name}>
          {name.length > 30 ? name.slice(0, 30) + "..." : name}
        </h1>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ToyCard;
