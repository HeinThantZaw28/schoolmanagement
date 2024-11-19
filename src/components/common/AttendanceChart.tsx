"use client";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 52,
    absent: 48,
  },
  {
    name: "Tue",
    present: 35,
    absent: 20,
  },
  {
    name: "Wed",
    present: 43,
    absent: 27,
  },
  {
    name: "Thurs",
    present: 39,
    absent: 31,
  },
  {
    name: "Fri",
    present: 39,
    absent: 19,
  },
];

const AttendanceChart = () => {
  return (
    <div className="space-y-3 h-full">
      <div className="flex justify-between items-center">
        <p className="font-bold text-md ">Attendance</p>
        <button onClick={() => console.log("object")}>...</button>
      </div>

      <ResponsiveContainer width={"100%"} height={"90%"}>
        <BarChart width={500} height={300} barSize={20} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
          />
          <Bar
            radius={[10, 10, 0, 0]}
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
