'use client'

import assets from "@/app/json/assets";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rankings",
    href: "/",
  },
  {
    name: "Patch Notes",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];
export default function Header() {
const pathname=usePathname();

  return (
    <div className="py-4">
      <div className="container">
        <div className="flex w-full items-center">
          <div className="flex items-center gap-4">
            <figure>
              <Image
                src={assets.logo}
                width={48}
                height={48}
                alt="logo"
              ></Image>
            </figure>
            <p className="text-white text-[25px]">Ninja Odyssey</p>
          </div>
          <div className="ml-auto">
            <ul className="flex gap-[30px] headernav">
              {navItems.map((item, index) => (
                <li key={index}  >
                  <a href={item.href} className={pathname===item.href ? "active":""}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
