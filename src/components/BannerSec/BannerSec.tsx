"use client";

import { Button } from "@/lib/ui/Button/button";
import AOS from "aos";
import { useEffect } from "react";
import { ReactTyped, Typed } from "react-typed";

export default function BannerSec() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bannerSec">
      <div className="container">
        <div
          className="bannerText pt-[240px] pb-[160px] max-w-[700px]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <ReactTyped
            strings={["Explore the New Ninja Odyssey"]}
            typeSpeed={50}
            backSpeed={25}
            backDelay={1000}
            startDelay={1000}
            loop={false}
            className="subHeading"
          />
          <h1 className="italic mainHeading mb-5">
            Founder’s Pack is Live Now
          </h1>
          <Button variant="secondary">Join Now</Button>
        </div>
      </div>
    </div>
  );
}
