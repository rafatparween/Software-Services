"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[30px]">
      {/* Navigation Bar */}
      <nav className="bg-[#1C8DCEED] text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12 xl:ml-[-82px] 2xl:ml-[265px]">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMenu />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center space-x-16 2xl:ml-[-285px] xl:ml-[67px]">
              <Link href="../customsoftware/Pages">Printer Offline</Link>
              <Link href="../customsoftware/Pages">Printer Setup</Link>
              <Link href="../customsoftware/Pages">Scanner Setup</Link>
              <Link href="../customsoftware/Pages">Support Home</Link>
              <Link href="../customsoftware/Pages">Ink Cartridges Issue</Link>
              <Link href="../customsoftware/Pages">Diagnostics</Link>
              <Link href="../customsoftware/Pages">Business Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1C8DCEED] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col space-y-5 mt-16 pl-6">
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Printer Offline</Link>
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Printer Setup</Link>
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Scanner Setup</Link>
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Support Home</Link>
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Ink Cartridges Issue</Link>
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Diagnostics</Link>
          <Link href="../customsoftware/Pages" className="block" onClick={() => setIsOpen(false)}>Business Support</Link>
        </div>
      </div>

      <div className="my-4 w-full mt-[3px]"></div>
    </div>
  );
}
