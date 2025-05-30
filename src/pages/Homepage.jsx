import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/hero/Header";

const Homepage = () => {
  return (
    <div>
      <div className="bg-primary-navy text-white">
        <Navbar />
      </div>
      <div className="bg-primary-navy">
        <Header />
      </div>
    </div>
  );
};

export default Homepage;
