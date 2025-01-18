import React from "react";

export default function InnerBanner({ title }: { title: string }) {
  return (
    <div className="innerBanner">
      <div className="container">
        <h1 className="italic mainHeading "> {title}</h1>
      </div>
    </div>
  );
}
