import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {Card} from "@/components/ui/card.jsx";
import {BarChart2, Shield, TrendingUp, Briefcase, Check, ChevronRight} from "lucide-react";
import PricingSection from "@/components/services/PricingSection.jsx";

export default function Performance() {
    const investmentServices = [
        {
            title: "Individual Stocks",
            description: "Targeted investments in specific companies with growth potential.",
            icon: <TrendingUp className="h-6 w-6" />,
            features: [
                "Personalized stock selection",
                "Quarterly portfolio review",
                "Entry and exit strategies",
                "Dividend analysis",
            ],
        },
        {
            title: "ETF Portfolios",
            description: "Diversified exposure to markets through exchange-traded funds.",
            icon: <BarChart2 className="h-6 w-6" />,
            features: [
                "Sector-based allocation",
                "Low-cost investment options",
                "Automatic rebalancing",
                "Thematic investing options",
            ],
        },
        {
            title: "Managed Accounts",
            description: "Full-service portfolio management by our expert advisors.",
            icon: <Briefcase className="h-6 w-6" />,
            features: [
                "Dedicated financial advisor",
                "Comprehensive financial planning",
                "Tax optimization strategies",
                "Regular performance reporting",
            ],
        },
        {
            title: "Retirement Planning",
            description: "Long-term strategies to secure your financial future.",
            icon: <Shield className="h-6 w-6" />,
            features: [
                "RRSP and TFSA optimization",
                "CPP and OAS income projection",
                "Retirement income splitting for tax efficiency",
                "Estate planning guidance",
            ],
        },
    ]

    return (
        <>
            <div className="min-h-screen">
                <div className="bg-primary-navy text-white">
                    <Navbar />
                </div>
                <section className="bg-primary-navy flex flex-col items-center justify-center">
                    <div className="container text-center mb-8 px-4 sm:px-6 md:px-12 xl:px-32 py-12 sm:py-16 text-white">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Investment <span className="text-primary-red">Services</span> & <span className="text-primary-red">Pricing</span>
                        </h1>
                        <p className="text-base sm:text-lg mt-2">
                            Discover the right investment strategy and pricing plan to help you hit your financial targets with precision.
                        </p>
                    </div>
                </section>
                <section className="bg-white flex flex-col items-center justify-center">
                    <div className="container text-center mb-8 px-4 sm:px-6 md:px-12 xl:px-32 py-12 sm:py-16 text-primary-navy">
                        <Card className={"p-4 text-start"}>
                            <h1 className="text-2xl font-semibold leading-tight">Market Tracker</h1>
                            <div className={"h-100 w-full bg-charcoal text-center text-white"}>PlaceHolder</div>
                        </Card>
                    </div>
                </section>
                <section className="bg-cold-white flex flex-col items-center justify-center">
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
                            {investmentServices.map((service, index) => (
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
                </section>
                <PricingSection />
                <Footer />
            </div>
        </>
    );
}
