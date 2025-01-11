import Titlebar from "@components/Titlebar";
import { topics } from "@utils/constants";
import Image from "next/image";
import React from "react";

export default function CallForPapersContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[100px] pb-[5vh]">
      <div className="flex flex-col space-y-8">
        <div className="">
          <Titlebar
            className="lg:text-2xl text-sm font-medium text-primary-600"
            title="Call for papers"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:space-x-14">
          <div className="flex-1">
            <p className="text-justify text-lg">
              The aim of this conference is to bring together academicians,
              researchers and professionals from diverse fields of engineering
              and technology to a common platform in order to facilitate
              exchange of knowledge and experience. The conference will provide
              an arena for showcasing of novel research findings and practical
              experiences in various engineering domains.
            </p>
          </div>
          <div className="lg:flex-1 flex items-center justify-center">
            <Image
              src="/call.svg"
              height={500}
              width={500}
              alt=""
              className="w-[18rem]"
            />
          </div>
        </div>
        <div className="">
          <span className="text-lg">
            Topics of interest include, but not limited to the following:
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md text-cente"bg-primary-100"
              }`}
            >
              <span className="text-md font-medium text-primary-600 capitalize">
                {topic.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
