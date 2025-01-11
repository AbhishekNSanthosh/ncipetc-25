"use client";
import { navItem } from "@utils/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MdInsertLink } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

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

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

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
          <div className="flex-2 hidden lg:flex md:flex items-center justify-end gap-[2vw]">
            {navItem?.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item?.link || "#"}
                  className="font-medium capitalize text-gray-700 flex flex-row items-center justify-center relative group-hover:text-[#1F75FE] transition-colors duration-300"
                >
                  {item?.title}
                  {item?.dropdown && (
                    <RiArrowDropDownLine className="text-3xl mt-[2px] ml-[-5px]" />
                  )}
                </Link>

                {item?.dropdown && activeDropdown === index && (
                  <div className="absolute pt-[2vh] left-0 ">
                    <div className="text-white bg-primary-600 bg-opacity-90 shadow-lg rounded-lg p-2 w-[20vw] transition-all duration-300 opacity-100 z-50">
                      {item?.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem?.url}
                          className="block px-4 py-2 rounded-md hover:bg-[#f1f5f9] hover:text-[#1F75FE] transition-all duration-200"
                        >
                          {subItem?.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 hidden md:flex lg:flex items-center justify-end">
            <Link href={"https://forms.gle/VWgA4t2jr1esEkLcA"} target="_blank">
              <button className="px-3 py-2 rounded-full border-2 text-primary-600  font-semibold border-primary-600">
                Submit your paper now
              </button>
            </Link>
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
              <div key={index} className="flex flex-col">
                {!item?.dropdown ? (
                  <Link
                    href={item?.link}
                    className="capitalize flex items-center gap-2"
                  >
                    <MdInsertLink />
                    {item?.title}
                  </Link>
                ) : (
                  <div
                    className="capitalize flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <MdInsertLink />
                    {item?.title}
                    <button
                      className="ml-2"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent parent click handler
                        toggleDropdown(index);
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
                {item?.dropdown && activeDropdown === index && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.url}
                        className="capitalize flex items-center gap-2"
                      >
                        <MdInsertLink />
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8">
            <Link href={"https://forms.gle/VWgA4t2jr1esEkLcA"} target="_blank">
              <button className="w-full px-4 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
                Submit your paper now
              </button>
            </Link>
          </div>
          <div className="py-2 flex flex-col lg:flex-row w-full items-center justify-center absolute bottom-3 self-center">
            <div className="flex-1 flex items-center justify-between font-semibold text-sm text-gray-700">
              <span className="">2025 © NCIPETC-25</span>
            </div>
            <div className="flex-1 flex items-center lg:justify-end text-sm font-semibold text-gray-700">
              All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
