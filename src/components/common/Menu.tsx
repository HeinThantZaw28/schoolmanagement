import React from "react";

import Link from "next/link";

import { menuItems } from "@/constants/constantData";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span
            key={item.title}
            className="hidden lg:block text-gray-400 font-light my-4"
          >
            {item.title}
          </span>
          {item.items.map((menu) => (
            <Link
              href={menu.path}
              key={menu.path}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              {menu.icon}
              <span className="hidden lg:block">{menu.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
