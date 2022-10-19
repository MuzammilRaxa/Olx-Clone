import React from "react";
import { Footer, Header } from "../Components";
import AdSession from "./AdSession";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <AdSession />
      <Footer />
    </div>
  );
};

export default Home;
