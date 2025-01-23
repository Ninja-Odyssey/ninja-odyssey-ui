"use client";

import DrawerIcon from "@/icons/DrawerIcon";
import assets from "@/lib/json/assets";
import { Button } from "@/lib/ui/Button/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/lib/ui/Drawer/drawer";
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
          <Drawer direction="right">
            <DrawerTrigger className="hidden md:inline-flex ml-auto">
              <DrawerIcon />
            </DrawerTrigger>
            <DrawerContent>
              <Link
                href="/"
                className="flex items-center gap-[4px] logoLink mb-10 justify-center"
              >
                <Image
                  src={assets.logo}
                  width={48}
                  height={48}
                  alt="logo"
                  className="w-[48px] h-auto object-contain"
                />
                <p className="text-white text-[25px]">Ninja Odyssey</p>
              </Link>
              <ul className="flex flex-col gap-[30px] headernav ">
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
            </DrawerContent>
          </Drawer>
          <div className="ml-auto md:hidden">
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
                  onClick={() => router.push("/auth/login")}
                >
                  Login / Register
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
