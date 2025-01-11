import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const PostAddProduct = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    condition: "",
    location: "",
    price: "",
    moq: "",
    sellerName: "",
    phone: "",
    images: [],
  });

  const categories = ["Electronics", "Furniture", "Clothing"];
  const subCategories = {
    Electronics: ["Phones", "Laptops", "Accessories"],
    Furniture: ["Sofas", "Chairs", "Tables"],
    Clothing: ["Men", "Women", "Kids"],
  };
  const types = {
    Phones: ["Smartphones", "Feature Phones"],
    Laptops: ["Gaming", "Business", "Ultrabooks"],
    Accessories: ["Chargers", "Covers", "Headphones"],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setSelectedType(null);
    setStep(2);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedType(null);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setStep(3);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert("You can only select up to 3 images.");
      return;
    }
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = () => {
    console.log("Posting ad with data:", {
      selectedCategory,
      selectedSubCategory,
      selectedType,
      ...formData,
    });
  };

  const [images, setImages] = useState([null, null, null]); 

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = file;
      setImages(updatedImages);
    }
  };

  // Remove an image
  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  return (
    <div className="min-h-screen py-5 px-7">
      <div className="p-6">
        {step === 1 && (
          <div>
            <div className="w-32 border px-2 bg-blue-500 hover:bg-blue-700 shadow-md rounded-lg">
              <button
                onClick={() => window.history.back()}
                className="flex py-1 w-full  text-white justify-center gap-2 items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
                Back
              </button>
            </div>

            <h2 className="text-xl font-bold my-3">Select a Category</h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`p-4 flex justify-between items-center gap-3 border rounded  cursor-pointer bg-gradient-to-r from-blue-50 via-blue-100
                     hover:bg-gradient-to-r hover:from-blue-200 hover:via-blue-400 ${
                       category === selectedCategory
                         ? "bg-indigo-200 border-blue-400 border-2 rounded-lg"
                         : ""
                     }`}
                >
                  {category}
                  <FaArrowRight className="text-lg md:text-xl " />
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="w-32 border px-2 bg-blue-500 hover:bg-blue-700 shadow-md rounded-lg">
              <button
                onClick={() => setStep(1)}
                className="flex py-1 w-full  text-white justify-center gap-2 items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
                Back
              </button>
            </div>

            <div className="flex space-x-4 mt-4">
              <div className="w-1/3">
                <h3 className="font-semibold mb-4">Selected Category</h3>
                <div>
                  {categories.map((category) => (
                    <div
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`p-3 flex justify-between items-center gap-3 border mb-3 rounded cursor-pointer bg-gradient-to-r from-blue-50 via-blue-100
                     hover:bg-gradient-to-r hover:from-blue-200 hover:via-blue-400 ${
                       category === selectedCategory
                         ? "bg-indigo-200 border-blue-400 border-2 rounded-lg"
                         : ""
                     }`}
                    >
                      {category}
                      <FaArrowRight className="text-lg md:text-xl text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/3">
                <h3 className="font-semibold mb-4">Subcategories</h3>
                <div className="grid grid-cols-1 gap-2">
                  {subCategories[selectedCategory]?.map((sub) => (
                    <div
                      key={sub}
                      onClick={() => handleSubCategoryClick(sub)}
                      className={`p-3 mb-1.5 border flex justify-between items-center gap-3 rounded cursor-pointer bg-gradient-to-r from-blue-50 via-blue-100
                     hover:bg-gradient-to-r hover:from-blue-200 hover:via-blue-400 ${
                       sub === selectedSubCategory
                         ? "bg-indigo-200 border-blue-500 border-2 rounded-lg"
                         : ""
                     }`}
                    >
                      {sub}
                      <FaArrowRight className="text-lg md:text-xl text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
              {selectedSubCategory && (
                <div className="w-1/3">
                  <h3 className="font-semibold mb-4">Types</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {types[selectedSubCategory]?.map((type) => (
                      <div
                        key={type}
                        onClick={() => handleTypeClick(type)}
                        className={`p-3 mb-2 border flex justify-between items-center gap-3 rounded cursor-pointer bg-gradient-to-r from-blue-50 via-blue-100
                     hover:bg-gradient-to-r hover:from-blue-200 hover:via-blue-400 ${
                       type === selectedType
                         ? "bg-indigo-200 border-blue-500 border-2 rounded-lg"
                         : ""
                     }`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-2 text-center">Post Your Ad</h2>
            <div className="p-4 mb-4 rounded shadow bg-white border">
              <p className="font-semibold">
                Category:{" "}
                <span className="text-blue-600">{selectedCategory}</span>
              </p>
              <p className="font-semibold">
                Subcategory:{" "}
                <span className="text-blue-600">{selectedSubCategory}</span>
              </p>
              <p className="font-semibold">
                Type: <span className="text-blue-600">{selectedType}</span>
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                  className="p-2 border rounded w-full"
                />
                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  placeholder="Condition Details..."
                  className="p-2 border rounded w-full"
                />
              </div>
              <div>
                <div className="flex px-8 py-4 justify-around mx-auto p-2">
                  {/* Heading */}
                  <div className="mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Upload Images
                    </h2>
                    <p className="text-sm text-gray-500">
                      You can upload up to 3 images.
                    </p>
                  </div>

                  {/* Image Upload Section */}
                  <div className="grid grid-cols-4 gap-3">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-24 h-24 border-2 border-dashed border-gray-300 
            rounded-lg overflow-hidden group hover:border-blue-500"
                      >
                        {/* Render Image or Placeholder */}
                        {image ? (
                          <div className="w-full h-full">
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Uploaded ${index + 1}`}
                              className="object-cover w-full h-full"
                            />
                            {/* Remove Button */}
                            <button
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1
                  text-xs shadow-sm hover:bg-red-700 transition"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor={`image-input-${index}`}
                            className="flex flex-col items-center justify-center w-full h-full 
                cursor-pointer text-gray-400 group-hover:text-blue-500 transition"
                          >
                            <span className="text-xl font-bold">+</span>
                            <p className="text-xs">Upload</p>
                            <input
                              id={`image-input-${index}`}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleImageChange(e, index)}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="p-2 border rounded w-full"
              ></textarea>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="p-2 border rounded w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                  className="p-2 border rounded w-full"
                />
                <input
                  type="number"
                  name="moq"
                  value={formData.moq}
                  onChange={handleInputChange}
                  placeholder="Minimum Order Quantity"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleInputChange}
                  placeholder="Seller Name"
                  className="p-2 border rounded w-full"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="w-full flex justify-end px-5">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 w-52 text-white rounded hover:bg-blue-600"
                >
                  Post Ad
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAddProduct;
