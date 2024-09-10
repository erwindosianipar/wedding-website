import {
  Arizonia as FontSans,
  DM_Serif_Text as FontSerif,
  Libre_Franklin as FontMono
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});  

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
