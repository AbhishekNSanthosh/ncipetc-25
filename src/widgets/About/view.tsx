import Titlebar from "@components/Titlebar";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="px-[5vw] py-[2rem]">
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col space-y-5">
          <Titlebar
            title="About the conference"
            className="text-primary-600 text-2xl font-medium"
          />
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <p className="text-justify text-gray-700 text-lg">
                National Conference on Interdisciplinary Perspectives of
                Emerging Trends in Computing (NCIPETC 2025) NCIPETC 2025 aims to
                provide an excellent forum for uniting academicians and experts
                from industries to share knowledge and research in the field of
                computing. The conference also serves as a dynamic platform for
                researchers, scientists, academicians, and students to exchange
                their ideas in all aspects of computing, including emerging
                technologies, methodologies, and applications. Concepts and
                products that develop new ideas or theories addressing societal
                challenges, promoting sustainability, and contributing to the
                advancement of science, engineering, healthcare, business, and
                other domains are encouraged. All the selected papers will be
                published in conference proceedings. A few selected papers
                accepted after peer review will be published in an indexed
                journal.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={"/images/aboutconf.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[30rem]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="w-full items-center flex justify-end">
          <Titlebar
            title="about carmel college of engineering & technology"
            className="text-primary-600 text-2xl font-medium"
          />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={"/images/aboutclg.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[30rem]"
              />
            </div>
            <div className="flex-1">
              <p className="text-justify text-gray-700 text-lg">
                Carmel College of Engineering & Technology (CCET) is owned and
                managed by St. Joseph's Carmel Educational & Charitable Trust of
                CMI. CCET is a self-financing college approved by AICTE and
                affiliated to APJ Abdul Kalam Technological University, Kerala
                which offers 4 year B.Tech degree courses in Civil Engineering,
                Mechanical Engineering, Electrical and Electronics Engineering
                and Computer Science and Engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Titlebar
            title="About department"
            className="text-primary-600 text-2xl font-medium"
          />
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <p className="text-justify text-gray-700 text-lg">
                The Department of CSE in Carmel College of Engineering and
                Technology was established in 2017 with a maximum intake of 120
                students per year. Department plays a key role to enhance the
                learning and technical competence of students in the field of
                Computer Science & Engineering. Workshops and hands-on sessions
                are conducted on a regular basis. The Department frequently
                conducts seminars and invited talks with the support of
                experienced resource persons from the industry and well known
                academic institutions. Department has signed MoU with various IT
                legends and International Universities. The faculty members
                pursue research in areas like Computer Networking,Cloud
                computing, Image processing,Computer Vision,. Our students are
                also encouraged to publish their research work in public domain
                and guides them to present their papers in National and
                International conferences.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={"/images/dep.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-[30rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
