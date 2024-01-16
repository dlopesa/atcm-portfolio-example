// ProfileInfo.js
import React from 'react';

const ProfileInfo = () => {
  return (
    <main className="container mx-auto py-8 px-4 flex items-center">
      {/* Image */}
      <div className="w-1/2 pr-8 flex justify-center items-center" style={{height: '37rem'}}>
        <img
          src="abi.png"
          alt="Abigail's Photo"
          className="object-contain"
          style={{maxWidth: '100%', maxHeight: '100%',  opacity: 0.9}}
        />
      </div>

      {/* Information */}
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4">Abigail Goodman</h1>
        <p className="text-lg mb-4">
        My name is Abigail Goodman. I am twenty one, from England and currently studying architectural technology and construction management at VIA University, Horsens. Studying in VIA has taught me a lot and expanded my interests as well as my understanding in the field of construction. One of my biggest interests in this course has been learning to understand and draw d etails in Revit, however, I have developed my skills in a wide range of areas as demonstrated in my portfolio
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
