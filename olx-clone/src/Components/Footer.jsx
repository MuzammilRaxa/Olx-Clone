import React from "react";
import footerAd from "../images/olxMobileApp.webp";
import PlayStoreLogo from "../images/iconGooglePlay.svg";
import AppGallery from "../images/iconAppGallery.svg";
import AppStoreLogo from "../images/iconAppStore.svg";

const Footer = () => {
  return (
    <div className="flex">
      <div className="bg-slate-300 flex flex-1.5 h-52">
        <img src={footerAd} alt="" className="object-cover" />
      </div>
      <div className="hidden bg-white flex-1 pl-8  h-52 lg:flex items-center ">
        <div className="h-[80%] border-r-2">
          <h1 className="font-bold pt-2 pb-3 text-3xl">TRY THE OLX APP</h1>
          <p className="font-medium text-xl">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>
      </div>
      <div className="bg-white flex flex-col flex-[1.3] h-52 w-[100%] pl-8 pr-1 py-10">
        <p className="font-bold">GET YOUR APP TODAY</p>
        <div className="flex gap-3 justify-between pt-12">
          <img
            src={PlayStoreLogo}
            alt="App-Store"
            className="w-[30%] hover:cursor-pointer"
          />
          <img
            src={AppGallery}
            className="w-[30%] hover:cursor-pointer"
            alt="Play-Store"
          />
          <img
            src={AppStoreLogo}
            className="w-[30%] hover:cursor-pointer"
            alt="App-Gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
