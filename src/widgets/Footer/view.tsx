"use client";
import { navItem } from "@utils/constants";
import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdInsertLink } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index: any) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <div className="p-[2vw] text-white">
      <div className="bg-primary-600 p-[5vw] lg:p-[2vw] w-full rounded-[10px] flex flex-col items-start justify-between space-y-5 lg:space-y-10">
        <div className="flex w-full flex-col lg:flex-row items-start justify-between lg:space-x-7 gap-5 lg:gap-0">
          <div className="flex-1 flex flex-col items-start justify-start space-y-4">
            <span className="text-2xl font-semibold text-white">
              NCIPETC-25
            </span>
            {/* <p className="text-white text-left">
            {" "}
            Empowering Minds, Bridging Horizons: Unveiling the Future at the
            National Conference on Interdisciplinary Perspectives of Emerging
            Trends in Computing
          </p> */}
          </div>
          <div className="flex-[1.2] flex flex-col space-y-3">
            <div className="">
              <span className="text-base font-medium text-gray-200">
                Usefull Links
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {navItem?.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div
                    className={`capitalize flex items-center gap-2 ${
                      item?.dropdown ? "cursor-pointer" : ""
                    }`}
                    onClick={() => item?.dropdown && toggleDropdown(index)}
                  >
                    <MdInsertLink />
                    {item?.title}
                    {item?.dropdown && (
                      <button
                        className="ml-2"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent parent click handler
                          toggleDropdown(index);
                        }}
                      >
                        +
                      </button>
                    )}
                  </div>
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
            </div>
          </div>
          <div className="flex-[2] flex items-center justify-center">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin"
              width="100%"
              height="280"
              loading="lazy"
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
          <div className="flex-[1.7] flex flex-col space-y-3 items-start justify-center lg:pl-4">
            <div className="">
              <span className="text-base font-medium text-gray-200">
                Contact Us
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-5">
              <div className="flex flex-row space-x-3">
  <div className="border border-white w-[50px] h-[50px] flex items-center justify-center rounded-full">
    <MdOutlineMail className="text-3xl" />
  </div>
  <div className="flex flex-col">
    <span className="font-semibold">Email:</span>
    <Link 
      href="mailto:conferencecse@carmelcet.in" 
      className="text-blue-500 hover:underline">
      conferencecse@carmelcet.in
    </Link>
  </div>
</div>

                <div className="flex flex-row space-x-3">
                  <div className="border border-white w-[50px] h-[50px] flex items-center justify-center rounded-full">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Phone:</span>
                    <div className="flex flex-col space-y-1">
                      <Link
                        href="tel:+919995267896"
                        className="text-blue-500 hover:underline"
                      >
                        +91 9995267896
                      </Link>
                      <Link
                        href="tel:+918589059517"
                        className="text-blue-500 hover:underline"
                      >
                        +91 8589059517
                      </Link>
                      <Link
                        href="tel:+919995152970"
                        className="text-blue-500 hover:underline"
                      >
                        +91 9995152970
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
        <div className="py-2 flex flex-col lg:flex-row w-full items-center justify-center">
          <div className="flex-1 flex items-center justify-between">
            <span className="">2025 © NCIPETC-25</span>
          </div>
          <div className="flex-1 flex items-center lg:justify-end">
            All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
