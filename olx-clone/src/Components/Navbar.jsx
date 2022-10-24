import React from "react";
import Logo from "../images/OLX-Symbol.png";
import ButtonBorder from "../images/iconBorder.svg";
import SellIcon from "../images/iconPlus.svg";

const Navbar = () => {
  return (
    <div className=" w-[100%] h-[120px] py-3 px-7 pt-4 flex items-center justify-center  bg-[#e6e7e7] ">
      <div className="w-[100%] h-[50px] flex justify-between items-center  ">
        <div>
          <img src={Logo} alt="OLX-LOGO" className="logo" />
        </div>
        <div className="flex w-[50%] h-[100%] border-2 rounded-md ml-20 border-black">
          <input
            type="search"
            placeholder="Find Cars, Mobile Phones and more..."
            className="w-[92%] text-base h-[100%] p-2.5 border-none outline-none rounded-l-md flex flex-5 placeholder:text-textColor"
          />

          <button className="flex text-white bg-black flex-1 items-center justify-center  w-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <div className="m-2">
            <button aria-label="Login" className="cursor-pointer">
              <p className="font-bold border-b-2 border-black hover:border-none">
                Login
              </p>
            </button>
          </div>
          <div className="pl-2 m-2">
            <button className="w-100 flex items-center justify-center content-center relative active:transition-opacity">
              <img src={ButtonBorder} alt="" />
              <div className="flex absolute">
                <img src={SellIcon} alt="Sell-icon" />
                <p className="font-bold pl-1">SELL</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
