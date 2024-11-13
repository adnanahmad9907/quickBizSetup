import React from "react";
import { Phone, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-900 to-blue-700 py-12 text-blue-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-50">Quick Biz Setup</h3>
        <p className="mb-4 text-blue-200">
          We help entrepreneurs like you start and grow your businesses with
          confidence.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-200 hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-blue-200 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-50">Contact Us</h3>
        <div className="flex items-center mb-2">
          <Phone className="h-5 w-5 mr-2 text-blue-200" />
          <a
            href="tel:+911234567890"
            className="text-blue-200 hover:text-blue-400"
          >
            +91 9625031973
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-2 text-blue-200" />
          <a
            href="mailto:contact@operation@qbsgov.com"
            className="text-blue-200 hover:text-blue-400"
          >
            operation@qbsgov.com
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-2 text-blue-200" />
          <a
            href="mailto:contact@support@qbsgov.com"
            className="text-blue-200 hover:text-blue-400"
          >
            support@qbsgov.com
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-50">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="text-blue-200 hover:text-blue-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="about"
              className="text-blue-200 hover:text-blue-400 transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="services"
              className="text-blue-200 hover:text-blue-400 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="contactus"
              className="text-blue-200 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-50">
          Subscribe to our Newsletter
        </h3>
        <p className="mb-4 text-blue-200">
          Get the latest updates and tips for your business growth.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-blue-800 border-none px-4 py-2 rounded-l-md text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-amber-400 text-blue-900 px-4 py-2 rounded-r-md hover:bg-amber-500 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm text-blue-200">
      &copy; 2023 Quick Biz Setup. All rights reserved.
    </div>
  </footer>
);

export default Footer;
