import React from "react";
import { GoDotFill } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="fixed z-50 flex w-full items-center justify-between bg-white py-2 px-4">
      <p className="text-xl font-bold">
        <GoDotFill className="inline text-6xl text-[#dd757c]" />
        กลุ่มเครือข่ายผู้เปลี่ยนแปลงสังคม
      </p>
      <div>
        <CgMenuRight className="text-5xl" />
      </div>
    </div>
  );
}
