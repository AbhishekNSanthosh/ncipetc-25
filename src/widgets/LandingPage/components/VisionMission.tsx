import React from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function VisionMission() {
  return (
    <div className="px-[5vw] py-[3rem] text-gray-800">
      <div className="flex flex-row items-start justify-between space-x-8">
        <div className="flex-1 flex flex-col space-y-5">
          <div className="">
            <span className="text-xl font-medium text-primary-600">
              Institute Vision
            </span>
            <div className="text-lg">
              <p className="">
                To mould distinctive engineers with integrity and social
                commitment.
              </p>
            </div>
          </div>
          <div className="">
            <span className="text-xl font-medium text-primary-600">
              Institute Mission
            </span>
            <div className="flex flex-col space-y-3 text-lg">
              <p className="flex items-center gap-3">
                <HiOutlineRocketLaunch className="text-xl" />
                Extend harmonious curricular and co-curricular exposure to the
                students.
              </p>
              <p className="flex items-center gap-3">
                <HiOutlineRocketLaunch className="text-xl" />
                Equip the students to accomplish career goals upholding moral
                values.
              </p>
              <p className="flex items-center gap-3">
                <HiOutlineRocketLaunch className="text-xl" />
                Encourage the students to contribute for the sustainable
                development of the society.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[10rem] bg-gray-500 self-center"></div>
        <div className="flex-1 flex flex-col space-y-5">
          <div className="">
            <span className="text-xl font-medium text-primary-600">
              Department Vision
            </span>
            <div className="text-lg">
              <p className="">
                To nurture professionally competent and socially committed IT
                professionals
              </p>
            </div>
          </div>
          <div className="">
            <span className="text-xl font-medium text-primary-600">
              Department Mission
            </span>
            <div className="flex flex-col space-y-3 text-lg">
              <p className="flex items-center gap-3">
                <HiOutlineRocketLaunch className="text-xl" />
                Provide quality education in both theoritical and applied fields
                of computer science.
              </p>
              <p className="flex items-center gap-3">
                <HiOutlineRocketLaunch className="text-xl" />
                Equip the students with industry-oriented skills in computer
                science to take up real-world challenges .
              </p>
              <p className="flex items-center gap-3">
                <HiOutlineRocketLaunch className="text-xl" />
                Inculcate ethical values and leadership qualities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
