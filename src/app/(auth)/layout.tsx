import React from "react";

import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/common/Menu";
import NavBar from "@/components/common/NavBar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] px-4 pt-3">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          <span className="hidden lg:block">SCM</span>
        </Link>
        <div className="h-[90%] overflow-y-auto overflow-x-hidden">
          <Menu />
        </div>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  overflow-y-auto bg-[#F7F8FA]">
        <NavBar />
        <div>{children}</div>
      </div>
    </div>
  );
}
