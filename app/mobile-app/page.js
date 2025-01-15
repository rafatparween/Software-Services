import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>UI/UX Design Services</title>
                <meta name="description" content="UI/UX Design & Development Services" />
            </Head>

            <div className="h-[550px] bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Left Section: Text */}
                    <div>
                        <h1 className="w-[752px] text-4xl md:text-5xl font-bold text-white leading-tight">
                        Start your success journey with a   <br />
                        Mobile app Development 
                        </h1>
                        <button className="mt-6 inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition">
                            <span className="flex items-center justify-center w-5 h-5 bg-white text-purple-600 rounded-full mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </span>
                            Contact Us
                        </button>
                    </div>

                    {/* Right Section: Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/mobileee.png"
                            width={400}
                            height={400}
                            alt="UI/UX Illustration"
                            className="max-w-md lg:max-w-lg object-cover 2xl:mr-[-426px] xl:mr-[-180px]"
                        />
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50">
                {/* Header Section */}
                <div className="text-center py-16 px-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                    Enhance User Experience Through Tailored{" "}
                        <span className="text-blue-500">Development of Mobile Applications</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                    We provide cutting-edge mobile app development services designed for the contemporary landscape, surpassing both market norms and industry standards.
                    </p>
                </div>

                {/* Services Section */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service 1 */}
                    <div className="bg-blue-50 border border-blue-100 shadow-md rounded-lg p-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/consulting.png"
                                height={54}
                                width={54}
                                alt="Consulting Services"
                                className="object-cover"
                            />
                            <h3 className="text-lg font-semibold">Consulting Services</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Our team offers expert consulting services, providing guidance at
                            every step of the design process. Whether it's mobile app, UI
                            design or web design, we assist you with the best expertise
                            available.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-blue-50 border border-blue-100 shadow-md rounded-lg p-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/prototyping.png"
                                height={54}
                                width={54}
                                alt="Prototyping"
                                className="w-12 h-12"
                            />
                            <h3 className="text-lg font-semibold">Prototyping</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            We develop prototypes to ensure usability, carefully optimizing
                            page layouts and strategically arranging elements for a
                            user-friendly and responsive digital experience.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-blue-50 border border-blue-100 shadow-md rounded-lg p-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/uidesign.png"
                                height={54}
                                width={54}
                                alt="UI Design Services"
                                className="w-12 h-12"
                            />
                            <h3 className="text-lg font-semibold">UI Design Services</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            At Beta Byte, we specialize in UI design, ensuring that the user
                            interfaces of your applications are crafted for an efficient and
                            delightful user experience.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-blue-50 border border-blue-100 shadow-md rounded-lg p-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/mobile.png"
                                height={54}
                                width={54}
                                alt="Mobile App Design"
                                className="w-12 h-12"
                            />
                            <h3 className="text-lg font-semibold">Mobile App Design</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Our expertise extends to mobile UI/UX design for both iOS and
                            Android platforms, ensuring that your applications deliver
                            exceptional usability to retain users.
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-blue-50 border border-blue-100 shadow-md rounded-lg p-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/wireframing.png"
                                height={54}
                                width={54}
                                alt="Wireframing"
                                className="w-12 h-12"
                            />
                            <h3 className="text-lg font-semibold">Wireframing</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Wireframing is an integral aspect of our UI/UX design and
                            development services, thoroughly outlining the structure and
                            content of your applications. It acts as a clear blueprint,
                            guiding the development process with precision.
                        </p>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-blue-50 border border-blue-100 shadow-md rounded-lg p-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/webdesign.png"
                                height={54}
                                width={54}
                                alt="Web Design"
                                className="w-12 h-12"
                            />
                            <h3 className="text-lg font-semibold">Web Design</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                            With our responsive web design services, we reshape your online
                            presence, ensuring that your web UI/UX design is visually
                            stunning, highly functional, and user-friendly.
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center text-white">
        {/* Title Section */}
        <div className="bg-gray-100 py-10 mt-[100px] mb-[100px]">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          We Follow a Dynamic Approach in App Development Methodology
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Our technical approach distinguishes us; we leverage cutting-edge programming languages to ensure your app stands out with exceptional functionality and performance.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="space-y-6 ml-[134px] mt-[-91px]">
            {[
              'Data Protection',
              'Agile Development',
              'On-Time Delivery',
              'Quality First Approach',
              '24/7 Technical Support',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 flex justify-center items-center bg-blue-200 text-blue-600 font-semibold rounded-full">
                  {index + 1}
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <Image
              src="/quality.png" // Add your image to the public folder or replace the path
              alt="Quality First Approach"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
            <p className="text-gray-700 mt-4">
              Every line of code is meticulously crafted and thoroughly tested, ensuring a seamless and reliable experience for our users.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
    );
}
