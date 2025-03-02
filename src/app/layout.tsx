import "./globals.css";

import { CircleCheckBig } from "lucide-react";
import type { Metadata } from "next";

import { dosis } from "@/fonts/dosis";
import { inter } from "@/fonts/inter";

export const metadata: Metadata = {
  title: "Meta.diária",
  description: "Criar hábitos diários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col antialiased h-screen pt-5 pb-20 gap-10`}
      >
        <div className="flex justify-center items-center gap-2">
          <CircleCheckBig className="size-10 md:size-20" />
          <p className={`${dosis.className} text-4xl md:text-8xl`}>
            <strong>meta.</strong>
            <span className="text-[#45EDAD]">diária</span>
          </p>
        </div>
        <div className="flex flex-1">{children}</div>
      </body>
    </html>
  );
}
