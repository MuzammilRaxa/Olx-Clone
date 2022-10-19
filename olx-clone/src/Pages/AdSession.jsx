import React, { useEffect, useState } from "react";
import { PorductCart } from "../Components";
import { getProducts } from "../firebase.config";

const AdSession = () => {
  const [products, setProducts] = useState();
  const getAllProducts = async () => {
    const allProducts = await getProducts();
    // console.log("allProducts", allProducts);
    setProducts(allProducts);
  };
  // console.log("products", products);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex flex-wrap justify-between m-5">
      {products?.map((product, index) => (
        <PorductCart product={product} />
      ))}
    </div>
  );
};

export default AdSession;
