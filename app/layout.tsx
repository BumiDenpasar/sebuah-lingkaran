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
      <body className="flex justify-center items-center font-jakarta transition-colors duration-500 bg-purple-100 dark:bg-black">
          {children}
      </body>
    </html>
  );
}
