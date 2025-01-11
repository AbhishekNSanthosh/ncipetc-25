import Titlebar from "@components/Titlebar";
import React from "react";

export default function RegistrationContent() {
  return (
    <div className="lg:pt-[120px] pt-[80px] px-[5vw] text-gray-700 pb-10">
      <div className="flex flex-col space-y-8">
        <div className="">
          <Titlebar
            className="lg:text-2xl text-sm font-medium text-primary-600"
            title="Registration"
          />
        </div>
        <div className="">
          <div className="flex flex-col space-y-3">
            <span className="text-xl lg:text-2xl font-semibold text-gray-700">
              Who can apply?
            </span>
            <p className="text-sm lg:text-base">
              This conference is open to UG/PG students of Engineering colleges,
              Academicians, Research Scholar, Professionals, from research
              organizations and industries.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-10 gap-5">
            <div className="flex-1 flex w-full flex-col space-y-5">
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md capitalize text-sm lg:text-base">
                <span className="capitalize">UG/PG students</span>
                <span className=""> ₹ 1500/-</span>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md text-sm lg:text-base">
                <span className="capitalize">research scholars</span>
                <span className=""> ₹ 2000/-</span>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md text-sm lg:text-base">
                <span className="capitalize">Academicians/Professionals</span>
                <span className=""> ₹ 2500/-</span>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md text-sm lg:text-base">
                <span className="capitalize">attendees</span>
                <span className=""> ₹ 500/-</span>
              </div>
            </div>
            <div className="lg:flex-1 shadow-md w-full h-[30vh] sm:h-60 md:h-[22rem] lg:h-[26rem] rounded-md flex items-center justify-center text-primary-600 text-sm lg:text-base text-center">
              Bank details will be updated soon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
