import { navItem } from "@utils/constants";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p-[2vw] text-white">
      <div className="bg-primary-600 p-[2vw] w-full rounded-[10px] flex flex-col items-start justify-between space-y-10">
        <div className="flex w-full flex-row items-start justify-between space-x-7">
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
          <div className="flex-1 flex flex-col space-y-3">
            <div className="">
              <span className="text-base font-medium text-gray-200">
                Usefull Links
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {navItem?.map((item, index) => (
                <span className="capitalize">{item?.title}</span>
              ))}
            </div>
          </div>
          <div className="flex-[3] flex items-center justify-center">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin"
              width="100%"
              height="280"
              loading="lazy"
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
          <div className="flex-[1.7] flex flex-col space-y-3 items-start justify-center pl-4">
            <div className="">
              <span className="text-base font-medium text-gray-200">
                Contact Us
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-row space-x-3">
                  <div className="border border-white w-auto p-2 rounded-full">
                    <MdOutlineMail className="text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="">Email:</span>
                    <span className="">conferencecse@carmelcet.in</span>
                  </div>
                </div>
                <div className="flex flex-row space-x-3">
                  <div className="border border-white w-auto p-2 rounded-full">
                    <FaPhone className="text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="">Phone:</span>
                    <span className="">+91 9995267896, +91 8589059517</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
        <div className="py-2 flex flex-row w-full">
            <div className="flex-1 flex items-center justify-between">
                <span className="">2024 © NCIPETC-25</span>
            </div>
            <div className="flex-1 flex items-center justify-end">All rights reserved</div>
        </div>
      </div>
    </div>
  );
}
