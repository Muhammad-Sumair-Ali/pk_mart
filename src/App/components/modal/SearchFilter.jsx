import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function SearchFilter() {
  const [open, setOpen] = useState(false); // Modal state

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      {/* Button to open the modal */}
      <button
        type="button"
        onClick={openModal}
        className="px-2 py-2 font-bold text-black  bg-gray-200  hover:bg-blue-700 hover:text-white rounded-full"
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={closeModal}
        className="fixed inset-0 z-50 bg-gray-500/50 overflow-y-auto"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8">
            {/* Modal Header */}
            <DialogTitle className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Filter Products
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </DialogTitle>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              <div>
                <h4 className="text-gray-700 font-medium">Features</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Free Shipping</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">On Sale</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-4 border-t border-gray-200">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
