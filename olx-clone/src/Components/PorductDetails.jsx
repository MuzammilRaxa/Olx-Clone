import React from "react";

const PorductDetails = () => {
  return (
    <div className="flex w-[80%] p-5 gap-2 justify-center flex-col sm:flex-row sm:mt-4">
      {/* <div className="flex-[2] bg-red-300 MainImage h-510 w-508 border-2"></div>
      <div className="BottomImage">
        <div className=""> </div>
      </div>
      <div className="flex flex-col flex-[1.5] gap-2 ">
        <div className=" bg-slate-400 RightBox h-36 w-375 border-2"></div>
        <div className=" bg-zinc-300 RightBox h-56 w-375 border-2"></div>
      </div> */}

      <div className="flex-[1.5] pr-3  h-510 w-508 border-2 flex items-center justify-center">
        <img src="" className="product_img w-[270px]" alt="product_image" />
      </div>
      <div className="flex-[1]  border p-4 sm:px-14 sm:p-5 flex flex-col items-center sm:flex-col ">
        <div className="h-44 w-[100%] border flex flex-col items-start p-2 justify-around">
          <div className="w-[100%] flex justify-between">
            <p className=" text-3xl">Rs {"100"}</p>
            <div className="flex gap-3 justify-start">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="title text-lg text-center mobile:text-[30px]">
            {"product.name"}
          </h1>
          <div className="w-[100%] mt-3 flex justify-between">
            <p>Seller address...</p>
            <p className="text-sm">1day ago</p>
          </div>
        </div>
        <button className="text-white flex justify-center items-center h-11 w-[80%] bg-[#002f34] rounded-sm shadow-md mt-[30px] p-3">
          Add to Cart
        </button>
        <div className="mt-7 border text-2xl flex items-baseline justify-between"></div>
      </div>
    </div>
  );
};

export default PorductDetails;
