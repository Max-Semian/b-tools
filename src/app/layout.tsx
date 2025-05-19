import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
  title: "B-Tools",
  description: "Повышаем эффективность продаж",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={manrope.variable} style={{
        margin: 0,
        padding: 0,
        overflowX: 'hidden', // Prevent horizontal scrolling
        position: 'relative', // Create a new stacking context
        backgroundColor: '#F3F3F3' // background color that matches the design
      }}>
        {children}
      </body>
    </html>
  );
}
