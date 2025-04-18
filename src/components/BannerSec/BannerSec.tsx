"use client";

import assets from "@/lib/json/assets";
import { fblink } from "@/lib/links";
import { Button } from "@/lib/ui/Button/button";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactTyped, Typed } from "react-typed";

export default function BannerSec() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bannerSec"
      style={{
        backgroundImage: `url(${
          isMobile ? assets.bannerBgMobile.src : assets.bannerBg.src
        })`,
      }}
    >
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
          <Button variant="secondary" onClick={() => window.open(fblink)}>
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}
