import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import clsx from "clsx";

import { fontSans, fontSerif, fontMono } from "../config/fonts";

import { Providers } from "./provider";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Wedding Website",
  description: "Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable,
        )}
      >
        <Providers>
          <Toaster containerClassName="font-mono" position="bottom-center" />
          <Suspense
            fallback={
              <div className="h-screen font-mono flex place-content-center items-center">
                Loading...
              </div>
            }
          >
            <Navbar />
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
