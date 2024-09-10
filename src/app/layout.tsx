import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import clsx from "clsx";

import { fontSans, fontSerif, fontMono } from "../config/fonts";

import { Providers } from "./provider";

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
          <div className="font-mono">
            <Toaster position="bottom-center" />
          </div>
          <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
