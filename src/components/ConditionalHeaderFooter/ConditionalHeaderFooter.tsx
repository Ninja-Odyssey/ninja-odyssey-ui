"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function ConditionalHeaderFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/coming-soon") {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="pt-[72px]">

      {children}
      </div>
      <Footer/>
    </>
  );
}
