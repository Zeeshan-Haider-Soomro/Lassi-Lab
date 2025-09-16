import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-white py-12 px-6 md:px-16 overflow-hidden">
      {/* Pistachio Left Decoration */}
      <img
        src="/images/pistachio.png"
        alt="Pistachios"
        className="absolute top-10 left-0 w-28 md:w-40"
      />

      {/* Rose Petals */}
      <img src="/images/Petal.png" alt="Petal" className="absolute top-8 left-1/2 w-10" />
      <img src="/images/Petal.png" alt="Petal" className="absolute top-40 left-10 w-10" />
      <img src="/images/Petal.png" alt="Petal" className="absolute top-60 left-1/3 w-10" />

      {/* Bottle Right */}
      <img
        src="/images/herosectionbottle.png"
        alt="Bottle"
        className="absolute right-0 bottom-10 w-52 md:w-64"
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          At Lassi Lab, we believe every sip should be an experience. From the
          creamy texture of our signature rabri lassi to the inviting aroma of
          our seasonal specials, we bring you the taste of tradition in a fun,
          modern way. Lassi Lab is a vibrant beverage brand based in Malir,
          Karachi, known for its signature creamy rabri lassi. It blends
          traditional Pakistani flavors with a modern presentation to create a
          unique drinking experience. The brand focuses on freshness, using
          quality ingredients prepared daily.
        </p>

        <h3 className="text-2xl font-semibold text-red-600 mb-3">
          Where Tradition Meets Taste
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          Lassi Lab is more than just a drink stop; it’s a flavor lab where
          heritage recipes and creative twists come together. From the smooth,
          creamy goodness of our classic lassi to the indulgence of falooda,
          kulfi, and other sweet treats, every item is crafted to bring back
          memories while giving you something new to love. Hot summer day? Late-night
          cravings? Family get-together? Lassi Lab is your happy place. Whether
          you’re here for a quick refreshment or a slow indulgence, we serve joy
          in every order. One taste, and you’ll know why we call it flavors that
          speak home.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="border cursor-pointer border-gray-400 px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Our Story
          </button>
          <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-2 rounded-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
