"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
//   FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="py-12 bg-indigo-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="block">
            <Logo />

            <p className="text-gray-500 mt-4">
              We always make our customer happy by providing curated information
              of trip.
            </p>

            <div className="flex gap-3 mt-4">
              <Link
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-neutral-100 hover:bg-indigo-600"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-neutral-100 hover:bg-indigo-600"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-neutral-100 hover:bg-indigo-600"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="bg-indigo-500 p-2 rounded-full text-neutral-100 hover:bg-indigo-600"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <div className="block">
            <h3 className="text-lg font-bold text-neutral-800">Quick Links</h3>

            <ul className="mt-4">
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="/about"
                >
                  <FaArrowRightLong className="text-indigo-500" /> About
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="/features"
                >
                  <FaArrowRightLong className="text-indigo-500" /> Features
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="/contact"
                >
                  <FaArrowRightLong className="text-indigo-500" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h3 className="text-lg font-bold text-neutral-800">Get in Touch</h3>

            <ul className="mt-4">
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="#"
                >
                  <FaMapMarkedAlt className="text-2xl text-indigo-500" /> 123,
                  Main Road, City
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="mailto:haquedot@gmail.com"
                >
                  <IoIosMail className="text-2xl text-indigo-500" />
                  haquedot@gmail.com
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="tel:+8801712345678"
                >
                  <FaPhoneVolume className="text-2xl text-indigo-500" />{" "}
                  +8801712345678
                </Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h3 className="text-lg font-bold text-neutral-800">
              Privacy & Terms
            </h3>

            <ul className="mt-4">
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="#"
                >
                  <FaArrowRightLong className="text-indigo-500" /> Privacy
                  Policy
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="#"
                >
                  <FaArrowRightLong className="text-indigo-500" /> Terms &
                  Conditions
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="flex items-center gap-2 text-neutral-700 hover:text-neutral-800"
                  href="#"
                >
                  <FaArrowRightLong className="text-indigo-500" /> Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-200 mt-8 pt-4 text-center text-gray-500 flex md:justify-between">
          <p>&copy; 2024 All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <span className="text-pink-500">Tripsmart</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
