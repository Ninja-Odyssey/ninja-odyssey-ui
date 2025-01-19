import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ranking",
  description: "Ranking",
};

export default async function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
