"use client"

import { fblink } from "@/lib/links";
import { Button } from "@/lib/ui/Button/button";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  img: string | StaticImageData;
  title: string;
  desc: string;
}

export default function BlogCard({ img, title, desc }: BlogCardProps) {
  const router=useRouter();

  return (
    <div className="bg-white">
      <div className="w-full h-[330px] sm:h-[240px] overflow-hidden cursor-pointer">
        <figure className="w-full h-full hoverImg overflow-hidden">
          <Image
            src={img}
            width={960}
            height={540}
            alt="img"
            className="w-full h-full object-cover "
          />
        </figure>
      </div>
      <div className="p-6 pb-8 md:p-3 md:pb-6">
        <h3 className="mb-2 text-bgPrimary">{title}</h3>
        <p>{desc}</p>
        <div className="flex items-center justify-between flex-wrap mt-8 xs:gap-3">
          <Button variant="secondary" className="w-[49%] xs:w-full" onClick={()=>window.open(fblink)}>Join Now</Button>
          <Button variant="outline" className="w-[49%] xs:w-full" onClick={()=>router.push("/patch-details")}>Read more</Button>
        </div>
      </div>
    </div>
  );
}
