import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lyra | Sound with soul",
  description: "Built for the voices that matter.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClerkProvider>
          {children}
        </ConvexClerkProvider>
      </body>
    </html>
  );
}
