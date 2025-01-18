import ConditionalHeaderFooter from "@/components/ConditionalHeaderFooter/ConditionalHeaderFooter";
import type { Metadata } from "next";
import "../styles/globals.scss";

import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Ninja Odyssey",
  description: "Ninja Odyssey Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ConditionalHeaderFooter>{children}</ConditionalHeaderFooter>
      </body>
    </html>
  );
}
