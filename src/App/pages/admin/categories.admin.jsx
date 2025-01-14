import React, { useState } from "react";
import Heading from "../../components/panel/Heading";
import {
  FaBoxes,
  FaCheckCircle,
  FaList,
  FaRegTimesCircle,
  FaStar,
  FaTags,
} from "react-icons/fa";

const AdminCategories = () => {
  const [categories, setCategories] = useState([
    {
      title: "Apparel, Clothing & Garments",
      subcategories: [
        {
          name: "Kids Wear",
          image:
            "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          types: ["shirt", "Jeans", "School Uniforms"],
        },
        {
          name: "Ladies Kurtis",
          image:
            "https://cdn.pixabay.com/photo/2022/09/22/09/54/woman-7472039_1280.jpg",
          types: ["Cotton Kurtis", "Woolen Kurtis", "Embroidered Kurtis"],
        },
        {
          name: "Men's T-Shirts",
          image:
            "https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520240_960_720.jpg",
          types: ["Round Neck T-Shirts", "Polo T-Shirts", "Graphic T-Shirts"],
        },
        // Add other subcategories as necessary
      ],
    },
  ]);
  const cards = [
    {
      title: "Total Categories",
      count: 28,
      description: "Number of categories available",
      icon: <FaTags className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-green-500 to-green-400",
    },
    {
      title: "Total SubCategories",
      count: 42,
      description: "Number of sub categories available",
      icon: <FaTags className="text-4xl" />,
      bgColor: "bg-gradient-to-r from-rose-500 to-rose-400",
    },
  ];
  const [categoryTitle, setCategoryTitle] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");

  const [subcategoryImage, setSubcategoryImage] = useState("");
  const [subcategoryTypes, setSubcategoryTypes] = useState("");

  const [editCategoryIndex, setEditCategoryIndex] = useState(null);
  const [editSubcategoryIndex, setEditSubcategoryIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [selectedFile, setSelectedFile] = useState(null); // Store the selected file

  // Add or Update Category
  const handleCategorySubmit = () => {
    if (editCategoryIndex !== null) {
      const updatedCategories = [...categories];
      updatedCategories[editCategoryIndex].title = categoryTitle;
      setCategories(updatedCategories);
    } else {
      const newCategory = { title: categoryTitle, subcategories: [] };
      setCategories([...categories, newCategory]);
    }
    setCategoryTitle("");
    setEditCategoryIndex(null);
  };

  // Add or Update Subcategory
  const handleSubcategorySubmit = (catIndex) => {
    const updatedCategories = [...categories];
    if (editSubcategoryIndex !== null) {
      updatedCategories[catIndex].subcategories[editSubcategoryIndex] = {
        name: subcategoryName,
        image: subcategoryImage,
        types: subcategoryTypes.split(",").map((type) => type.trim()),
      };
    } else {
      updatedCategories[catIndex].subcategories.push({
        name: subcategoryName,
        image: subcategoryImage,
        types: subcategoryTypes.split(",").map((type) => type.trim()),
      });
    }
    setCategories(updatedCategories);
    setSubcategoryName("");
    setSubcategoryImage("");
    setSubcategoryTypes("");
    setEditSubcategoryIndex(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setSubcategoryImage(reader.result); // Preview the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  // Edit Category
  const editCategory = (index) => {
    setCategoryTitle(categories[index].title);
    setEditCategoryIndex(index);
  };

  // Edit Subcategory
  const editSubcategory = (catIndex, subIndex) => {
    const subcategory = categories[catIndex].subcategories[subIndex];
    setSubcategoryName(subcategory.name);
    setSubcategoryImage(subcategory.image);
    setSubcategoryTypes(subcategory.types.join(", "));
    setEditSubcategoryIndex(subIndex);
  };

  // Delete Category
  const deleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  // Delete Subcategory
  const deleteSubcategory = (catIndex, subIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[catIndex].subcategories = updatedCategories[
      catIndex
    ].subcategories.filter((_, i) => i !== subIndex);
    setCategories(updatedCategories);
  };

  const resetSubcategoryForm = () => {
    setSubcategoryName("");
    setSubcategoryImage("");
    setSubcategoryTypes("");
    setEditSubcategoryIndex(null);
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <>
      <Heading
        icon={<FaList />}
        title="Manage Categories"
        desc="Create new category with subcategories"
      />

      {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 md:p-3 ${card.bgColor} rounded-lg shadow-lg text-white`}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-md md:text-xl bg-white bg-opacity-20 p-1 md:p-2 rounded-full">
                  {card.icon}
                </span>

                <h3 className="text-lg lg:text-xl font-semibold">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm">{card.description}</p>
              <p className="text-lg lg:text-xl font-bold">{card.count}</p>{" "}
              {/* Dynamic count */}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 my-4">
        <div className="p-6  shadow-lg rounded-lg">
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Top Categories
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center text-gray-700">
              <span>Electronics</span>
              <span className="text-green-500 font-bold">45%</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Fashion</span>
              <span className="text-green-500 font-bold">30%</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Home & Garden</span>
              <span className="text-green-500 font-bold">15%</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span>Others</span>
              <span className="text-green-500 font-bold">10%</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Add or Edit Category */}
      <div className="my-6">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Category Title"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
        />
        <button
          className={`${
            editCategoryIndex !== null ? "bg-green-500" : "bg-blue-500"
          } text-white px-4 py-2 rounded`}
          onClick={handleCategorySubmit}
        >
          {editCategoryIndex !== null ? "Update Category" : "Add Category"}
        </button>
      </div>

      {/* Categories List */}
      {categories.map((category, index) => (
        <div key={index} className="border p-2 mb-4 rounded bg-gray-100 shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{category.title}</h3>
            <div className="flex space-x-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded"
                onClick={() => editCategory(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteCategory(index)}
              >
                Delete
              </button>
            </div>
          </div>

          {/* Add or Edit Subcategory */}
          <div className="mt-2 bg-white shadow-md p-3 rounded-lg">
            <div className="flex justify-center gap-4 flex-row">
              <div className="w-3/4">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Subcategory Name
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1.5 text-sm"
                  placeholder="Subcategory Name"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                />
              </div>
              <div className="w-3/4">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Subcategory Image
                </label>
                {subcategoryImage && (
                  <div>
                    <img
                      src={subcategoryImage}
                      alt="Preview"
                      className="mb-3 max-h-28 object-cover rounded-lg border border-blue-300"
                    />

                    <button
                      className="bg-red-500 text-white font-medium py-2 px-3 rounded-md hover:bg-red-600  transition text-xs"
                      onClick={() => setSubcategoryImage("")}
                    >
                      Remove Picture
                    </button>
                  </div>
                )}
                {subcategoryImage ? (
                  ""
                ) : (
                  <button
                    className="bg-blue-500 text-white font-medium py-2 px-3 rounded-md hover:bg-blue-600 transition text-sm"
                    onClick={openModal}
                  >
                    Select Image
                  </button>
                )}
              </div>
            </div>

            <div className="mb-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Subcategory Tags
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1.5 text-sm"
                placeholder="e.g., Shirt, Jeans, Uniforms"
                value={subcategoryTypes}
                onChange={(e) => setSubcategoryTypes(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <button
                className={`${
                  editSubcategoryIndex !== null
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium py-2 px-3 rounded-md transition text-sm`}
                onClick={() => handleSubcategorySubmit(index)}
              >
                {editSubcategoryIndex !== null
                  ? "Update Subcategory"
                  : "Add Subcategory"}
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
                <h3 className="text-lg font-bold mb-4">
                  Upload Subcategory Image
                </h3>
                <input
                  type="file"
                  accept="image/*"
                  className="mb-4"
                  onChange={handleFileChange}
                />
                {subcategoryImage && (
                  <img
                    src={subcategoryImage}
                    alt="Preview"
                    className="mb-4 max-h-40 rounded-md"
                  />
                )}
                <div className="flex justify-end space-x-2">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={resetSubcategoryForm}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Subcategories List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
            {category.subcategories.map((sub, subIndex) => (
              <div
                key={subIndex}
                className="border rounded-lg bg-white p-1 shadow-md flex flex-col items-center text-center"
              >
                <h4 className="font-semibold text-lg mb-2">{sub.name}</h4>
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <div className="flex flex-wrap justify-center gap-2 h-full">
                  {sub.types.map((type, i) => (
                    <p
                      key={i}
                      className="bg-gray-200 text-sm px-2 py-1 h-fit rounded-lg"
                    >
                      {type}
                    </p>
                  ))}
                </div>
                <div className="flex space-x-2 mt-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-2 rounded-md"
                    onClick={() => editSubcategory(index, subIndex)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-md"
                    onClick={() => deleteSubcategory(index, subIndex)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminCategories;
