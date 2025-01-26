import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-500">DIGISTALL</h1>
      <nav className="space-x-4">
        <button className="text-gray-600">Home</button>
        <button className="text-gray-600">Catalogue</button>
        <button className="text-gray-600">Editor</button>
        <button className="text-gray-600">Profile</button>
      </nav>
    </header>
  );
};

export default Header;
