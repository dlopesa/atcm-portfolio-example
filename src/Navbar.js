// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Abigail's Portfolio</div>
        <div className="space-x-4">
          <button className="bg-black text-white py-2 px-4 hover:underline">
            About Me
          </button>
          <button className="bg-black text-white py-2 px-4 hover:underline">
            Portfolio
          </button>
          <button className="bg-black text-white py-2 px-4 hover:underline">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
