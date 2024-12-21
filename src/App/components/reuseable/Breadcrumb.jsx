import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex mb-2" aria-label="Breadcrumb">
      <ol className="inline-flex py-2 px-1 items-center space-x-0 md:space-x-2 rtl:space-x-reverse">
        {items?.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== items.length - 1 ? (
              <>
                <Link
                  to={item.link || '#'}
                  className="inline-flex items-center text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
              
                  {index === 0 && (
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                  )}
                  {item.name}
                </Link>
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </>
            ) : (
              <span className="ms-0 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
