import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Titlebar from "@components/Titlebar";
import React from "react";
import Link from "next/link";

export default function ContactContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[100px] pb-[5vh]">
      <div className="flex flex-col space-y-8">
        <div>
          <Titlebar
            className="lg:text-2xl text-sm font-medium text-primary-600"
            title="Contact"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:py-[10vh]">
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
                <Link href="mailto:conferencecse@carmelcet.in" className="text-primary-600">
                  conferencecse@carmelcet.in
                </Link>
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
              <FaPhoneAlt className="text-primary-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">
                Phone Numbers
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <Link href="tel:+918589059517" className="text-primary-600">
                  +91 8589059517
                </Link>
                <br />
                <Link href="tel:+919995267896" className="text-primary-600">
                  +91 9995267896
                </Link>
                <br />
                <Link href="tel:+919995152970" className="text-primary-600">
                  +91 9995152970
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
