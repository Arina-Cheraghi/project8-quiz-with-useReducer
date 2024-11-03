import React from 'react';
import logo from "../logo.svg";

function Header() {
  return (      
    <header className="bg-gray-800 p-5 flex items-center justify-center border-b-2 border-teal-600">
        <img src={logo} alt="Logo" className="w-12 h-24 mr-3" />
        <h1 className="text-[#F0EBE3] text-5xl font-bold text-shadow-md">The React Quiz</h1>
    </header>
  );
}

export default Header;