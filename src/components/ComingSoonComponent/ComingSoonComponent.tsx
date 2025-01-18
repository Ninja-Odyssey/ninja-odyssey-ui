"use client";

import assets from "@/lib/json/assets";
import { Button } from "@/lib/ui/Button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ComingSoonComponent() {
  const router = useRouter();

  return (
    <div>
      {" "}
      <div className="h-screen w-screen flex-col flex items-center justify-center">
        <figure className="leading-[0] w-[200px]">
          <Image
            src={assets.logoBig}
            width={420}
            height={365}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </figure>
        <h1>Coming Soon</h1>
        <Button variant="secondary" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
