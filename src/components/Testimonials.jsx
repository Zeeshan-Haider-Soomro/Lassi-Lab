import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Haldoc",
    image: "/images/user1.jpg", // ✅ apna image path daalna
    rating: 4.0,
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
  },
  {
    id: 2,
    name: "Jennifer Haldoc",
    image: "/images/user1.jpg",
    rating: 4.0,
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
  },
  {
    id: 3,
    name: "Jennifer Haldoc",
    image: "/images/user1.jpg",
    rating: 4.0,
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
  },
  {
    id: 4,
    name: "Jennifer Haldoc",
    image: "/images/user1.jpg",
    rating: 4.0,
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-3">
          <span className="text-4xl font-bold text-black">“</span>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Testimonials
          </h2>
          <span className="text-4xl font-bold text-red-600">”</span>
        </div>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4"
          >
            {/* User Info */}
            <div className="flex items-center space-x-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <div className="flex items-center text-yellow-500 text-sm">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <span className="ml-auto text-gray-500 text-sm">{t.rating}</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
