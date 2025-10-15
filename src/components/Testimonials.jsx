import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "Amazing service! Loved the quality and the prompt support. Highly recommended!",
  },
  {
    id: 2,
    name: "Ayesha Malik",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "Very professional and friendly team. They understood our needs perfectly.",
  },
  {
    id: 3,
    name: "Hamza Siddiqui",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "Great experience overall. The end product exceeded our expectations!",
  },
  {
    id: 4,
    name: "Fatima Noor",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "Exceptional work quality and very reliable. Will definitely use their services again.",
  },
  {
    id: 5,
    name: "Arham",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "Superb work! Communication was smooth and results were exactly what I wanted.",
  },
  {
    id: 6,
    name: "Jahanzeb",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "Really impressed with the professionalism and speed of delivery.",
  },
  {
    id: 7,
    name: "Umar Daim",
    rating: (Math.random() * 0.5 + 3.5).toFixed(1),
    text: "The team went above and beyond. Highly recommend for anyone looking for quality work.",
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

      {/* Horizontal Scroll Testimonials */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4"
          >
            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <div className="flex items-center text-yellow-500 text-sm">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(t.rating) ? "" : "text-gray-300"}
                    />
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
