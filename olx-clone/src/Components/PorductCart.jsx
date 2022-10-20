import React from "react";
import { Link, useParams } from "react-router-dom";

const PorductCart = ({ product }) => {
  const idAndName = useParams();
  const productId = product.id;
  const productName = product.name;

  const param = `${productName}${productId}`;
  console.log("productId", productId, "productName", productName);
  const iconStyle =
    "h-[24px] w-[24px] rounded-full bg-white flex items-center justify-center hover:bg-[#212529] hover:text-[#212529]  hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  console.log("product.name", product.name, "product", product);

  return (
    <Link
      to={`/porductDetails/${decodeURIComponent(productName)}-idd-${productId}`}
    >
      <div className="h-72 w-[300px] overflow-hidden border my-2 rounded-xl border-[#ccd5d6] flex flex-col items-center">
        <div className="w-[100%]  flex flex-1 flex-col items-center text-center justify-between bg-[#222]">
          <div className="h-40 w-[100%]  ">
            <img
              src={product.image}
              alt="product"
              className="h-[100%] w-[100%] object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between ease-in duration-100 p-2.5">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-2 text-base leading-5">{product.name}</h1>
              <p className="font-bold text-xl">Rs {product.price}</p>
            </div>
            <div className={iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>
          </div>
          <div className="w-[100%]">
            <p className="w-[100%] text-[#61797d] text-sm ">
              Contact Now! on mentioned number.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PorductCart;
