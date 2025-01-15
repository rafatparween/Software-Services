'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 h-[400px] pt-[14px]">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <div className="font-bold text-center">
                        <h1 className="text-[32px] mt-[89px] font-bold text-purple-300 cursor-pointer">Micro-Sonic</h1>
                    </div>
                </div>

                <div>
                    <p>Let us help</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'about', path: '/about' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Disclaimer', path: '/disclaimer' },
                            { name: 'Privacy Policy', path: '/privacy' }
                        ].map(({ name, path }) => (
                            <Link
                                key={name}
                                href={path}
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex flex-col text-start mb-4 md:mb-0 text-[18px]">
                        {[
                            { name: 'Terms and Conditions', path: '/term' },
                            { name: 'Privacy Policy', path: '/privacy' },
                            { name: 'License Agreement', path: '/license-agreement' },
                            { name: 'Copyright Information', path: '/copyright-information' },
                            { name: 'Cookies Policy', path: '/cookies-policy' }
                        ].map(({ name, path }) => (
                            <Link
                                key={name}
                                href={path}
                                className="block md:inline-block py-2 hover:text-gray-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className='text-[22px] text-[32px] font-bold text-purple-300 cursor-pointer '>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        {[
                            { icon: FaFacebook, bgColor: 'bg-blue-600 hover:bg-gradient-to-r hover:bg-gradient-to-br from-purple-800 via-blue-800', link: '#' },
                            { icon: FaInstagram, bgColor: 'bg-pink-600 hover:bg-gradient-to-r hover:bg-gradient-to-br from-purple-800 via-blue-800', link: '#' },
                            { icon: FaTwitter, bgColor: 'bg-blue-600 hover:bg-gradient-to-r hover:bg-gradient-to-br from-purple-800 via-blue-800', link: '#' },
                            { icon: FaYoutube, bgColor: 'bg-red-600 hover:bg-gradient-to-r hover:bg-gradient-to-br from-purple-800 via-blue-800', link: '#' }
                        ].map(({ icon: Icon, bgColor, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                className={`${bgColor} p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
                            >
                                <Icon size={26} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-10 mt-[-103px]">
                <span className="text-gray-400 leading-10">© Copyright, All Rights Reserved by micro-sonic</span>
            </div>
        </footer>
    );
};

export default Footer;


