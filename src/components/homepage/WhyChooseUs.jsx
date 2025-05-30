import { BarChart3, LineChart, PieChart, Users } from "lucide-react";
import { cn } from "../../lib/util.js";

const WhyChooseUs = () => {
  const why = [
    "Proven Track Record",
    "Personalized Approach",
    "Transparent Communication",
  ];
  const reasons = [
    {
      text: "Advanced Analytics",
      text_color: "text-white",
      icon: <BarChart3 className="h-8 w-8 text-gold" />,
      bg: "bg-primary-navy",
      icon_bg: "bg-gold",
    },
    {
      text: "Portfolio Optimization",
      text_color: "text-white",
      icon: <PieChart className="h-8 w-8 text-white" />,
      bg: "bg-primary-red",
      icon_bg: "bg-white",
    },
    {
      text: "Market Research",
      text_color: "text-white",
      icon: <LineChart className="h-8 w-8 text-primary-navy" />,
      bg: "bg-gold",
      icon_bg: "bg-primary-navy",
    },
    {
      text: "Expert Team",
      text_color: "text-white",
      icon: <Users className="h-8 w-8 text-white" />,
      bg: "bg-green",
      icon_bg: "bg-white",
    },
  ];
  return (
    <>
      <div className="container mx-auto sm:px-6 md:px-12 xl:px-32 py-20 text-primary-navy flex flex-col lg:flex-row lg:justify-between gap-10 items-center">
        <div
          className={
            "text-center mx-4 lg:text-start place-self-center lg:place-self-start"
          }
        >
          <h1
            className={
              "text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
            }
          >
            Why Choose Bullseye Advisors?
          </h1>
          <p
            className={
              "text-base sm:text-xl text-charcoal text-wrap max-w-xl mb-7"
            }
          >
            With over 15 years of experience in the financial markets, our team
            of certified advisors brings unparalleled expertise to your
            investment strategy.
          </p>
          <ul className={"place-self-center lg:place-self-start"}>
            {why.map((why, whyIndex) => (
              <li
                key={whyIndex}
                className={"flex items-center text-lg font-semibold"}
              >
                <div className="w-2 h-2 bg-primary-navy rounded-full mr-3"></div>
                {why}
              </li>
            ))}
          </ul>
        </div>
        <div className={"grid grid-cols-2 gap-2.5 h-fit mx-4"}>
          {reasons.map((reason, reasonIndex) => (
            <div
              key={reasonIndex}
              className={cn(
                "border-0 rounded-lg py-6 h-fit w-full text-center px-20 lg:px-30 flex flex-col justify-center items-center",
                reason.bg
              )}
            >
              {" "}
              {/* Card container */}
              {reason.icon}
              <div
                className={cn(
                  "text-white text-nowrap w-fit",
                  reason.text_color
                )}
              >
                {reason.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
