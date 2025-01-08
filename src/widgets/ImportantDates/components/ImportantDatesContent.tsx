import Titlebar from "@components/Titlebar";
import React from "react";

export default function ImportantDatesContent() {
  return (
    <div className="px-[5vw] min-h-[100vh] pt-[110px]">
      <div className="">
        <div className="">
          <Titlebar
            title="Important Dates"
            className="text-2xl font-medium text-primary-600"
          />
        </div>
      </div>
    </div>
  );
}
