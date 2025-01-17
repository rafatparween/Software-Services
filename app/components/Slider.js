"use client";
import React, { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      leftImage: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Production/18th%20July%202024/IN_VC_ZIA-fashion_Marquee_01_Left ",
      rightImage: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Production/18th%20July%202024/IN_VC_ZIA-fashion_Marquee_02_Right",
      title: "My Name, My Pride",
      subtitle: "100 Visiting Cards at Rs 200",
    },
    {
      leftImage: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Stamps/Self%20Inking%C2%A0-%2064x44%20mm/IN_Self-Inking-Stamps-64x44mm_Overview",
      rightImage: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/marketing%20Materials/Keny%20File%20Ring%20Binder%20File/IN_Keny-File-Ring-Binder-File_Overview",
      title: "Another Title",
      subtitle: "Another Subtitle",
    },
    {
      leftImage: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/vc/IN_PremiumPlusVisitingcards_Product_Page_tile",
      rightImage: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/Velvet%20Touch%20Visiting%20Cards/IN_Velvet-Touch-Visiting-Cards_Overview",
      title: "Third Title",
      subtitle: "Third Subtitle",
    },
  ];


  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };


  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-[580px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full bg-[#f3ead9] flex flex-row justify-between items-center py-10 px-20">
            <div className="relative w-[30%] h-[400px]">
              <img
                src={slide.leftImage}
                alt="Left Slide"
                className="w-full h-full object-cover rounded-lg mt-[41px]"
              />
            </div>
            <div className="text-center flex-1 max-w-[676px]">
              <h1 className="font-bold text-5xl mb-4">{slide.title}</h1>
              <p className="text-lg mb-6">{slide.subtitle}</p>
              <button className="bg-black text-white px-6 py-3 rounded-full">
                Shop Now
              </button>
            </div>
            <div className="relative w-[30%] h-[400px]">
              <img
                src={slide.rightImage}
                alt="Right Slide"
                className="w-full h-full object-cover rounded-lg mt-[41px]"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
