import type { Metadata } from "next";

import {Preahvihear,Poppins} from "next/font/google";


import "./globals.css";

const poppins = Poppins({
  subsets:["latin"],
  variable:"--font-poppins",
  display:"swap",
  weight:"400"
});
const preahvihear = Preahvihear({
  subsets:["latin"],
  variable:"--font-preahvihear",
  display:"swap",
  weight:"400"
});

export const metadata: Metadata = {
  title: "Educar Mentes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${preahvihear.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
