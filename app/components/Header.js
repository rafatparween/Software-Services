// import Link from 'next/link';

// export default function Header() {
//   return (
//     <div className="flex flex-col items-center mt-[30px] ">
//       {/* Navigation Bar */}
//       <nav className="bg-[#1C8DCEED] text-white w-full">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-center h-12 items-center space-x-16 2xl:ml-[-285px] xl:ml-[67px]">
//             <Link href="../customsoftware/Pages" className="">Printer Offline</Link>
//             <Link href="../customsoftware/Pages" className="">Printer Setup</Link>
//             <Link href="../customsoftware/Pages" className="">Scanner Setup</Link>
//             <Link href="../customsoftware/Pages" className="">Support Home</Link>
//             <Link href="../customsoftware/Pages" className="">Ink Cartridges Issue</Link>
//             <Link href="../customsoftware/Pages" className="">Diagnostics</Link>
//             <Link href="../customsoftware/Pages" className="">Business Support</Link>
//         </div>
//         </div>
//       </nav>
//     <div className="my-4 w-full mt-[3px]"></div>
//     </div>
//   );
// };



"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Importing menu icon

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[30px] w-full">
      {/* Navigation Bar */}
      <nav className="bg-[#1C8DCEED] text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center h-12 items-center space-x-6 xl:space-x-16 2xl:ml-[-285px] xl:ml-[67px]">
            <Link href="../customsoftware/Pages">Printer Offline</Link>
            <Link href="../customsoftware/Pages">Printer Setup</Link>
            <Link href="../customsoftware/Pages">Scanner Setup</Link>
            <Link href="../customsoftware/Pages">Support Home</Link>
            <Link href="../customsoftware/Pages">Ink Cartridges Issue</Link>
            <Link href="../customsoftware/Pages">Diagnostics</Link>
            <Link href="../customsoftware/Pages">Business Support</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between items-center h-12">
            <button 
              className="text-white text-2xl" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMenu />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#1C8DCEED] flex flex-col items-center space-y-3 py-3">
            <Link href="../customsoftware/Pages" className="block">Printer Offline</Link>
            <Link href="../customsoftware/Pages" className="block">Printer Setup</Link>
            <Link href="../customsoftware/Pages" className="block">Scanner Setup</Link>
            <Link href="../customsoftware/Pages" className="block">Support Home</Link>
            <Link href="../customsoftware/Pages" className="block">Ink Cartridges Issue</Link>
            <Link href="../customsoftware/Pages" className="block">Diagnostics</Link>
            <Link href="../customsoftware/Pages" className="block">Business Support</Link>
          </div>
        )}
      </nav>

      <div className="my-4 w-full mt-[3px]"></div>
    </div>
  );
}
