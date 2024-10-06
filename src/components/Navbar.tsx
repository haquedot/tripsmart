'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';
import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { RiMenu3Fill } from 'react-icons/ri';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-white px-4 py-2.5 fixed w-full z-20 top-0 left-0 transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''
                }`}
        >
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap">
                        <Logo />
                    </span>
                </Link>
                <div className="flex gap-2 items-center lg:order-2">
                    <Button variant={'outline'} onClick={() => router.push('/login')}>Login</Button>
                    <Button onClick={() => router.push('/signup')}>
                        Sign up
                    </Button>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 ml-1 text-sm text-black lg:hidden"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    <RiMenu3Fill className='font-bold'/>
                </button>

                {/* Sidebar Menu for Mobile */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out lg:hidden`}
                >
                    <div className="flex items-center justify-between p-4">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-md font-semibold whitespace-nowrap">
                                TripSmart
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <IoMdClose />
                        </button>
                    </div>
                    <ul className="flex flex-col mt-4 font-medium">
                        <li className="py-2 px-4 hover:bg-gray-100">
                            <Link href="/">
                                <span className="text-gray-700">Home</span>
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100">
                            <Link href="/about">
                                <span className="text-gray-700">About</span>
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100">
                            <Link href="/features">
                                <span className="text-gray-700">Features</span>
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100">
                            <Link href="/contact">
                                <span className="text-gray-700">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* End Sidebar */}

                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link href="/">
                                <span className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/features">
                                <span className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                    Features
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
