import React from "react";

const MainContent = () => (
  <div className="bg-white -mt-12">
    {" "}
    {/* Negative margin to reduce gap */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Your Complete Business Solution Partner
        </h2>
        <p className="text-blue-800 text-lg leading-relaxed">
          QuickBizSetup Solutions is your one-stop platform for all
          business-related services, simplifying the process of company
          registration, GST compliance, and legal documentation. Whether you're
          starting a new venture or managing an existing business, we provide
          end-to-end solutions, including:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-amber-500 text-xl">•</span>
              <span className="text-blue-800">
                Company Incorporation (Private Limited, LLP)
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-amber-500 text-xl">•</span>
              <span className="text-blue-800">GST Registration and Filing</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-amber-500 text-xl">•</span>
              <span className="text-blue-800">Trademark Registration</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="text-amber-500 text-xl">•</span>
              <span className="text-blue-800">Tax Filing Services</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-amber-500 text-xl">•</span>
              <span className="text-blue-800">Legal Documentation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-amber-500 text-xl">•</span>
              <span className="text-blue-800">Compliance Management</span>
            </li>
          </ul>
        </div>
        <p className="text-blue-800 text-lg leading-relaxed mt-6">
          Our expert team ensures that your business stays compliant with all
          regulatory requirements, while you focus on growing your business.
          With QuickBizSetup Solutions, you get the convenience of managing all
          your legal and financial needs online, saving you time and effort.
        </p>
      </div>
    </div>
  </div>
);

export default MainContent;
