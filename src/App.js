// App.js
import React from 'react';
import Navbar from './Navbar';
import ProfileInfo from './ProfileInfo';
import Footer from './Footer';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <div className="bg-white text-black">
      <header className="border-b border-gray-300">
        <Navbar />
      </header>
      
      <ProfileInfo />
      <Portfolio   />
      <Footer />
    </div>
  );
};

export default App;
