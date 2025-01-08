import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LandingPageContent() {
  return (
    <div className="min-h-[100vh] pt-[100px] back px-[5vw] flex items-center justify-center">
      <div className="flex w-full flex-row items-center justify-center">
        <div className="flex-1 flex items-start justify-center flex-col space-y-3">
          <span className="text-[2.7vw] font-bold text-gray-800">
            <span className="text-primary-600">N</span>ational{" "}
            <span className="text-primary-600">C</span>onference on{" "}
            <span className="text-primary-600">I</span>nterdisciplinary{" "}
            <span className="text-primary-600">P</span>erspectives of{" "}
            <span className="text-primary-600">E</span>merging
            <span className="text-primary-600 ml-1">T</span>rends in{" "}
            <span className="text-primary-600">Computing</span>
          </span>
          <p className="">
            Empowering Minds, Bridging Horizons: Unveiling the Future at the
            National Conference on Interdisciplinary Perspectives of Emerging
            Trends in Computing
          </p>
          <div className="flex items-center justify-start space-x-6">
            <button className="bg-primary-600 rounded-[8px] outline-none border-none px-4 py-2 text-white">
              Submit your paper now
            </button>
            <div className="w-[2px] h-[3rem] bg-gray-300"></div>
            <Link href={'/about'}>
              <button className="flex flex-row items-center justify-center gap-2 text-primary-600">
                Learn more <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Image
            src={"/images/carmelInd.webp"}
            alt=""
            width={2000}
            height={2000}
            className="w-[32rem] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
