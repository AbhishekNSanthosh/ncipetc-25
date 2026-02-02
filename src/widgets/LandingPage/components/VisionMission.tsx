import React from "react";
import {
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
} from "react-icons/hi2";

export default function VisionMission() {
  return (
    <div className="px-[5vw] py-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Institute Section */}
        <div className="flex-1 flex flex-col space-y-8">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Institute Vision
            </h2>
            <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
          </div>

          <div className="bg-primary-50/50 p-6 rounded-2xl border border-primary-100">
            <p className="text-lg text-gray-700 font-medium leading-relaxed italic">
              "To mould distinctive engineers with integrity and social
              commitment."
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <HiOutlineLightBulb className="text-2xl text-yellow-500" />
              Institute Mission
            </h3>
            <div className="space-y-4">
              {[
                "Extend harmonious curricular and co-curricular exposure to the students.",
                "Equip the students to accomplish career goals upholding moral values.",
                "Encourage the students to contribute for the sustainable development of the society.",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                    <HiOutlineRocketLaunch className="text-primary-600" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

        {/* Department Section */}
        <div className="flex-1 flex flex-col space-y-8">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Department Vision
            </h2>
            <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
          </div>

          <div className="bg-primary-50/50 p-6 rounded-2xl border border-primary-100">
            <p className="text-lg text-gray-700 font-medium leading-relaxed italic">
              "To nurture professionally competent and socially committed IT
              professionals."
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <HiOutlineAcademicCap className="text-2xl text-blue-500" />
              Department Mission
            </h3>
            <div className="space-y-4">
              {[
                "Provide quality education in both theoretical and applied fields of computer science.",
                "Equip the students with industry-oriented skills in computer science to take up real-world challenges.",
                "Inculcate ethical values and leadership qualities.",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                    <HiOutlineRocketLaunch className="text-primary-600" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
