import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./provider"
import { fontSans, fontSerif, fontMono } from "../config/fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Wedding Website",
  description: "Wedding Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}>
        <Providers>
          <div className="font-mono"><Toaster position="bottom-center" /></div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
