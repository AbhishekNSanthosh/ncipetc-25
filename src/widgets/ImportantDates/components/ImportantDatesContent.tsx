import Titlebar from "@components/Titlebar";
import Image from "next/image";
import React from "react";

export default function ImportantDatesContent() {
  return (
    <div className="px-[5vw] min-h-[100vh] pt-[110px] pb-5">
      <div className="">
        <div className="">
          <Titlebar
            title="Important Dates"
            className="text-2xl font-medium text-primary-600"
          />
        </div>
        <div className="w-full items-center justify-center flex">
          <Image
            src={"/images/important.png"}
            alt=""
            width={1000}
            height={1000}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
