import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-start border-b border-gray-700">
        {/* Logo */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <img
            src="/images/logo.png" // Replace with your actual logo path
            alt="LassiLab Logo"
            className="w-42 h-auto"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">QUICK LINKS</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">Our Story</a></li>
            <li><a href="#" className="hover:text-red-500">Shop</a></li>
            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-bold mb-3">OUR SERVICES</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-red-500">Sales Support</a></li>
            <li><a href="#" className="hover:text-red-500">Customer Support</a></li>
            <li><a href="#" className="hover:text-red-500">Refund & Return</a></li>
            <li><a href="#" className="hover:text-red-500">FAQs</a></li>
            <li><a href="#" className="hover:text-red-500">Shipping details</a></li>
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-3">CONNECT WITH US</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" /> +92 307 2372320
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" /> lassilab@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500 text-3xl mb-8" /> D2/24, Opposite Bank Islami, Near RCD Ground, Malir, Karachi, Pakistan
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-3">NEWSLETTER</h4>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-3 px-3 py-2 rounded text-white focus:outline-none"
          />
          <button className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition duration-200">
            Subscribe
          </button>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 justify-start md:justify-start">
            <a href="https://www.instagram.com/lassilabmalir/"><FaInstagram className="text-white hover:text-red-500 text-lg" /></a>
            <a href="https://www.facebook.com/lassilabmalir"><FaFacebookF className="text-white hover:text-red-500 text-lg" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 bg-black text-gray-400">
        © 2025 LassiLab All rights reserved &nbsp; | &nbsp;
        <a href="#" className="hover:text-white">Privacy Policy</a> &nbsp;|&nbsp;
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
