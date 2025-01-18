import Image, { StaticImageData } from "next/image";
import React from "react";

interface CharacterCardProps {
  bg: string;
  charImg: string | StaticImageData;
}

export default function CharacterCard({ bg, charImg }: CharacterCardProps) {
  const sanitizedBg = bg.replace(/\s+/g, "");

  return (
    <div className="characterCardHover">
      <div
        className={`border border-borderPrimary rounded-[5px] py-8 charCard`}
        style={{ backgroundColor: sanitizedBg }}
      >
        <figure className="w-full h-[full] max-h-[410px] charShadow">
          <Image
            src={charImg}
            width={300}
            height={410}
            alt="charimg"
            className="w-full h-full  object-contain"
          />
        </figure>
      </div>
    </div>
  );
}
