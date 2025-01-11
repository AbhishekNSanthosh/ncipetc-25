import Titlebar from "@components/Titlebar";
import Image from "next/image";
import React from "react";

export default function ImportantDatesContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-5">
      <div className="">
        <div className="">
          <Titlebar
            title="Important Dates"
            className="text-sm font-medium text-primary-600"
          />
        </div>
        <div className="w-full items-center justify-center flex">
          <Image
            src={"/images/imp.svg"}
            alt=""
            width={1000}
            height={1000}
            className="h-full mt-[5vh] hidden lg:flex"
          />
           <Image
            src={"/images/impmob.svg"}
            alt=""
            width={1000}
            height={1000}
            className="h-full flex md:hidden lg:hidden mt-[5vh]"
          />
        </div>
      </div>
    </div>
  );
}
