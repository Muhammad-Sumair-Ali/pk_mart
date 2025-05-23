import React from "react";
import { categories } from "../../data/categories";
import { Link, useNavigate, useParams } from "react-router-dom";
import { paths } from "../../helper/paths";
import Breadcrumb from "../components/reuseable/Breadcrumb";

const SubCategories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let category = categories[id];
  if (!category) {
    return (
      <div className="text-center text-xl text-gray-600 mt-10">
        Category not found
      </div>
    );
  }
  return (
    <>
      <div className="px-4 md:px-10 lg:px-24 md:py-5 bg-gray-100">
        <Breadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: category.title },
          ]}
        />

        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">{category?.title}</h2>
        </div>

        <div className="space-y-3 sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {category?.subcategories.map((subcategory, idx) => (
            <div
              key={idx}
              className="flex flex-row sm:flex-col  items-center bg-white rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 p-4 gap-4"
            >
              {/* Subcategory Image */}
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-md border border-gray-200 shadow-sm"
              />

              {/* Subcategory Details */}
              <div className="flex-1 text-left sm:text-center">
                <Link to={paths.products}>
                  <h4 className="text-md font-bold text-gray-800 hover:text-blue-600 transition">
                    {subcategory.name}
                  </h4>
                </Link>
                <div className="flex flex-wrap gap-1 md:gap-2 mt-1 justify-start sm:justify-center">
                  {subcategory?.types.map((type, typeIdx) => (
                    <div
                      key={typeIdx}
                      className="text-xs text-gray-700 bg-gray-100 rounded-full px-3 py-1 hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-4">
          <button className="bg-blue-600 text-white px-4 py-2 w-36 rounded-lg hover:bg-blue-800 shadow-lg">
            View more
          </button>
        </div>
      </div>
    </>
  );
};

export default SubCategories;
