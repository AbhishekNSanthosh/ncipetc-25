import Titlebar from "@components/Titlebar";
import Link from "next/link";
import React from "react";

export default function SubmissionGuidelinesContent() {
  return (
    <div className="px-[5vw] pt-[100px] pb-[5vh]">
      <div className="flex flex-col space-y-8">
        <div className="">
          <Titlebar
            className="text-2xl font-medium text-primary-600"
            title="Submission Guidelines"
          />
        </div>
        <div className="flex flex-col space-y-5">
          <span className="font-semibold text-xl">Paper Submission</span>
          <p className="text-justify text-lg">
            Authors are invited to submit papers in electronic format.
            Instructions are published in the conference website. Acceptance or
            rejection of papers is based on peer review of the full papers. The
            size of the paper is limited to 6 pages conforming to the IEEE
            format and specifications. The IEEE paper template can be{" "}
            <Link
              href={
                "https://www.ieee.org/conferences/publishing/templates.html"
              }
              className="text-primary-600 font-semibold"
              target="_blank"
            >
              downloaded here
            </Link>{" "}
            .
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="font-semibold text-xl">AUTHORS</span>
          <p className="text-justify text-lg">
            Authors who wish to participate at the conference must register
            individually. The selected paper requires atleast one author to
            attend the conference for presentation. Papers not presented at the
            conference will not be included in the Conference Proceedings.
          </p>
        </div>
      </div>
    </div>
  );
}
