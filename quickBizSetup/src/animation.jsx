import React, { useState, useEffect } from "react";
import { Users, Clock, Shield, PiggyBank, Award } from "lucide-react";

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const endNum = parseInt(endValue.replace(/[^0-9]/g, ""));
    const step = Math.ceil(endNum / (duration / 16));
    const timer = setInterval(() => {
      startValue += step;
      if (startValue > endNum) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(startValue + "+");
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return <span>{count}</span>;
};

export const StatsWithAnimation = () => {
  const stats = [
    { number: "15000+", label: "Clients Served" },
    { number: "8500+", label: "Companies Incorporated" },
    { number: "12000+", label: "GST Registrations" },
    { number: "100+", label: "Funds Raised (₹ in Crs)" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-900">
                <AnimatedCounter endValue={stat.number} />
              </h3>
              <p className="text-sm text-blue-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Professional Team",
      description: "Expert CAs, CSs & MBAs under one roof",
      icon: <Users className="w-6 h-6 text-amber-500" />,
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      title: "Timely Execution",
      description: "Defined timeline guaranteed",
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      bgColor: "from-blue-600 to-blue-700",
    },
    {
      title: "Honest Advice",
      description: "Transparent guidance always",
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      bgColor: "from-blue-700 to-blue-800",
    },
    {
      title: "Clear Pricing",
      description: "No hidden charges ever",
      icon: <PiggyBank className="w-6 h-6 text-amber-500" />,
      bgColor: "from-blue-600 to-blue-700",
    },
    {
      title: "Best Quality",
      description: "Global standards followed",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      bgColor: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Why Choose <span className="text-amber-500">QuickBizSetup</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div
                className={`bg-gradient-to-br ${feature.bgColor} p-6 rounded-lg h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-white/10 p-3 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
