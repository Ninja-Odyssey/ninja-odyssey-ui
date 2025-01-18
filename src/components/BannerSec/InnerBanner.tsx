import assets from "@/lib/json/assets";
import React from "react";

export default function InnerBanner({ title }: { title: string }) {
  return (
    <div
      className="innerBanner"
      style={{ backgroundImage: `url(${assets.innerBanner.src}) ` }}
    >
      <div className="container">
        <h1 className="italic mainHeading "> {title}</h1>
      </div>
    </div>
  );
}
