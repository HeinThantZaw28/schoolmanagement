import React from "react";

import Announcements from "@/components/common/Announcements";
import BigCalendar from "@/components/common/BigCalendar";
import EventCalendar from "@/components/common/EventCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function StudentPage() {
  return (
    <div className="p-2 flex flex-col md:flex-row gap-3">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white p-4 rounded-md h-full">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Schedule (4A)</span>
          </div>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-10">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
