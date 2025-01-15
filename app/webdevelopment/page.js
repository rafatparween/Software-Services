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
                            Your Web Application <br />
                            Development Company
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
                            src="/website-development.png"
                            width={432}
                            height={299}
                            alt="UI/UX Illustration"
                            className="w-full max-w-md lg:max-w-lg object-cover 2xl:mr-[-426px] xl:mr-[-180px]"
                        />
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50">
                {/* Header Section */}
                <div className="text-center py-16 px-6">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Our Comprehensive Web Application{" "}
                        <span className="text-blue-500">Development Services Include</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        We adopt a personalized approach in crafting web applications that seamlessly align with your business objectives. From conceptualization to deployment, we guarantee that your digital solution is as unique as your vision.

                        Custom Web App DevelopmentCustom Web App Development Icon
                        Custom Web
                        Application Development
                        Custom Web Application Development
                        We utilize a dynamic approach to deliver tailored web application development services. Our process involves seamlessly translating conceptual ideas into carefully crafted, fully customized web solutions, ultimately enhancing user engagement to exceptional levels.

                        Progressive Web App Developmentprogressive web app development Icon
                        progressive web app
                        development
                        Progressive web app development
                        Partner with our progressive web app development company for cutting-edge, cross-platform solutions that focus on exceptional user experiences

                        Web App DevelopmentWeb App Development Icon
                        Web App Development
                        Web App Development
                        Unlock the benefits of Software as a Service (SaaS) with our dedicated web app development company, providing long-term scalability and accessibility.


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
                            <h3 className="text-lg font-semibold">Cost-Effective Process
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                        At Micro sonic, we specialize in web app development services crafted for cost-effectiveness, ensuring the efficient execution of your project without compromising on quality.
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
                            <h3 className="text-lg font-semibold">All Under One Roof</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                        As a one-stop web application development company, we provide a comprehensive range of services, covering the entire journey from concept to deployment—all conveniently available under one roof.
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
                            <h3 className="text-lg font-semibold">24/7 Help Desk</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                        With a dedication to support, Beta Byte ensures you have assistance whenever needed, ensuring a seamless development experience.                        </p>
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
                            <h3 className="text-lg font-semibold">New Technology Integration</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                        As a leading web application development company, Beta Byte remains at the forefront of technology, seamlessly integrating new advancements into your web apps to keep you ahead of the curve.
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
                            <h3 className="text-lg font-semibold">Post-Deployment Services</h3>
                        </div>
                        <p className="mt-4 text-gray-600">
                        Going beyond the launch, our web development services ensure the continuous success of your web application through regular updates, maintenance, and dedicated support.
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
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
                    Top Skills for <span className="text-sky-400">Web Application Development</span>
                </h2>

                {/* Icon Section */}
                <div className="flex gap-8">
                    {/* Adobe XD */}
                    <div className="flex items-center justify-center w-[103px] h-[103px] bg-pink-700 rounded-full">
                        <span className="text-xl font-bold">Xd</span>
                    </div>

                    {/* Photoshop */}
                    <div className="flex items-center justify-center w-[103px] h-[103px] bg-blue-700 rounded-full">
                        <span className="text-xl font-bold">Ps</span>
                    </div>

                    {/* Figma */}
                    <div className="flex items-center justify-center rounded-full">
                        <Image
                            src="/figma.png"
                            height={176}
                            width={176}
                            alt="Figma Icon"
                            className=""
                        />
                    </div>

                    {/* Illustrator */}
                    <div className="flex items-center justify-center w-[103px] h-[103px] bg-orange-700 rounded-full">
                        <span className="text-xl font-bold">Ai</span>
                    </div>

                    {/* After Effects */}
                    <div className="flex items-center justify-center w-[103px] h-[103px] bg-purple-800 rounded-full">
                        <span className="text-xl font-bold">Ae</span>
                    </div>
                </div>
            </div>
            <div className="text-center py-16">
                {/* Heading */}
                <h2 className="text-3xl font-bold">
                    Approach <span className="text-blue-500">We Follow</span>
                </h2>
                <p className="text-gray-600 mt-2">
                    Our Designs are an outcome of in-depth research & Market Analysis For
                    Achieving your Business Goals
                </p>

                {/* Steps */}
                <div className="flex justify-center items-center mt-12 space-x-16 relative">
                    {/* Dotted Line */}
                    <div className="absolute w-full max-w-[900px] h-0.5 dotted-line"></div>

                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="w-[128px] h-[128px] bg-blue-400 rounded-full flex justify-center items-center mx-auto">
                            <Image
                                src="/research.png"
                                height={77}
                                width={71}
                                alt="Research"
                                className="w-[71px] h-[77px]"
                            />
                        </div>
                        <p className="mt-4 text-lg font-bold">Research</p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="w-[128px] h-[128px] bg-blue-400 rounded-full flex justify-center items-center mx-auto">
                            <Image
                                src="/idea.png"
                                height={77}
                                width={71}
                                alt="Idea"
                                className="w-[71px] h-[77px]"
                            />
                        </div>
                        <p className="mt-4 text-lg font-bold">Idea</p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="w-[128px] h-[128px] bg-blue-400 rounded-full flex justify-center items-center mx-auto">
                            <Image
                                src="/goal.png"
                                height={77}
                                width={71}
                                alt="Goal"
                                className="w-[77] h-[71]"
                            />
                        </div>
                        <p className="mt-4 text-lg font-bold">Goal</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
