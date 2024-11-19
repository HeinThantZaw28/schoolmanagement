"use client";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const events = [
  {
    id: "1",
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 02:00 PM",
    descriptions: "lorem ipsum dolor sit amet, consectetur adpiscing elit.",
  },
  {
    id: "2",
    title: "Dolor sit amet",
    time: "03:00 PM - 04:30 PM",
    descriptions: "dolor sit amet, consectetur adpiscing elit.",
  },
  {
    id: "3",
    title: "Consectetur adpiscing",
    time: "05:00 PM - 06:00 PM",
    descriptions: "consectetur adpiscing elit.",
  },
  {
    id: "4",
    title: "Elit lorem ipsum",
    time: "07:00 PM - 08:00 PM",
    descriptions: "elit lorem ipsum dolor sit amet.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold">Events</h1>
        <button className="text-xl font-bold">...</button>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-3 shadow-md border-t-2 odd:border-lamaYellow even:border-lamaPurple"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">{event.title}</span>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.descriptions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
