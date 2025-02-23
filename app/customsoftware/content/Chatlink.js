// import Image from 'next/image';
// import React from 'react';
// import './chatlink.css';

// const Chatlink = () => {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         {/* HP Logo */}
//         <Image
//           src="/bhplogo.png" // Make sure this is the correct path to your logo image
//           alt="HP Logo"
//           height={63}
//           width={63}
//           className="2xl:ml-[-182px]"
//         />
//       </div>
//       <div className="chat-now">
//         <div className="line-before"></div> {/* Horizontal line */}
//         <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
//         <span>Chat Now</span>
//       </div>
//     </header>
//   );
// };

// export default Chatlink;


"use client"
import { useState } from "react";
import Image from "next/image";
import "./chatlink.css";
import { FiMenu } from "react-icons/fi";

const Chatlink = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        {/* <Image
          src="/bhplogo.png"
          alt="HP Logo"
          height={63}
          width={63}
          className="2xl:ml-[-182px]"
        /> */}
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-2xl text-black" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1C8DCEED] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        
        {/* Sidebar Content */}
        <div className="flex flex-col space-y-5 mt-16 pl-6">
          <span className="block" onClick={() => setIsOpen(false)}>Printer Offline</span>
          <span className="block" onClick={() => setIsOpen(false)}>Printer Setup</span>
          <span className="block" onClick={() => setIsOpen(false)}>Scanner Setup</span>
          <span className="block" onClick={() => setIsOpen(false)}>Support Home</span>
          <span className="block" onClick={() => setIsOpen(false)}>Ink Cartridges Issue</span>
          <span className="block" onClick={() => setIsOpen(false)}>Diagnostics</span>
          <span className="block" onClick={() => setIsOpen(false)}>Business Support</span>
        </div>
      </div>

      {/* Chat Now Button */}
      <div className="chat-now hidden md:flex">
        <div className="line-before"></div> {/* Horizontal line */}
        <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
        <span>Chat Now</span>
      </div>
    </header>
  );
};

export default Chatlink;
