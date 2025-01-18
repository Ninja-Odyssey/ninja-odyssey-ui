"use client";

import assets from "@/lib/json/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const footerNav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rankings",
    href: "/coming-soon",
  },
  {
    name: "Patch Notes",
    href: "/coming-soon",
  },
  {
    name: "Contact",
    href: "/coming-soon",
  },
];
const contactNav = [
  {
    name: "Facebook",
    href: "/coming-soon",
  },
  {
    name: "Discord",
    href: "/coming-soon",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="cmn_gap bg-[#11141C]">
      <div className="container">
        <div className="flex gap-10 justify-between">
          <div className="">
            <Link
              href="/"
              className="flex flex-col items-center gap-[4px] logoLink"
            >
              <Image
                src={assets.logoBig}
                width={100}
                height={100}
                alt="logo"
                className="w-[100px] h-auto object-contain"
              />
              <p className="text-white text-[25px]">Ninja Odyssey</p>
            </Link>
            <p className="text-center mt-4 text-[14px]">©2025 <span className="text-secondary">Ninja Odyssey</span>  All Rights Reserved.</p>
          </div>
          <div className="flex w-3/4">
            <div className="w-1/3">
            <p className="mb-3 text-secondary">Explore</p>
              <ul className="footerNav">
                {footerNav.map((item, index) => (
                  <li key={index} className="mb-5 last:mb-0">
                    <a
                      href={item.href}
                      className={`hover:text-white  ${
                        pathname === item.href ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/3">
            <p className="mb-3 text-secondary">Contact</p>
              <ul>
                {contactNav.map((item, index) => (
                  <li key={index} className="mb-5 last:mb-0">
                    <a href={item.href} className="hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
