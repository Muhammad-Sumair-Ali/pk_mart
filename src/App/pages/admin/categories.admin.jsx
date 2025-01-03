import React, { useState } from "react";
import Heading from "../../components/panel/Heading";
import { FaList } from "react-icons/fa";

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

  const [categoryTitle, setCategoryTitle] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const [subcategoryImage, setSubcategoryImage] = useState("");
  const [subcategoryTypes, setSubcategoryTypes] = useState("");

  // Add new category
  const addCategory = () => {
    const newCategory = {
      title: categoryTitle,
      subcategories: [],
    };
    setCategories([...categories, newCategory]);
    setCategoryTitle("");
  };

  // Add new subcategory
  const addSubcategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].subcategories.push({
      name: subcategoryName,
      image: subcategoryImage,
      types: subcategoryTypes.split(",").map((type) => type.trim()),
    });
    setCategories(updatedCategories);
    setSubcategoryName("");
    setSubcategoryImage("");
    setSubcategoryTypes("");
  };

  // Delete category
  const deleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  // Delete subcategory
  const deleteSubcategory = (catIndex, subIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[catIndex].subcategories = updatedCategories[
      catIndex
    ].subcategories.filter((_, i) => i !== subIndex);
    setCategories(updatedCategories);
  };

  return (
    <>

      <Heading
        icon={<FaList />}
        title="Manage Categories"
        desc="Create new category with subCategories"
      />
      {/* Add New Category */}
      <div className="mb-6">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Category Title"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addCategory}
        >
          Add Category
        </button>
      </div>

      {/* Categories List */}
      {categories.map((category, index) => (
        <div key={index} className="border p-4 mb-4 rounded bg-gray-100 shadow">
          <div className="flex justify-between  items-center">
            <h3 className="text-xl font-bold">{category.title}</h3>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteCategory(index)}
            >
              Delete
            </button>
          </div>

          {/* Add Subcategory */}
          <div className="mt-4 ">
            <input
              type="text"
              className="border p-2 mr-2"
              placeholder="Subcategory Name"
              value={subcategoryName}
              onChange={(e) => setSubcategoryName(e.target.value)}
            />
            <input
              type="text"
              className="border p-2 mr-2"
              placeholder="Subcategory Image URL"
              value={subcategoryImage}
              onChange={(e) => setSubcategoryImage(e.target.value)}
            />
            <input
              type="text"
              className="border p-2 mr-2"
              placeholder="Subcategory Types (comma-separated)"
              value={subcategoryTypes}
              onChange={(e) => setSubcategoryTypes(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addSubcategory(index)}
            >
              Add Subcategory
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">

          {/* Subcategories List */}
          {category.subcategories.map((sub, subIndex) => (
            <div
            key={subIndex}
              className="border py-2 rounded mt-4 bg-white flex w-56 justify-center text-center flex-col items-center"
              >
              <div>
                <h4 className="font-bold">{sub.name}</h4>
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-28 object-contain m-auto"
                  />

                <div className="flex flex-wrap justify-center m-auto gap-1 my-2 w-5/6 text-sm lg:text-md" >
                {sub.types.map((type,index) => 
                <p key={index} className="bg-gray-200 rounded-lg  p-1"> {type}</p>)}
                </div>
                
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 w-3/4 m-2 rounded"
                onClick={() => deleteSubcategory(index, subIndex)}
                >
                Delete
              </button>
            </div>
          ))}
      </div>
        </div>
      ))}
    </>
  );
};

export default AdminCategories;
