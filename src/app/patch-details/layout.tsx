import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Patch Notes ",
  description: "Patch Notes",
};

export default async function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
