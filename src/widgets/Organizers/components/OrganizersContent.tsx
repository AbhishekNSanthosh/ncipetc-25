import Titlebar from "@components/Titlebar";
import { committe, orgCommitte } from "@utils/constants";
import Image from "next/image";
import React from "react";

export default function OrganizersContent() {
  const committe = [
    {
      id: 1,
      name: "REV. Fr Thomas Choolaparampil CMI",
      desgn: "Chairman, CCET",
      img: "/committe/fr_thomas.svg",
      role: "chief Patron",
    },
    {
      id: 1,
      name: "REV. Fr Justin Alukkal CMI",
      desgn: "Director, CCET",
      img: "/committe/fr_justin.svg",
      role: "patron",
    },
    {
      id: 2,
      name: "Dr Paul K. Mathew",
      desgn: "Principal, CCET",
      img: "/committe/paul_k_mathew.svg",
      role: "patron",
    },
    {
      id: 1,
      name: "Prof. Anoop R. S",
      desgn: "Head, Department of CSE, CCET",
      img: "/committe/anoop_rs.svg",
      role: "convener",
    },
  ];

  return (
    <div className="px-[5vw] pt-[100px] min-h-[100vh]">
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
          {committe.map((member) => (
            <div
              key={member.id}
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
        <div className="flex items-center justify-center w-full gap-5">
          {orgCommitte.coordinators.map((advisor) => (
            <div
              key={advisor.id}
              className="p-4 border rounded-lg shadow-md bg-white w-[20rem]"
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
          {orgCommitte.members.map((advisor) => (
            <div
              key={advisor.id}
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
