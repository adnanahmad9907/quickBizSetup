import React from "react";
import Header from "./header.jsx";
import HeroSection from "./herosection";
import Maincontent from "./maincontent";
import Footer from "./footer.jsx";
import { StatsWithAnimation, WhyChooseUs } from "./animation.jsx";
import AboutUs from "./AboutUS.jsx";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <div className="bg-gradient-to-b from-blue-900 to-white">
          <StatsWithAnimation />
        </div>
        <Maincontent />
        <WhyChooseUs />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
