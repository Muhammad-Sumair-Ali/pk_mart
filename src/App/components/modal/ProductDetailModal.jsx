'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function ProductDetailModal({ product }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Trigger Button */}
      <button
        className="w-20 border border-gray-300 p-1 text-black text-xs rounded-2xl  hover:bg-gradient-to-r
         from-indigo-600 to-violet-500 hover:text-white transition duration-300"
        onClick={() => setOpen(true)}
      >
        View Details
      </button>

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Image */}
              <div className="bg-gray-100 gap-2 p-4 flex items-center justify-center">
                <img
                  src={product?.images[1] || product?.thumbnail}
                  alt={product?.name || 'Product Image'}
                  className="h-64 w-36 bg-gradient-to-l from-blue-100 via-blue-50 object-cover rounded-md shadow-md"
                />
                <img
                  src={product?.images[2] ||  product?.thumbnail}
                  alt={product?.name || 'Product Image'}
                  className="h-64 w-52 bg-gradient-to-b from-blue-100 via-blue-50 object-cover rounded-md shadow-md"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                {/* Product Name */}
                <h2 className="text-2xl font-bold text-gray-800">{product?.name || 'Product Name'}</h2>
                {/* Product Price */}
                <p className="text-xl text-blue-600 font-semibold">{product?.price || '0.00'}</p>
                {/* Product Description */}
                <p className="text-sm text-gray-600">
                  {product?.description ||
                    'No description available. Please check back later for more details about this product.'}
                </p>
                {/* Product Details */}
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Category: </span>
                    {product?.category || 'N/A'}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Stock: </span>
                    {product?.stock || '0'} items available
                  </p>
                </div>
                {/* Add to Cart Button */}
                <button
                  className="w-full bg-green-500 text-white rounded-md py-2 font-semibold hover:bg-green-600 transition duration-300"
                  onClick={() => alert('Added to cart!')}
                >
                 Chat Now
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
