import Titlebar from "@components/Titlebar";
import React from "react";

export default function AdvisoryBoardContent() {
  return (
    <div className="px-[5vw] pt-[100px] min-h-[100vh]">
    <div className="">
        <div className="">
            <Titlebar  className="text-2xl font-medium text-primary-600" title="Advisory Board"/>
        </div>
        <div className="flex flex-row items-center justify-center mt-[5vh]">
            <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
            <div className="flex px-[5vw]">
                <span className="text-xl font-semibold text-primary-700">Members</span>
            </div>
            <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
        </div>
    </div>
    </div>
  );
}
