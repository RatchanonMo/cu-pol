import React from "react";
import { GoDotFill } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="fixed z-50 flex w-full items-center justify-between bg-white px-4 py-2">
      <p className="text-xl font-bold">
        <GoDotFill className="inline text-6xl text-[#dd757c]" />
        <span className="hidden md:inline">
          กลุ่มเครือข่ายผู้เปลี่ยนแปลงสังคม
        </span>
      </p>
      <div>
        <CgMenuRight className="text-5xl" />
      </div>
    </div>
  );
}
