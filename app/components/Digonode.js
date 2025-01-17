// import Image from 'next/image';

// export default function Digonode() {
//   const items = [
//     { name: "Printer Setup", icon: "https://cdn-icons-png.freepik.com/512/8625/8625321.png" },
//     { name: "Printer Offline", icon: "https://static.vecteezy.com/system/resources/previews/024/198/139/non_2x/printer-icon-in-blue-color-vector.jpg" },
//     { name: "Wireless Printer", icon: "https://cdn-icons-png.freepik.com/512/6864/6864708.png" },
//     { name: "Color Or Black Ink Not Printing", icon: "https://www.shareicon.net/data/2015/05/04/33421_printer_256x256.png" },
//     { name: "Scanner", icon: "https://t3.ftcdn.net/jpg/04/81/66/56/360_F_481665663_aij2vpvwMjSS1LltlvcgmjzsOYSuHgbe.jpg" },
//     { name: "Fax Issues", icon: "https://pngimg.com/d/printer_PNG101582.png" },
    
//   ];

//   return (
//     <div className="bg-[#DDEBEB] h-[600px] flex flex-col items-center py-12 mt-[55px]">
//       <h1 className="text-4xl font-semibold text-gray-800 mb-10">Diagnose & Solve</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl">
//         {items.map((item, index) => (
//           <div key={index} className="bg-white shadow-lg p-6 flex flex-col items-center w-[340px] h-[171px] rounded-tr-[80px]">
//             <img src={item.icon} alt={item.name} width={80} height={80} />
//             <p className="mt-4 text-center text-lg font-semibold text-[#1C8DCE]">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';

export default function Digonode() {
  const items = [
    { name: "Printer Setup", icon: "https://cdn-icons-png.freepik.com/512/8625/8625321.png" },
    { name: "Printer Offline", icon: "https://static.vecteezy.com/system/resources/previews/024/198/139/non_2x/printer-icon-in-blue-color-vector.jpg" },
    { name: "Wireless Printer", icon: "https://cdn-icons-png.freepik.com/512/6864/6864708.png" },
    { name: "Color Or Black Ink Not Printing", icon: "https://www.shareicon.net/data/2015/05/04/33421_printer_256x256.png" },
    { name: "Scanner", icon: "https://t3.ftcdn.net/jpg/04/81/66/56/360_F_481665663_aij2vpvwMjSS1LltlvcgmjzsOYSuHgbe.jpg" },
    { name: "Fax Issues", icon: "https://pngimg.com/d/printer_PNG101582.png" },
  ];

  return (
    <div className="bg-[#F0F0F0] h-[600px] flex flex-col items-center py-12 ">
      <h1 className="text-4xl font-semibold text-gray-800 mb-10">Diagnose & Solve</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg p-6 flex flex-col items-center w-[340px] h-[171px] 
                       rounded-tr-[80px] transition-all duration-300 ease-in-out hover:rounded-none ">
            <img src={item.icon} alt={item.name} width={80} height={80} />
            <p className="mt-4 text-center text-lg font-semibold text-[#1C8DCE]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
