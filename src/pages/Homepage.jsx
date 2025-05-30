import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/hero/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/homepage/GetInTouch";
import ScheduleConsultation from "../components/homepage/ScheduleConsultation";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-primary-navy text-white">
          <Navbar />
        </div>
        <div className="bg-primary-navy">
          <Header />
        </div>
      </div>
      <ScheduleConsultation />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Homepage;
