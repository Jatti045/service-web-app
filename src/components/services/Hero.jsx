import React from "react";

const Hero = () => {
    return (
        <div className="container text-center mb-8 px-4 sm:px-6 md:px-12 xl:px-32 py-12 sm:py-16 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Investment <span className="text-primary-red">Services</span> & <span className="text-primary-red">Pricing</span>
            </h1>
            <p className="text-base sm:text-lg mt-2">
                Discover the right investment strategy and pricing plan to help you hit your financial targets with precision.
            </p>
        </div>
    )
}

export default Hero;