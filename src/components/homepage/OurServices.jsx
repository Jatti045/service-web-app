import React from "react";
import {
    TrendingUp,
    Target,
    Shield
} from "lucide-react"
const OurServices = () => {
    const services = [
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Portfolio Management",
            description: "Expertly managed portfolios tailored to your risk tolerance and financial goals.",
            features: ["Risk assessment", "Diversified strategies", "Regular rebalancing"],
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Stock Analysis",
            description: "In-depth research and analysis to identify high-potential investment opportunities.",
            features: ["Technical analysis", "Fundamental research", "Market timing"],
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Risk Management",
            description: "Comprehensive risk assessment and mitigation strategies for your investments.",
            features: ["Loss prevention", "Portfolio protection", "Hedging strategies"],
        },
    ]
    return (
        <>
            <div className="container mx-auto sm:px-6 md:px-12 xl:px-32 py-20 text-primary-navy">
                <div className={"text-center mb-16"}>
                    <h1 className={"text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"}>Our Services</h1>
                    <p className={"text-base sm:text-xl text-charcoal text-wrap max-w-3xl mx-auto"}>Comprehensive investment solutions designed to maximize your returns while managing risk effectively.</p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-8 text-charcoal"}>
                    {services.map((service, index) => (
                        <div key={index} className={"bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-lg"}> {/* Card container */}
                            <div className={"flex flex-col space-y-1.5 p-6 text-center"}> {/* Card header */}
                                <div className="w-16 h-16 text-primary-red bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {service.icon}
                                </div>
                                <div className={"text-primary-navy text-xl font-semibold leading-none tracking-tight"}>
                                    {service.title}
                                </div>
                                <div className={"text-sm"}>
                                    {service.description}
                                </div>
                            </div>
                            <div className={"p-6 pt-0 place-items-center-safe"}> {/* Card content */}
                                <ul className={"space-y-2 flex flex-col gap-2 items-center"}>
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className={"flex items-center"}
                                        >
                                            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurServices;
