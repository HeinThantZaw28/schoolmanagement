import React from "react";

import { BiComment, BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      {/* Search  */}
      <div className=" hidden md:flex gap-3 items-center bg-white border rounded-md px-2">
        <div className="cursor-pointer">{React.createElement(BiSearch)}</div>
        <input
          type="text"
          className="w-full px-4 py-2 outline-none"
          placeholder="Search..."
        />
      </div>
      {/* Right Content  */}
      <div className="flex items-center gap-5 justify-end w-full">
        <div className="bg-white w-7 h-7 flex justify-center items-center rounded-full">
          {React.createElement(BiComment)}
        </div>
        <div className="relative bg-white w-7 h-7 flex justify-center items-center rounded-full">
          <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-purple-600 text-white flex justify-center items-center text-xs">
            1
          </div>
          {React.createElement(GrAnnounce)}
        </div>
        <div className="flex flex-col">
          <p className="font-bold">John Doe</p>
          <p className="flex justify-center items-center text-sm bg-green-300 rounded-md">
            Student
          </p>
        </div>
        <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
          {React.createElement(BsPerson)}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
