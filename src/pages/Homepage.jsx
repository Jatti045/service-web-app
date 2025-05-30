import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/hero/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/homepage/GetInTouch";
import ScheduleConsultation from "../components/homepage/ScheduleConsultation";
import OurServices from "../components/homepage/OurServices.jsx";
import WhyChooseUs from "../components/homepage/WhyChooseUs.jsx";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-primary-navy text-white">
          <Navbar />
        </div>
        <div className="bg-primary-navy flex flex-col items-center justify-center">
          <Header />
        </div>
        <div className={"bg-cold-white"}>
            <OurServices />
        </div>
        <div>
          <WhyChooseUs />
        </div>
          <ScheduleConsultation />
          <GetInTouch />
          <Footer />
      </div>
    </>
  );
};

export default Homepage;
