// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router";
import { FaShoppingBag, FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg shadow-red-100/50 bg-white">
      {/* 🔴 Top tagline */}
      <div className="bg-red-700 text-white text-sm py-2 text-center shadow-md shadow-red-200/40">
        Freshly whipped rabri lassi served with love, tradition, and a dash of modern flair.
      </div>

      {/* 🔴 Main navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-2 bg-white rounded-b-2xl shadow-xl shadow-gray-200/70 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Lassi Lab Logo"
              className="h-16 w-18 object-contain drop-shadow-md"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-gray-800 font-medium">
            <li><Link to="/home" className="hover:text-red-700 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-700 transition">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-red-700 transition">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Cart + Wishlist (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-red-600">
          <div className="flex items-center cursor-pointer hover:text-red-800 drop-shadow-sm transition">
            <FaShoppingBag size={20} />
            <span className="ml-1 text-sm">(Cart)</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-red-800 drop-shadow-sm transition">
            <FaHeart size={20} />
            <span className="ml-1 text-sm">(Wishlist)</span>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="drop-shadow-md">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* 🔴 Side Drawer (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
          <h2 className="text-lg font-bold text-red-700">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={22} className="text-gray-700 hover:text-red-700" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="px-6 py-6 space-y-6 text-gray-800 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-red-700 transition">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-red-700 transition">About Us</Link>
          <Link to="/contact-us" onClick={() => setIsOpen(false)} className="block hover:text-red-700 transition">Contact Us</Link>
        </nav>

        {/* Cart + Wishlist in Drawer */}
        <div className="px-6 pt-4 border-t flex items-center space-x-6 text-red-600">
          <div className="flex items-center cursor-pointer hover:text-red-800 transition">
            <FaShoppingBag size={20} />
            <span className="ml-1 text-sm">(Cart)</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-red-800 transition">
            <FaHeart size={20} />
            <span className="ml-1 text-sm">(Wishlist)</span>
          </div>
        </div>
      </div>

      {/* 🔴 Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
