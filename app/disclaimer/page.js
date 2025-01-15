import React from 'react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className={`star w-2 h-2 ${Math.random() > 0.5 ? 'left-0' : 'right-0'}`}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${Math.random() * 1 + 1.5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-20 z-10 relative 2xl:mt-[221px]">
        <h1 className="mb-6 text-[32px] font-bold text-purple-500 cursor-pointer">Disclaimer</h1>
        <p className="text-gray-700 mb-6">
          If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at <a href="mailto:support@micro-sonic.com" className="text-blue-600">support@micro-sonic.com</a>.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-[32px] font-bold text-purple-500 cursor-pointer">Disclaimer for Micro-Sonic</h2>
        <p className="text-gray-700 mb-6">
          The information provided by Micro Sonic Work on our website and through our services is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to our website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        </p>
        <p className="text-gray-700 mb-6">
          Through our website, you may be able to link to other websites that are not under the control of Micro Sonic Work. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>
        <p className="text-gray-700 mb-6">
          Micro Sonic Work reserves the right to modify or update this disclaimer at any time. The most current version will be available on our website, and it is your responsibility to review it periodically.
        </p>
      </div>
    </div>
  );
}
