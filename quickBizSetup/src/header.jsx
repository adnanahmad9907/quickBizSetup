import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Success Stories/blog", href: "/blog" },
    { name: "Contact us", href: "contactus" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <img
                  src={logo}
                  alt="QuickBizSetup Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-white">
                  Quick<span className="text-amber-400">Biz</span>Setup
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-all duration-200 flex items-center"
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                    )}
                  </a>
                  {item.dropdownItems && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.dropdownItems.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contactus">
              <button className="ml-4 px-4 py-2 bg-amber-400 text-blue-900 rounded-md font-medium hover:bg-amber-500 transition-all duration-200">
                Get Started
              </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-amber-400 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700"
                >
                  {item.name}
                </a>
              ))}
              <link to="/contactus">
              <button className="w-full mt-2 px-4 py-2 bg-amber-400 text-blue-900 rounded-md font-medium hover:bg-amber-500">
                Get Started
              </button>
              </link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
