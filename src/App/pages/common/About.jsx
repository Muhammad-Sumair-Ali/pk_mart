import React from "react";
import { FaBoxes, FaNetworkWired, FaCogs, FaHeadset, FaChartLine, FaTruck, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaBoxes className="text-indigo-600 text-4xl mb-4" />,
    title: "Wide Range of Products",
    description: "Access thousands of products from trusted suppliers across industries, ensuring quality and variety.",
  },
  {
    icon: <FaNetworkWired className="text-indigo-600 text-4xl mb-4" />,
    title: "Nationwide Network",
    description: "Connect with manufacturers, distributors, and retailers from every corner of Pakistan.",
  },
  {
    icon: <FaCogs className="text-indigo-600 text-4xl mb-4" />,
    title: "Custom Solutions",
    description: "Tailor-made tools and analytics to help streamline your business operations and boost efficiency.",
  },
  {
    icon: <FaHeadset className="text-indigo-600 text-4xl mb-4" />,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is here to assist you every step of the way, ensuring your success.",
  },
  {
    icon: <FaChartLine className="text-indigo-600 text-4xl mb-4" />,
    title: "Scalable for Growth",
    description: "Whether you're a small business or an enterprise, Jz Mart grows with your needs.",
  },{
    icon: <FaStar className="text-indigo-600 text-4xl mb-4" />,
    title: "Trusted Sellers",
    description: "Work with verified and reliable sellers to ensure high-quality products and trustworthy transactions, fostering a secure business environment.",
  },
  
];
const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-6 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4  flex">
                <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Building Stronger Communities with <span className="text-blue-600">Jz Mart</span> through
                  Collaboration and Empowerment
                </h2>

                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  <mark>Jz Mart is Pakistan’s premier B2B marketplace</mark>,
                  dedicated to empowering businesses of all sizes. By fostering
                  collaboration and innovation,{" "}
                  <strong>
                    Jz Mart connects suppliers, manufacturers, and buyers across
                    the nation
                  </strong>
                  . Our platform ensures seamless transactions, reliable
                  sourcing, and unparalleled support to help businesses thrive
                  in today’s competitive landscape.
                </p>
              </div>
              <button className="sm:w-fit w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 text-white text-sm font-medium leading-6">
                  Get Started
                </span>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      <section className="py-6 bg-gray-50">
      <div className="w-full max-w-6xl px-4 md:px-6 lg:px-8 mx-auto">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
          Why Choose Jz Mart?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 md:p-5 lg:p-6 bg-white shadow-lg rounded-lg hover:bg-indigo-100 transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-lg lg:text-xl font-semibold mb-2 text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="py-12 my-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with Jz Mart?
          </h2>
          <p className="text-lg mb-8">
            Join Pakistan’s leading B2B marketplace today and unlock endless
            opportunities for your business.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
