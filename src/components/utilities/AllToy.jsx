const AllToy = ({ toy }) => {
  const { sellerName, name, price, category, subCategory, quantity } = toy;
  console.log(toy);
  return (
    <tbody>
      <tr>
        <td>{sellerName}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <button className="text-blueViolet hover:font-bold">Details</button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllToy;
