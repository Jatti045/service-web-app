import React from "react";

const ScheduleConsultation = () => {
  return (
    <section className="bg-primary-navy min-h-[200px] py-24 flex justify-center items-center">
      <div className="container flex justify-center items-center flex-col mx-auto px-6 lg:px-32 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready to Hit Your Financial Targets?
        </h2>
        <p className="mt-2 text-sm text-gray-200">
          Join hundreds of satisfied clients who trust Bullseye Advisors with
          their financial future.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-primary-red text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition-colors">
            Schedule Consultation
          </button>
          <button className="bg-white text-primary-navy px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;
