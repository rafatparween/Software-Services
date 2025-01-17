// components/Header.js

import Image from 'next/image';

const NavbarSection = () => {
  return (
    <header className="bg-white py-2 h-[72px] ">
      <div className="container mx-auto flex items-center 2xl:ml-[179px] xl:ml-[179px]">
        {/* HP Logo */}
        <div className="flex items-center mr-4 xl:ml-[-60px] 2xl:ml-[2px]">
          <Image
            src="/printer.webp" // Replace with the correct path to your logo
            alt="HP Logo"
            width={72}
            height={65}
          />
        </div>
        {/* Product Links */}
        <nav className="flex space-x-8 text-gray-600 text-[16px] 2xl:ml-[13px] xl:ml-[13px]">
          <a href="#" className="hover:text-[#007DBA]">OfficeJet</a>
          <a href="#" className="hover:text-[#007DBA]">DeskJet</a>
          <a href="#" className="hover:text-[#007DBA]">ENVY</a>
          <a href="#" className="hover:text-[#007DBA]">LaserJet</a>
        </nav>
      </div>
    </header>
  );
};

export default NavbarSection;
