// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white w-full overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 leading-tight">
            Desi Vibes. <br className="hidden sm:block" /> 
            Modern Twist. <br className="hidden sm:block" /> 
            Sip the Culture.
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Fresh Rabri Lassi with a perfect blend of tradition & modern taste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-red-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition w-full sm:w-auto">
              Shop Now
            </button>
            <button className="border cursor-pointer border-red-700 text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/herosectionbottle.png" // ✅ apna image path yahan dalna
            alt="Lassi Lab Bottle"
            className="max-w-[320px] sm:max-w-[280px] md:max-w-[600px] drop-shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Background (pistachios & petals) */}
      <img
        src="/images/pistachio.png" // ✅ apna pistachio image path
        alt="pistachio"
        className="hidden md:block absolute top-0 left-0 w-32 opacity-90"
      />
      <img
        src="/images/pistachio.png" // ✅ apna pistachio image path
        alt="pistachio"
        className="hidden md:block absolute bottom-0 right-0 w-32 opacity-90"
      />
    </section>
  );
};

export default Hero;
