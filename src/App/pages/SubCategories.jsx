import React from 'react'
import { categories } from '../../data/categories'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { paths } from '../../helper/paths'

const SubCategories = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  let category = categories[id]
  if (!category) {
    return <div className="text-center text-xl text-gray-600 mt-10">Category not found</div>
  }
  return (
    <>
    <div className='md:px-10 lg:px-24 md:py-5 bg-gray-100'>

 
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-600 hover:bg-blue-300 rounded-md shadow-sm transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-8 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{category?.title}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {category?.subcategories.map((subcategory, idx) => (
          <div
            key={idx}
            className="group flex flex-col drop-shadow-xl overflow-hidden items-center bg-white rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-2 p-2"
          >
            {/* Subcategory Image */}
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className="w-full h-32 object-cover rounded-md shadow-lg mb-3   border border-gray-200 group-hover:border-blue-500 transition"
            />
            {/* Subcategory Name */}
            <Link to={paths.products}>
              <h4 className="text-md font-bold text-gray-800 group-hover:text-blue-600 transition text-center">
                {subcategory.name}
              </h4>
            </Link>

            {/* Types */}
            <div className="flex flex-wrap justify-center gap-1 mt-2">
              {subcategory?.types.map((type, typeIdx) => (
                <div
                  key={typeIdx}
                  className="text-sm text-gray-700 bg-gray-100 rounded-full px-2 py-1 hover:bg-blue-100 hover:text-blue-600 transition"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
      <div className='flex justify-center my-4' >

         <button className='bg-blue-600 text-white px-2 p-2  w-48 rounded-lg hover:bg-blue-800 shadow-lg drop-shadow-lg'>View more </button>
      </div>
      </div>
    </>
  )
}

export default SubCategories
