import Titlebar from "@components/Titlebar";
import React from "react";

export default function RegistrationContent() {
  return (
    <div className="pt-[120px] px-[5vw] text-gray-700 pb-10">
      <div className="flex flex-col space-y-8">
        <div className="">
          <Titlebar
            className="text-2xl font-medium text-primary-600"
            title="Registration"
          />
        </div>
        <div className="">
          <div className="flex flex-col space-y-3">
            <span className="text-2xl font-semibold text-gray-700">
              Who can apply?
            </span>
            <p className="">
              This conference is open to UG/PG students of Engineering colleges,
              Academicians, Research Scholar, Professionals, from research
              organizations and industries.
            </p>
          </div>
          <div className="flex flex-row mt-10 space-x-10">
            <div className="flex-1 flex w-full flex-col space-y-8">
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md capitalize">
                <span className="capitalize">UG/PG students</span>
                <span className=""> ₹ 1500/-</span>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md">
                <span className="capitalize">research scholars</span>
                <span className=""> ₹ 2000/-</span>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md">
                <span className="capitalize">Academicians/Professionals</span>
                <span className=""> ₹ 2500/-</span>
              </div>
              <div className="flex flex-row items-center justify-between w-full p-4 shadow-md rounded-md">
                <span className="capitalize">attendees</span>
                <span className=""> ₹ 500/-</span>
              </div>
            </div>
            <div className="flex-1 shadow-md w-full h-[26rem] rounded-md flex items-center justify-center text-primary-600">
              Bank details will be updated soon !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
