import React from "react";

import moment from "moment";

import Announcements from "@/components/common/Announcements";
import AttendanceChart from "@/components/common/AttendanceChart";
import CountChart from "@/components/common/CountChart";
import EventCalendar from "@/components/common/EventCalendar";
import FinanceChart from "@/components/common/FinanceChart";
import UserCard from "@/components/common/UserCard";

export const userInfos = [
  {
    id: 1,
    title: "Student",
    number: "1234",
    date: moment().format("DD/YYYY"),
  },
  {
    id: 2,
    title: "Teacher",
    number: "383",
    date: moment().format("DD/YYYY"),
  },
  {
    id: 3,
    title: "Student",
    number: "7820",
    date: moment().format("DD-YYYY"),
  },
  {
    id: 4,
    title: "Teacher",
    number: "2002",
    date: moment().format("DD-YYYY"),
  },
];

export default function AdminPage() {
  return (
    <div className="p-2 flex flex-col md:flex-row gap-3">
      <div className="w-full lg:w-2/3 space-y-8">
        <div className="flex flex-wrap gap-4">
          {userInfos.map((item, i) => (
            <UserCard key={i} {...item} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 h-[450px]">
          <div className="w-full md:w-1/3 bg-white p-2 h-full">
            <CountChart />
          </div>
          <div className="w-full md:w-2/3 bg-white h-full p-2">
            <AttendanceChart />
          </div>
        </div>
        <div className="h-[500px] bg-white w-full">
          <FinanceChart />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-10">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
