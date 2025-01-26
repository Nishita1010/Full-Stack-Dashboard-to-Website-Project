import React from "react";

const Sidebar = () => {
  return (
    <div className="flex h-full">
      <div className="w-52 bg-gray-300 text-gray-800 font-bold p-4">
        <ul>
          <li className="mb-4">
            <a href="#header" className="block text-lg hover:text-gray-600">
              Header
            </a>
          </li>
          <li className="mb-4">
            <a href="#gallery" className="block text-lg hover:text-gray-600">
              Gallery
            </a>
          </li>
          <li className="mb-4">
            <a href="#about" className="block text-lg hover:text-gray-600">
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#team" className="block text-lg hover:text-gray-600">
              Our Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
