import { useLoaderData } from "react-router-dom";

const Products = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);

  return (
    <div>
      <h3 className="text-center mt-8">this is Product length: {tshirts.length}</h3>
    </div>
  );
};

export default Products;
