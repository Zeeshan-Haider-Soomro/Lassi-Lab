import React from "react";
import { GiMilkCarton } from "react-icons/gi";   // Milk icon
import { GiHoneyJar } from "react-icons/gi";     // Honey/Premium Ingredients icon
import { FaSmileBeam } from "react-icons/fa";    // Happiness icon

const OurPromise = () => {
  const promises = [
    {
      id: 1,
      icon: <GiMilkCarton size={48} className="text-white" />,
      text: "Made Fresh Daily",
    },
    {
      id: 2,
      icon: <GiHoneyJar size={48} className="text-white" />,
      text: "Premium Ingredients",
    },
    {
      id: 3,
      icon: <FaSmileBeam size={48} className="text-white" />,
      text: "Happiness in Every Sip",
    },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-20 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
        Our Promise
      </h2>
      <p className="text-gray-600 mb-10">
        We take pride in serving lassi and desserts that are fresh, flavorful,
        and made with love — every single day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promises.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-red-500 text-white p-8 rounded-[2rem] shadow-md transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{item.icon}</div>
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPromise;
