import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your message has been sent! ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white w-full flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-6 rounded-2xl border border-gray-300 shadow-sm"
      >
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-red-700 mb-6">
          Contact Us Form
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 rounded-lg shadow hover:from-red-700 hover:to-red-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
