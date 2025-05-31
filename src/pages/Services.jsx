import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {BarChart2, Shield, TrendingUp, Briefcase, Check, ChevronRight} from "lucide-react";
import PricingSection from "@/components/services/PricingSection.jsx";
import Hero from "@/components/services/Hero.jsx";
import PerformanceTracker from "@/components/services/PerformanceTracker.jsx";
import InvestmentServices from "@/components/services/InvestmentServices.jsx";
import InvestmentStrategies from "@/components/services/InvestmentStrategies.jsx";
import {useNavigate} from "react-router-dom";

export default function Services() {
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

    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen">
                <div className="bg-primary-navy text-white">
                    <Navbar />
                </div>
                <section className="bg-primary-navy flex flex-col items-center justify-center">
                    <Hero/>
                </section>
                <section className="bg-white flex flex-col items-center justify-center">
                    <InvestmentServices services={investmentServices}/>
                </section>
                <section className="bg-cold-white flex flex-col items-center justify-center">
                    <PerformanceTracker/>
                </section>
                <section className="bg-primary-navy text-white flex flex-col items-center justify-center">
                    <PricingSection/>
                </section>
                <section className="bg-cold-white py-16 text-center" >
                    <InvestmentStrategies className={"pb-20 border-b-2 border-charcoal/20"}/>
                    <div className={"pb-10 pt-14"}>
                        <h1 className={"text-lg"}>Still have questions? Our team is ready to help.</h1>
                        <button
                            onClick={() => {navigate("/schedule")}}
                            className={"w-fit mt-3 px-5 bg-primary-navy text-white py-2 rounded-lg hover:cursor-pointer hover:bg-primary-navy/90 transition-all delay-10"}
                        >
                            Book a Consultation
                        </button>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
