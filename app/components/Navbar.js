
"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import AboutUs from "./AboutUs";
import ServicesSection from "./Services";
import FAQ from "./Faq";
import Footer from "./Footer";

const TypewriterEffect = () => {
  const texts = [
    "MLM Software",
    "AI Development",
    "AEM Development",
    "IoT Development",
    "Website & Apps",
  ];

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopIndex % texts.length];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setSpeed(75);

        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setSpeed(150);

        if (charIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, charIndex, loopIndex, speed, texts]);

  return (
    <span className="text-purple-600">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default function Home() {
  // State for toggling Services submenu
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Toggle function for the Services submenu
  const toggleServicesMenu = () => {
    setIsServicesOpen((prev) => !prev); // Toggle the submenu open/close
  };

  return (
    <div className="max-h-screen">
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white">
        <nav className="flex justify-between items-center p-8 bg-transparent">
          <img src="sonic.png" className="h-[123px] w-[181px] object-cover" />
          <div className="text-[32px] font-bold text-purple-300 cursor-pointer 2xl:ml-[-337px] xl:ml-[-159px]">
            Micro-Sonic
          </div>
          <div className="flex space-x-6 text-white">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-purple-300 text-[24px] font-medium cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about-us"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-purple-300 text-[24px] font-medium cursor-pointer"
            >
              About Us
            </ScrollLink>

            {/* Services Dropdown */}
            <div className="relative">
              {/* Main Services Button */}
              <button
                onClick={toggleServicesMenu} // When clicked, toggle the submenu visibility
                className="text-[24px] hover:text-purple-300 cursor-pointer focus:outline-none"
              >
                Services
              </button>

              {/* Submenu */}
              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 shadow-lg rounded-md z-20">
                  <ul className="py-2 w-64">
                    {/* <li className="text-[18px] text-purple-900 ">Services</li> */}
                    <li className="hover:bg-gray-100 px-4 py-2 hover:text-purple-900 hover:font-bold">
                      <a href="/uiux" className="block text-lg">
                        UI/UX
                      </a>
                    </li>
                    
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <a href="/mobile-app" className="block text-lg hover:text-blue-900">
                        Mobile App Development
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <a href="/webdevelopment" className="block text-lg hover:text-blue-900">
                        Web Development
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <a href="/SoftwareServices" className="block text-lg hover:text-blue-900">
                        Software Services
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                      <a href="/digital-marketing" className="block text-lg hover:text-blue-900">
                        Digital Marketing
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-purple-300 text-[24px] font-medium cursor-pointer"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact-us"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-purple-300 text-[24px] font-medium cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          </div>
          <a
            href="tel:+123456789"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full"
          >
            +91 9777650974
          </a>
        </nav>
        <div className="max-w-7xl mx-auto flex items-center mt-16 px-6 mt-[-22px]">
          <div id="home" className="w-1/2">
            <h1 className="text-[30px] font-semibold text-purple-300">Creative Digital Agency</h1>
            <h2 className="text-6xl font-bold mt-4">
              We build creative
              <br />
              <TypewriterEffect />
            </h2>
            <p className="mt-4 text-gray-200 text-[18px]">
              Innovative solutions for tomorrow’s challenges. Extraordinary claims require extraordinary creativity.
            </p>
            <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
              Get Started
            </button>
          </div>

          <div className="w-1/2 flex justify-end">
            <div className="relative rounded-full overflow-hidden h-[500px] w-[500px] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Programming on Laptop"
                className="h-full w-full object-cover animate-float"
              />
            </div>
          </div>
        </div>

        <section id="about-us" className="min-h-screen bg-gradient-to-r from-purple-700 to-gray-900 text-white py-20 ">
          <AboutUs />
        </section>

        <section
          id="services"
          className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-800 to-purple-900 text-white py-20"
        >
          <ServicesSection />
        </section>

        <section id="testimonials" className="min-h-screen bg-gradient-to-t from-gray-900 to-purple-900 text-white py-20">
          <FAQ />
        </section>

        <section id="contact-us" className="h-[450px] bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <Footer />
        </section>
      </div>
    </div>
  );
}