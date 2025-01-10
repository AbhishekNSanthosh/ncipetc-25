import Titlebar from "@components/Titlebar";
import { committe, orgCommitte } from "@utils/constants";
import Image from "next/image";
import React from "react";

export default function OrganizersContent() {

  return (
    <div className="px-[5vw] pt-[100px] min-h-[100vh] pb-[5vh]">
      <div className="flex flex-col space-y-8">
        <div className="">
          <Titlebar
            className="text-2xl font-medium text-primary-600"
            title="Advisory Board"
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-[5vh]">
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
          <div className="flex px-[5vw]">
            <span className="text-xl font-semibold text-primary-700">
              Committee
            </span>
          </div>
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {committe.map((member,index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border rounded-lg shadow-lg p-5 text-center"
            >
              <div className="w-32 h-32">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{member.desgn}</p>
              <span className="mt-1 text-xs font-medium text-primary-600 uppercase">
                {member.role}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center mt-[5vh]">
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
          <div className="flex px-[5vw]">
            <span className="text-xl font-semibold text-primary-700">
              Coordinators
            </span>
          </div>
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {orgCommitte.coordinators.map((advisor,index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold text-primary-700">
                {advisor.name}
              </h3>
              <p className="text-sm text-primary-600">{advisor.desgn}</p>
              <p className="text-sm text-gray-500">{advisor.dep}</p>
            </div>
          ))}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {orgCommitte.members.map((advisor,index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold text-primary-700">
                {advisor.name}
              </h3>
              <p className="text-sm text-primary-600">{advisor.desgn}</p>
              <p className="text-sm text-gray-500">{advisor.dep}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
