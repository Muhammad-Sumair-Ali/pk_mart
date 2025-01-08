import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contactus = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-xl mt-2">
            We're here to assist you. Let’s connect and make great things
            happen!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg">
            <FaPhoneAlt className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600 mt-2">+92 300 123 4567</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg">
            <FaEnvelope className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600 mt-2">support@jzmart.com</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg">
            <FaMapMarkerAlt className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-600 mt-2">Jz Mart HQ, Lahore, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800">
            Send Us a Message
          </h2>
          <form className="bg-gray-100 shadow-lg rounded-lg p-5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <div className="text-center">

            <button
              type="submit"
              className="w-2/3  bg-blue-600 text-lg text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300"
              >
              Submit 
            </button>
                </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-6 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
      Frequently Asked Questions
    </h2>
    <div className="space-y-3">
      {[
        {
          question: "How can I become a seller on Jz Mart?",
          answer:
            "Simply sign up for a seller account and provide the required information to get started. Our team will review your application promptly.",
        },
        {
          question: "What is a Star Seller, and how can I achieve it?",
          answer:
            "A Star Seller is recognized for excellent customer service, timely deliveries, and high-quality products. Maintain a good track record, and you'll earn the badge!",
        },
        {
          question: "What kind of products can I sell on Jz Mart?",
          answer:
            "You can sell a wide range of products, including electronics, fashion, home goods, and more, as long as they meet our marketplace guidelines.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Go to the login page, click on 'Forgot Password,' and follow the instructions to reset your password.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can reach our customer support team through the contact form on this page or via the provided email and phone number.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 md:p-4  hover:bg-blue-500 hover:text-white hover:shadow-xl transition duration-300"
        >
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <p className="mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Social Media Section */}
      <section className="py-6  bg-gradient-to-r from-indigo-600 mb-7 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center ">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <div className="flex justify-center space-x-6">
            {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-4xl hover:text-gray-300 transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
