"use client";
import React from "react";

import Image from "next/image";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

export const populationByGenders = [
  {
    id: 1,
    title: "Boys",
    number: 30,
    percentage: "30%",
  },
  {
    id: 2,
    title: "Girls",
    number: 70,
    percentage: "70%",
  },
];

const CountChart = () => {
  const data = [
    {
      name: "Total",
      count: 106,
      fill: "white",
    },
    {
      name: "Boys",
      count: 53,
      fill: "#FAE27C",
    },
    {
      name: "Girls",
      count: 53,
      fill: "#C3EBFA",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-center">
        <p className="font-bold text-md ">Students</p>
        <button onClick={() => console.log("object")}>...</button>
      </div>
      {/* Chart  */}
      <div className="w-full h-[70%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              // label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={"/maleFemale.png"}
          alt="maleFemale"
          width={25}
          height={25}
        />
      </div>
      {/* Footer  */}
      <div className="flex justify-around items-center">
        {populationByGenders?.map((population, i) => (
          <div className="flex flex-col" key={population.id}>
            <div
              className={`w-4 h-4 rounded-full ${
                i % 2 === 0 ? "bg-lamaSky" : "bg-lamaYellow"
              }`}
            />
            <span>{population.number}</span>
            <span className="text-xs text-gray-300">
              {population.title} ({population.percentage})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
