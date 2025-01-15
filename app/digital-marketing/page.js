import Head from "next/head";
import Image from "next/image";
import Context from "../components/Context";
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
                            Digital Marketing Solutions for<br />
                            Tangible Results
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
                            src="/digital-marketinggg.png"
                            width={465}
                            height={308}
                            alt="UI/UX Illustration"
                            className="w-full max-w-md lg:max-w-lg object-cover 2xl:mr-[-426px] xl:mr-[-180px]"
                        />
                    </div>
                </div>
            </div>


            <div className="h-[742px] bg-gray-50">
                {/* Header Section */}
                <div className="text-center py-16 px-6">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Our Seamless  Digital Marketing and{" "}
                        <span className="text-blue-500">Development Services</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Stay seamlessly connected with a dedicated account manager to stay abreast of updates in strategy and implementation.
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
            <div className="bg-blue-900 ">
                <Context/>
                

            </div>

            <div className="bg-white py-16 px-8">
                <div className="flex items-center justify-between 2xl:ml-[115px]">
                    {/* Left Text Section */}
                    <div className="w-1/2 space-y-6">
                        <h1 className="text-[43px] font-bold text-gray-900">
                            Social Media Marketing <br />
                            <span className="text-blue-900">Boost click-through rates with optimized meta tags</span>
                        </h1>

                        {/* <h2 className="text-[40px] text-gray-800">How?</h2> */}

                        <p className="text-lg text-[20px] text-gray-700">
                            Enhance your website's click-through rates by optimizing meta tags, images, and content for better performance.
                        </p>

                        {/* Button */}
                        <p className="text-lg text-[20px] text-gray-700">
                            Engage digital marketing outsourcing experts to craft SEO campaigns, targeting business-relevant branded and non-branded keywords.                            </p>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-1/2 flex justify-center">
                        <Image
                            src="/smm.png" // Use a placeholder image or the actual image path here
                            alt="Crafting Image"
                            width={598}
                            height={479}
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center text-white">
                <div className="flex justify-between items-center px-6 py-8">
                    {/* Left Image Section */}

                    <div className="w-1/2">
                        <Image
                            src="/crafting.png" // Use a placeholder image or the actual image path here
                            alt="Pocket Empty"
                            width={598}
                            height={479}
                            className="object-cover "
                        />
                    </div>

                    {/* Right Text Section */}
                    <div className="w-1/2 flex flex-col space-y-6">
                        <h1 className="text-[43px] text-white">
                            Crafting Experiences That Deliver Results <br />
                            <span className="text-orange-500 text-white">Communicate your brand's message </span>
                        </h1>

                        <h2 className="text-[40px] text-white ">How?</h2>

                        <p className="text-lg w-[750px] text-[20px] text-white">
                            Convey your brand's message and boost visibility through seamless UI/UX designs created by our expert in-house design studio team.  </p>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-[30px] w-max">
                            Empower your customers with a seamless experience through mobile-first websites.
                        </button>
                    </div>
                </div>
                <div className="bg-white py-16 px-8">
                    <div className="flex items-center justify-between 2xl:ml-[115px]">
                        {/* Left Text Section */}
                        <div className="w-1/2 space-y-6">
                            <h1 className="text-[43px] font-bold text-gray-900">
                                Search Engine Optimization <br />
                                <span className="text-blue-900">Attract visitors organically to your website through the creation.</span>
                            </h1>

                            {/* <h2 className="text-[40px] text-gray-800">How?</h2> */}

                            <p className="text-lg text-[20px] text-gray-700">
                                Convey your brand's message and boost visibility through seamless UI/UX designs created by our expert in-house design studio team.
                            </p>

                            {/* Button */}
                            <p className="text-lg text-[20px] text-gray-700">
                                Engage digital marketing outsourcing experts to craft SEO campaigns, targeting business-relevant branded and non-branded keywords.
                            </p>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-1/2 flex justify-center">
                            <Image
                                src="/seo.png" // Use a placeholder image or the actual image path here
                                alt="Crafting Image"
                                width={598}
                                height={479}
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </>
    );
}
