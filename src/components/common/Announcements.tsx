"use client";
import React from "react";

const events = [
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
    descriptions:
      "dolor sit amet, consectetur adpiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, alias!",
  },
  {
    id: "3",
    title: "Consectetur adpiscing",
    time: "05:00 PM - 06:00 PM",
    descriptions: "consectetur adpiscing elit.",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md gap-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Announcements</h1>
        <button className="text-xs text-gray-400">View All</button>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-3 shadow-md first:bg-lamaSkyLight bg-lamaPurpleLight last:bg-lamaYellowLight"
          >
            <div className="flex justify-between">
              <span className="font-semibold text-sm">{event.title}</span>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.descriptions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
