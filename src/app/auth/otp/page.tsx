"use client";
import assets from "@/lib/json/assets";
import { Button } from "@/lib/ui/Button/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import OTPInput from "react-otp-input";

export default function page() {
  const [otp, setOtp] = useState("");
  const router=useRouter();

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
            <h2 className="text-[50px] md:text-[40px] mb-6">Verify Your Account</h2>
            <div className="flex flex-col gap-10 w-full mb-6">
              <div className="otpinput">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <Button variant="default" className=" h-[50px]" onClick={()=>router.push("/auth/reset-password")}>
                Verify
              </Button>
            </div>
            <div className="flex justify-between mt-6 w-full md:flex-wrap md:gap-4">
              <Link
                href="/"
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
