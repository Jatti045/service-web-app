import {Check, ChevronRight} from "lucide-react";
import React from "react";

const InvestmentServices = ({ services }) => {
    return (
        <div className="container mx-auto sm:px-6 md:px-12 xl:px-32 py-20 text-primary-navy">
            <div className={"text-center mb-16 mx-4"}>
                <h1 className={"text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"}>
                    Our Investment Services
                </h1>
                <p className={"text-base sm:text-xl text-charcoal text-wrap max-w-3xl mx-auto"}>
                    Explore our range of investment services designed to meet your specific financial goals and risk tolerance.
                </p>
            </div>
            <div
                className={"grid grid-cols-1 md:grid-cols-2 gap-8 text-charcoal mx-4"}
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-lg flex flex-col justify-between h-full"
                    >
                        <div className={"flex items-center gap-4 space-y-1.5 p-6 pb-3 text-start"}>
                            <div className="w-10 h-10 text-primary-red bg-primary-red/10 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <div className={"flex flex-col justify-start items-start text-start"}>
                                <div className={"text-primary-navy text-xl font-semibold leading-none tracking-tight"}>
                                    {service.title}
                                </div>
                                <div className={"text-sm mt-2"}>{service.description}</div>
                            </div>
                        </div>
                        <div className={"p-6 pt-0 ml-10 place-items-start-safe"}>
                            {/* Card content */}
                            <ul className={"space-y-2 flex flex-col items-start"}>
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className={"flex items-center"}>
                                        <Check className={"h-4 w-4 text-green mr-2 flex-shrink-0"}/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={"flex items-center p-6 pt-0 text-lg text-center"}>
                            <button className={"w-full bg-primary-navy text-white flex items-center justify-center py-2 rounded-lg hover:cursor-pointer hover:bg-primary-navy/90 transition-all delay-10"}>
                                Learn More
                                <ChevronRight className={"h-4 w-4 ml-2"}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InvestmentServices;