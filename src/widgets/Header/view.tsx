"use client";
import { navItem } from "@utils/constants";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // State can be a number or null

  return (
    <div className="px-[5vw] absolute top-0 flex flex-row items-center justify-center h-[13vh] w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex-[1]">
          <span className="text-primary-600 font-bold text-2xl">NCIPETC-25</span>
        </div>
          <div className="flex-2 flex items-center justify-end gap-[2vw]">
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
        <div className="flex-1 flex items-center justify-end">
            <button className="px-3 py-2 rounded-full border-2 text-primary-600  font-semibold border-primary-600">Submit your paper now
            </button>
        </div>
      </div>
    </div>
  );
}
