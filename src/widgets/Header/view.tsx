"use client";
import { navItem } from "@utils/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Prevent scrolling when the drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="px-[5vw] absolute top-0 flex flex-col items-center justify-center h-[10vh] lg:h-[13vh] md:h-[12vh] w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex-[1] flex">
            <span className="text-primary-600 font-bold text-2xl">NCIPETC</span>
          </div>
          <div className="flex-1 flex md:flex lg:hidden items-center justify-end">
            <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <RxDashboard className="text-2xl text-primary-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-[80%] sm:w-[60%] bg-white shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-gray-700">Menu</span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navItem?.map((item, index) => (
              <Link
                key={index}
                href={item?.link || "#"}
                className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                {item?.title}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link href={"https://forms.gle/VWgA4t2jr1esEkLcA"} target="_blank">
              <button className="w-full px-4 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
                Submit your paper now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
