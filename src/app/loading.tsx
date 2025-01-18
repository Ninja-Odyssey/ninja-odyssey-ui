import assets from "@/lib/json/assets";
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src={assets.logoBig}
        width={200}
        height={200}
        alt="logo"
        className="w-[200px] h-auto object-contain loadingLogo"
      />
    </div>
  );
}
