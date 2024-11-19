import React from "react";

const UserCard = ({
  title,
  date,
  number,
  onClick,
}: {
  type: string;
  title: string;
  date: string;
  number: string;
  onClick: () => void;
}) => {
  return (
    <div className="p-4 even:bg-lamaYellow odd:bg-lamaPurple flex-1 min-w-[130px] rounded-md space-y-2">
      <div className="flex justify-between">
        <p className="text-xs flex items-center p-1 bg-slate-100 text-green-600 rounded-xl">
          {date}
        </p>
        <button onClick={onClick} className="font-bold text-xl">
          ...
        </button>
      </div>
      <p className="text-md font-bold">{number}</p>
      <p className="text-xs capitalize text-gray-500 font-medium">
        {title + "s"}
      </p>
    </div>
  );
};

export default UserCard;
