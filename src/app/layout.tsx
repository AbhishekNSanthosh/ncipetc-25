import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

export const metadata = {
  title: "NCIPETC-25",
  description:
    "Empowering Minds, Bridging Horizons: Unveiling the Future at the National Conference on Interdisciplinary Perspectives of Emerging Trends in Computing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
