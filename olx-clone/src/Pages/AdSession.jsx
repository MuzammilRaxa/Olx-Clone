import React, { useEffect, useState } from "react";
import { PorductCart } from "../Components";
import { getProducts } from "../firebase.config";

const AdSession = () => {
  const [products, setProducts] = useState();
  const getAllProducts = async () => {
    const allProducts = await getProducts();
    setProducts(allProducts);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex flex-wrap gap-3 m-5 justify-between ">
      {products?.map((product, index) => (
        <PorductCart product={product} />
      ))}
    </div>
  );
};

export default AdSession;
