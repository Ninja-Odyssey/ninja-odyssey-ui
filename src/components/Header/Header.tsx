"use client";

import assets from "@/lib/json/assets";
import { Button } from "@/lib/ui/Button/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const navItems = [
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
    href: "/patch-notes",
  },
  {
    name: "Contact",
    href: "/coming-soon",
  },
];
export default function Header() {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const detectScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setScroll(currentScroll > 50);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      detectScroll();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [detectScroll]);

  return (
    <div
      className={` py-4 bg-[#111219] mainHeader fixed w-full transition-all ease duration-500 top-0 ${
        scroll ? `bg-[rgba(17,18,25,0.8)]   z-[99] backdrop-blur-sm ` : ""
      }`}
    >
      <div className="container">
        <div className="flex w-full items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-[4px] logoLink">
              <Image
                src={assets.logo}
                width={48}
                height={48}
                alt="logo"
                className="w-[48px] h-auto object-contain"
              />
              <p className="text-white text-[25px]">Ninja Odyssey</p>
            </Link>
          </div>
          <div className="ml-auto">
            <ul className="flex gap-[30px] headernav items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  variant="default"
                  onClick={() => router.push("/coming-soon")}
                >
                  Shop
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
