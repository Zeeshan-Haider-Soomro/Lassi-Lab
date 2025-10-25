import React from "react";
import { Link } from "react-router";

const AboutLassiLab = () => {
    return (
        <section className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-12">
            {/* Left Side - Single Image */}
            <div className="flex justify-center">
                <img
                    src="/images/lassilabbowls.png"
                    alt="Lassi Bowl"
                    className="w-40 md:w-150 drop-shadow-lg"
                />
            </div>

            {/* Right Side - Content */}
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                    Welcome to Lassi Lab
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    At Lassi Lab, we believe every sip should be an experience. From the
                    creamy texture of our signature rabri lassi to the inviting aroma of
                    our seasonal specials, we bring you the taste of tradition in a fun,
                    modern way. Lassi Lab is a vibrant beverage brand based in Malir,
                    Karachi, known for its signature creamy rabri lassi. It blends
                    traditional Pakistani flavors with a modern presentation to create a
                    unique drinking experience. The brand focuses on freshness, using
                    quality ingredients prepared daily.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    {/* Outline Button */}
                    <Link to="/about" className="px-5 cursor-pointer py-2 rounded-full border border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition duration-300 shadow-sm">
                        Our Story
                    </Link>

                    {/* Filled Button */}
                    <Link to="/contact-us" className="px-5 py-2 cursor-pointer rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                        Shop Now
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default AboutLassiLab;