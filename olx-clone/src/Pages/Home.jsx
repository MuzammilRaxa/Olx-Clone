import React from "react";
import { Footer, Header, PorductDetails } from "../Components";
import AdSession from "./AdSession";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      {/* <AdSession /> */}
      <PorductDetails />

      <Footer />
    </div>
  );
};

export default Home;
