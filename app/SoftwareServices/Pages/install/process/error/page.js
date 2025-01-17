// // pages/error.js
// export default function ErrorPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//         <div>
//             {/* <img src="https://www.qwebcare.com/help/images/hp-logo.gif"></img> */}
//         </div>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '600px' }}>
//         {/* Blue Triangle */}
//         <div className="absolute bottom-0 left-0 w-full h-24 bg-blue-600" 
//              style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>



//         {/* Content */}
//         <div className="p-10">
//           <h1 className="text-2xl font-semibold mb-4">Installing</h1>
//           <p className="text-gray-500 mb-6">Fatal error occurred during installation..</p>
//           <div className="flex justify-center mb-6">
//             <img
//               src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/printer_error.png" // Replace this with the actual path to the printer error image
//               alt="Printer Error"
//               width={150}
//               height={150}
//             />
//           </div>
//           <p className="text-gray-600 mb-4">
//           A problem occurred while preparing to install software to your system.please restart you computer,and run this installer again.if the problem persists,
       
//           </p>
//           <p className="text-gray-600 mb-4">
//             Please don't try to setup again 
//           </p>
//           <p className="font-semibold">Please Contact HP Support for</p>
//           <a href="#" className="text-blue-600 font-bold text-xl mt-4 inline-block">Through Chat</a>
//         </div>

//         {/* Footer */}
//         <div className="bg-white p-6 flex justify-center items-center">
//           <img
//             src="https://www.qwebcare.com/help/images/hp-logo.gif" // Replace this with the actual path to the HP logo
//             alt="HP Logo"
//             width={50}
//             height={50}
//           />
//           <span className="ml-4 text-blue-600 text-lg">24x7 HP Assistance</span>
//         </div>
//       </div>
//     </div>
//   );
// }




// pages/error.js
// 


"use client"
import Image from "next/image";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">

      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '529px' }}>
       


        {/* Content */}
        <div className="">
          <div className="bg-gray-100 px-6 py-4 flex justify-between items-center h-[79px]">
            <div className="text-left">
              <h1 className="text-lg font-semibold">Installing</h1>
              
            </div>
            <Image
              src="/circular.png"
              height={30}
              width={60}
              alt="HP Logo"
            />
          </div>
          <div className="flex justify-center mb-6 mt-[40px] mb-[40px]">
            <img
              src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/printer_error.png" // Replace this with the actual path to the printer error image
              alt="Printer Error"
              width={150}
              height={150}
            />
          </div>
         
          <p className="font-bold text-center text-xl mb-2">Need help setting up or installing your printer? Our dedicated team is here to make it easy for you! </p>
          <p className="text-center text-[#1C8DCEED] font-bold text-xl mb-[96px]">Simply connect with us through our Live Chat for instant assistance.</p>
        </div>
        <div className="relative mt-8">
          
          <div
            className="absolute bottom-0 left-0 w-full h-24 bg-[#1C8DCEED]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
          ></div>

          {/* Text Content */}
          <div className="relative flex items-center justify-start text-white p-4">
            <span className="text-lg font-semibold">24x7 Printer Assistance</span>
          </div>
        </div>


      </div>
    </div>
  );
}


