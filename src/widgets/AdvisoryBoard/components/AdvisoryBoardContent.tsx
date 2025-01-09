import Titlebar from "@components/Titlebar";
import React from "react";

const advisors = [
  {
    id: 1,
    name: "Prof. Dr. P. Sojan Lal",
    desgn: "Dean School of Computing and Strategic Planning",
    dep: "Adi Shankara Insitute of Engineering & Technology (ASIET), Kalady",
  },
  {
    id: 2,
    name: "Prof. Dr.Subhasri Duttagupta",
    desgn: "Professor",
    dep: " Department of Computer Science and Engineering",
    clg1: "School of Computing, Amritapuri",
    more: true,
  },
  {
    id: 3,
    name: "Prof. Dr. Preetha Mathew K",
    desgn: "Professor",
    dep: " Department of Computer Science and Engineering",
    clg1: "Cochin University College of Engineering, Kuttanad",
    more: true,
  },
  {
    id: 4,
    name: "Prof. Dr. Susan Jacob",
    desgn: "Professor and Head",
    dep: " Department of Civil Engineering",
    clg1: "Carmel College of Engineering and Technology, Punnapra, Alappuzha",
    more: true,
  },
  {
    id: 5,
    name: "Prof. Dr. Jayaprasad G",
    desgn: "Professor and Head",
    dep: " Department of Mechanical Engineering",
    clg1: "Carmel College of Engineering and Technology, Punnapra, Alappuzha",
    more: true,
  },
  {
    id: 6,
    name: "Dr. G Muruganath",
    desgn: "Professor and Head",
    dep: "Department of Electrical and Electronics Engineering",
    clg1: "Ahalia School of Engineering & Technology, Palakkad",
    more: true,
  },
  {
    id: 10,
    name: "Dr. Deepthi Sasidharan",
    desgn: "Associate Professor,",
    dep: "Department of Information Technology",
    clg1: "Government Engineering College, Barton Hill, Thiruvananthapuram",
    more: true,
  },
  {
    id: 7,
    name: "Dr. Salaji S",
    desgn: "Associate Professor,",
    dep: " Department of Mechanical Engineering",
    clg1: "Cochin University College of Engineering, Kuttanad",
    more: true,
  },
  {
    id: 8,
    name: "Prof. Sarath K. S",
    desgn: "Head,",
    dep: " Department of Electrical and Electronics Engineering",
    clg1: "Carmel College of Engineering and Technology, Punnapra, Alappuzha",
    more: true,
  },
  {
    id: 9,
    name: "Prof. Syam Gopi",
    desgn: "Associate Professor,",
    dep: "Department of Computer Science and Engineering",
    clg1: "Amal Jyothi College of Engineering, Kanjirappally",
    more: true,
  },
  {
    id: 11,
    name: "Dr. Esther Daniel",
    desgn: "Associate Professor,",
    dep: "Department of Computer Science and Engineering",
    clg1: "Karunya Institue of Technology and Science, Coimbatore",
    more: true,
  },
];

export default function AdvisoryBoardContent() {
  return (
    <div className="px-[5vw] pt-[100px] min-h-[100vh]">
      <div className="">
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
              Members
            </span>
          </div>
          <div className="flex-1 bg-primary-600 w-full h-[1px]"></div>
        </div>

        {/* Grid for Advisors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-semibold text-primary-700">
                {advisor.name}
              </h3>
              <p className="text-sm text-primary-600">{advisor.desgn}</p>
              <p className="text-sm text-gray-500">{advisor.dep}</p>
              {advisor.clg1 && (
                <p className="text-sm text-gray-500">{advisor.clg1}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
