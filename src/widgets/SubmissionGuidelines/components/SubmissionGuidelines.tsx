import Titlebar from "@components/Titlebar";
import { authorGuidelines, documents } from "@utils/constants";
import Link from "next/link";
import React from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

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
          <span className="font-semibold text-xl text-gray-800">
            Paper Submission
          </span>
          <p className="text-justify text-lg text-gray-700">
            Authors are invited to submit papers in electronic format.
            Instructions are published in the conference website. Acceptance or
            rejection of papers is based on peer review of the full papers. The number of authors and
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
          <span className="font-semibold text-xl text-gray-800">AUTHORS</span>
          <p className="text-justify text-lg text-gray-700">
            Authors who wish to participate at the conference must register
            individually. The selected paper requires atleast one author to
            attend the conference for presentation. Papers not presented at the
            conference will not be included in the Conference Proceedings.
          </p>
          <div className="flex flex-col space-y-5">
            {authorGuidelines?.map((item, index) => (
              <span className="text-justify text-lg text-gray-700 flex items-center space-x-2 gap-3">
                <HiOutlineRocketLaunch />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="font-semibold text-xl text-gray-800">
            PEER REVIEW
          </span>
          <p className="text-justify text-lg text-gray-700">
            Accepted papers will be subjected to a double-blind review process
            conducted by the Program Committee. This evaluation will be based on
            criteria such as technical soundness, alignment with the
            conference's thematic focus, novelty of contributions, significance
            of findings and clarity of exposition. <br />
            <br />
            In addition to content assessment, submissions must adhere strictly
            to formatting guidelines and ensure author anonymity. Papers failing
            to meet these requirements will be rejected outright without
            undergoing the review process.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="font-semibold text-xl text-gray-800">
            FINAL NOTIFICATION
          </span>
          <p className="text-justify text-lg text-gray-700">
            The notification will be emailed to the author based on the
            reviewers’ feedback. The Notification will be e-mailed to authors
            under any of the three categories
          </p>
          <div className="flex flex-col space-y-5">
            <span className="text-gray-700 text-lg">1. Accepted</span>
            <span className="text-gray-700 text-lg">
              2. May be accepted with Minor/Major changes
            </span>
            <span className="text-gray-700 text-lg">3. Rejected</span>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="font-semibold text-xl text-gray-800">
            PLAGIARISM
          </span>
          <p className="text-justify text-lg text-gray-700">
            Plagiarism in conferences involves presenting someone else's work,
            ideas, or words as one's own without proper credit. It can include
            direct copying, paraphrasing without attribution, self-plagiarism,
            data or ideas plagiarism. To maintain integrity, conferences use
            anti-plagiarism software, enforce citation guidelines, and conduct
            thorough reviews. Violations can lead to rejection or other
            penalties.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="font-semibold text-xl text-gray-800">
            GENERAL GUIDELINES
          </span>
          <p className="text-justify text-lg text-gray-700">
            Plagiarism in conferences involves presenting someone else's work,
            ideas, or words as one's own without proper credit. It can include
            direct copying, paraphrasing without attribution, self-plagiarism,
            data or ideas plagiarism. To maintain integrity, conferences use
            anti-plagiarism software, enforce citation guidelines, and conduct
            thorough reviews. Violations can lead to rejection or other
            penalties.
          </p>
          <div className="flex flex-col space-y-5">
            <span className="text-justify text-lg text-gray-700 flex items-center gap-3">
              <HiOutlineRocketLaunch />
              Final camera ready paper (It should be in editable format either
              word or latex file)
            </span>
            <div className="flex items-center gap-3">
              <HiOutlineRocketLaunch />
              <span className="text-justify text-lg text-gray-700">
                Copyright agreement form (It should be duly signed by the
                corresponding author with date). Copyright agreement template
                can be <br />
                <Link
                  href={
                    "https://drive.google.com/file/d/19WInx_LrULZV-ZTmEwwDw5io6Kj2xRTy/view"
                  }
                  target="_blank"
                  className="font-semibold text-primary-600"
                >
                  downloaded here.
                </Link>
              </span>
            </div>
            <span className="text-justify text-lg text-gray-700 flex items-center gap-3">
              <HiOutlineRocketLaunch /> Payment Proof (Anyone of the author can
              pay - Registration fee per paper only).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
