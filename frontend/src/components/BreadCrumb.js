import React from "react";

const Breadcrumb = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow">

      <div className="text-sm text-gray-600 flex space-x-2">
        <span className="hover:underline cursor-pointer">/</span>
        <span className="hover:underline cursor-pointer">Beranda</span>
        <span className="hover:underline cursor-pointer">SSM QC</span>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <button className="hover:text-blue-600 flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h2l2 5h10l2-5h2M8 10V6a4 4 0 118 0v4"
            />
          </svg>
          <span>Beranda Permohonan</span>
        </button>

        <button className="hover:text-blue-600 flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A4.2 4.2 0 014.2 15H19.8a4.2 4.2 0 01-.921 2.804M4.2 15H3a4.2 4.2 0 01.92-2.804M19.8 15H21a4.2 4.2 0 01-.921-2.804M19.8 15h.001"
            />
          </svg>
          <span>Beranda Menu</span>
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
