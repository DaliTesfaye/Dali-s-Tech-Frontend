import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-2 mt-2">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We provide high-quality products at the best prices. Our mission is to
            deliver excellence and customer satisfaction every time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <p className="text-sm">Email: support@yourcompany.com</p>
          <p className="text-sm mb-4">Phone: +123 456 789</p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="mailto:support@yourcompany.com" className="hover:text-white transition"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
