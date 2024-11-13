import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";


const HeroSection = () => (
  <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Transform Your Business Vision Into Reality
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Your trusted partner in business setup, compliance, and growth. We
          make complex business processes simple and efficient.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/contactus">
  <button className="inline-flex items-center px-6 py-3 rounded-lg bg-amber-400 text-blue-900 font-semibold hover:bg-amber-500 transition-all transform hover:scale-105">
    Get Started Now
    <ArrowRight className="ml-2 h-5 w-5" />
  </button>
</Link>
          {/* <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-all">
            Book a Consultation
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white max-w-2xl mx-auto">
          {[
            "Quick Company Registration",
            "GST & Tax Compliance",
            "Legal Documentation",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center justify-center space-x-2"
            >
              <CheckCircle className="h-5 w-5 text-amber-400" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
