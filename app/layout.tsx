import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sebuah Lingkaran",
  description: "App by bumi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center font-jakarta bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100  dark:from-black dark:via-black dark:to-black text-black dark:text-white transition-all duration-500">{children}</body>
    </html>
  );
}
