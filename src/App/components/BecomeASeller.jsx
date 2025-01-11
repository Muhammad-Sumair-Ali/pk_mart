import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BecomeSeller = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    establishedYear: "",
    businessAddress: "",
    contactEmail: "",
    contactPhone: "",
    contactWhatsApp: "",
    contactFacebook: "",
    productCategories: "",
    gallery: [],
    legalDocs: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = Array.from(e.target.files);
    setFormData({ ...formData, [name]: files });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    alert("Your application has been submitted please wait TEAM can approve them !");
    navigate("/")
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold text-gray-700">Become a Seller</h1>
          <p className="text-gray-500">Step {step} of 5</p>
        </div>
        <div className="w-full h-2 bg-gray-300 rounded-lg">
          <div
            className={`h-2 bg-blue-500 rounded-lg transition-all`}
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Steps */}
      <div className="mb-6">
        {step === 1 && (
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="businessType"
                placeholder="Business Type"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="establishedYear"
                placeholder="Year Established"
                value={formData.establishedYear}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea
                name="businessAddress"
                placeholder="Business Address"
                value={formData.businessAddress}
                onChange={handleInputChange}
                rows="2"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="contactEmail"
                placeholder="Contact Email"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="contactPhone"
                placeholder="Phone Number"
                value={formData.contactPhone}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="contactWhatsApp"
                placeholder="WhatsApp Number"
                value={formData.contactWhatsApp}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="contactFacebook"
                placeholder="Facebook Profile/Business Page Link"
                value={formData.contactFacebook}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">Product Categories</h2>
            <textarea
              name="productCategories"
              placeholder="Categories of Products You Wish to Sell"
              value={formData.productCategories}
              onChange={handleInputChange}
              rows="3"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">Business Gallery</h2>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Business Gallery Photos (2-3 Minimum)
              </label>
              <input
                type="file"
                name="gallery"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">Legal Information</h2>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Legal Documents (Business License, etc.)
              </label>
              <input
                type="file"
                name="legalDocs"
                accept="image/*, application/pdf"
                onChange={handleFileChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className={`px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg shadow-sm ${
            step === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
          disabled={step === 1}
        >
          Back
        </button>
        {step === 5 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BecomeSeller;
