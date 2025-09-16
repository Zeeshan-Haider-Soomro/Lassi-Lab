import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative w-full bg-white px-6 md:px-20 py-12 flex flex-col md:flex-row items-start md:items-center gap-10">
      {/* Left Decorative Section */}
      <div className="hidden md:flex flex-col justify-center items-center">
        {/* Left-side text rotated */}
        {/* <h3 className="text-gray-600 text-2xl font-bold tracking-widest rotate-[-90deg] mb-6">
          LASSILAB
        </h3> */}
        {/* Pistachio image - replace with actual image */}
        <img
          src="/images/pistachio.png"
          alt="Pistachio"
          className="w-24 h-auto object-contain"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-1">
        {/* Contact Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 text-center md:text-left">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-6 text-center md:text-left">
          We'd love to hear from you! Whether you have a question, feedback,
          or just want to share your love for lassi, our team is always ready to connect.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-red-600 text-2xl mb-10">
          <a href="#" className="hover:text-red-800 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-800 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-800 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-red-800 transition">
            <FaFacebook />
          </a>
        </div>

        {/* Location & Hours */}
        <h3 className="text-xl font-semibold text-red-700 mb-2">
          Your Favorite Lassi, Just Around the Corner
        </h3>
        <p className="text-gray-700 mb-6">
          We’re serving up the city’s creamiest rabri lassi and desserts right here in the heart of Malir.
          Come visit us, sip your favorite flavors, and enjoy the Lassi Lab vibe in person.
        </p>

        <div className="text-gray-800">
          <p>
            <span className="font-semibold">Address:</span> D2/24, Opposite Bank Islami, Near RCD Ground,
            Malir, Karachi, Pakistan
          </p>
          <p>
            <span className="font-semibold">Hours:</span> Monday – Sunday | 12:00 PM – 12:00 AM
          </p>
        </div>
      </div>

      {/* Right Decorative Petals */}
      <div className="hidden md:block absolute top-10 right-10">
        <img
          src="/images/Petal.png"
          alt="Petals"
          className="w-20 opacity-80"
        />
      </div>
    </section>
  );
};

export default ContactUs;
