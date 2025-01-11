import Titlebar from "@components/Titlebar";
import { advisors } from "@utils/constants";
import React from "react";

export default function AdvisoryBoardContent() {
  return (
    <div className="px-[5vw] lg:pt-[100px] pt-[80px] min-h-[100vh] pb-[5vh]">
      <div className="">
        <div className="">
          <Titlebar
            className="lg:text-2xl text-sm font-medium text-primary-600"
            title="Advisory Board"
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-[5vh]">
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
          <div className="flex px-[5vw]">
            <span className="text-xl font-semibold text-primary-700">
              Members
            </span>
          </div>
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
        </div>

        {/* Grid for Advisors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold text-primary-700">
                {advisor.name}
              </h3>
              <p className="text-sm text-primary-600">{advisor.desgn}</p>
              <p className="text-sm text-gray-500">{advisor.dep}</p>
              {advisor.clg1 && (
                <p className="text-sm text-gray-500">{advisor.clg1}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
