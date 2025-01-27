import Image from 'next/image';
import React from 'react';
import './chatlink.css';

const Chatlink = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* HP Logo */}
        <Image
          src="/bhplogo.png" // Make sure this is the correct path to your logo image
          alt="HP Logo"
          height={63}
          width={63}
          className="2xl:ml-[-182px]"
        />
      </div>
      <div className="chat-now">
        <div className="line-before"></div> {/* Horizontal line */}
        <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
        <span>Chat Now</span>
      </div>
    </header>
  );
};

export default Chatlink;
