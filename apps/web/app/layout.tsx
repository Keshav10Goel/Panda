import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panda — Cycle / Context",
  description:
    "A private menstrual health intelligence platform for college life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}