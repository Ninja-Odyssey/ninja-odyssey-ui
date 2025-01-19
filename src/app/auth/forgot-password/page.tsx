"use client";

import assets from "@/lib/json/assets";
import { Button } from "@/lib/ui/Button/button";
import { Input } from "@/lib/ui/Input/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

  return (
    <div className="cmn_gap">
      <div className="container">
        <div>
          <div className="flex flex-col items-center max-w-[600px] mx-auto rounded-[20px] p-8 md:p-4 bg-[#051722] loginbox">
            <Link
              href="/"
              className="flex items-center gap-[4px] logoLink mb-5"
            >
              <Image
                src={assets.logo}
                width={48}
                height={48}
                alt="logo"
                className="w-[48px] h-auto object-contain"
              />
              <p className="text-white text-[25px]">Ninja Odyssey</p>
            </Link>
            <h2 className="text-[50px] md:text-[40px] mb-6">Forgot Password</h2>
            <div className="flex flex-col gap-10 w-full mb-6">
              <Input placeholder="Email / User Name" />
              <Button onClick={() => router.push("/auth/otp")}>
                Send Verification Link
              </Button>
            </div>
            <div className="flex justify-between mt-6 w-full md:flex-wrap md:gap-4">
              <Link
                href="/auth/login"
                className="text-[16px] font-martian text-secondary md:text-[14px]"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
