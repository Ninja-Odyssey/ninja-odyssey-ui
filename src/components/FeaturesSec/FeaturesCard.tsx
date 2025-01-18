import Image, { StaticImageData } from "next/image";
import React from "react";

interface FeaturesCardProps {
  img: string | StaticImageData;
  title: string;
  subtitle: string;
  desc: string;
}

export default function FeaturesCard({
  img,
  title,
  subtitle,
  desc,
}: FeaturesCardProps) {
  return (
    <div className=" overflow-hidden bg-[#1F2229]">
      <div className="w-full h-[300px] sm:h-[200px] overflow-hidden cursor-pointer">
        <figure className="w-full h-full hoverImg overflow-hidden">
          <Image
            src={img}
            width={400}
            height={300}
            alt="img"
            className="w-full h-full object-cover "
          />
        </figure>
      </div>
      <div className="p-6 pb-8  md:p-3 md:pb-6">
        <h3 className="mb-2">{title}</h3>
        <p className="text-secondary mb-5">{subtitle}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
