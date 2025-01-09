import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Titlebar from "@components/Titlebar";
import React from "react";

export default function ContactContent() {
  return (
    <div className="px-[5vw] pt-[100px] pb-[5vh]">
      <div className="flex flex-col space-y-8">
        <div>
          <Titlebar
            className="text-2xl font-medium text-primary-600"
            title="Contact"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-[10vh]">
            {/* Office Address */}
            <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-primary-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">
                Office Address
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Carmel College Of Engineering And Technology <br />
                Punnapra | Alappuzha-688004, Kerala
              </p>
            </div>

            {/* Mail */}
            <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
              <FaEnvelope className="text-primary-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Mail</h3>
              <p className="text-sm text-gray-600 mt-2">
                conferencecse@carmelcet.in
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
              <FaPhoneAlt className="text-primary-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">
                Phone Numbers
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                +91 8589059517 <br />
                +91 9995267896
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
