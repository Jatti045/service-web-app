import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "$2.5B", label: "Assets Under Management" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12.8%", label: "Average Annual Return" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-stretch px-4 sm:px-6 md:px-12 xl:px-32 py-12 sm:py-16 gap-12 text-white">
        <div className="w-full max-w-md sm:max-w-lg flex flex-col gap-4 items-start">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Hit Your <span className="text-primary-red">Financial</span> Targets
          </h1>
          <p className="text-base sm:text-lg">
            Precision-driven investment strategies that deliver results. Our
            expert advisors help you navigate the markets with confidence and
            achieve your financial goals.
          </p>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <button
              onClick={() => navigate("/schedule")}
              className="w-full md:w-auto bg-primary-red py-3 px-5 rounded-md flex justify-center items-center gap-2 transition-all delay-10 hover:cursor-pointer hover:opacity-90"
            >
              <span>Get Started Today</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate("/services/#performance")}
              className="w-full md:w-auto bg-white text-gold border-gold border-2 py-3 px-5 rounded-md text-center transition-all delay-10 hover:bg-gold hover:text-primary-navy hover:cursor-pointer hover:opacity-90"
            >
              View Performance
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white text-charcoal rounded-lg py-6 px-6 sm:py-8 sm:px-8 flex flex-col gap-4">
            <h2 className="text-primary-navy text-lg sm:text-xl md:text-2xl font-bold">
              Market Performance
            </h2>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg">S&P 500</span>
                <span className="text-green font-bold text-base sm:text-lg">
                  +2.4%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg">NASDAQ</span>
                <span className="text-green font-bold text-base sm:text-lg">
                  +2.4%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-semibold">
                  Bullseye Portfolios
                </span>
                <span className="text-green font-extrabold text-base sm:text-lg">
                  +4.7%
                </span>
              </div>
            </div>

            <div className="mt-4 bg-gold/20 border-l-4 rounded-md py-3 px-4 border-gold">
              <p className="text-sm sm:text-base">
                Outperforming the market by 1.6%
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-white py-8">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 lg:px-32 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <h3 className="text-3xl font-bold text-primary-red">{value}</h3>
              <p className="mt-1 text-sm font-medium text-charcoal">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Header;
