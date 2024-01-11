// ProfileInfo.js
import React from 'react';

const ProfileInfo = () => {
  return (
    <main className="container mx-auto py-8 px-4 flex items-center">
      {/* Image */}
      <div className="w-1/2 pr-8">
        <img
          src="abi.png"
          alt="Abigail's Photo"
          className=""
        />
      </div>

      {/* Information */}
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4">Abigail Goodman</h1>
        <p className="text-lg mb-4">
          Hi there! I'm Abigail, a passionate Architectural Technologist with a
          keen eye for detail and a love for sustainable design. I'm dedicated
          to creating innovative and functional spaces that make a difference.
        </p>
        <a
          href="#portfolio"
          className="bg-black text-white py-2 px-4"
        >
          View Portfolio
        </a>
      </div>
    </main>
  );
};

export default ProfileInfo;
