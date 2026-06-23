import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build in Sydney",
  description:
    "A guide to the Sydney startup and tech ecosystem — how it works, where the energy is, and how to plug in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="notion-html notion-light-theme notion-front-page">
      <head>
        {/* Notion's own self-contained stylesheets, mirrored locally. */}
        <link rel="stylesheet" href="/_assets/77281-2f413b88f4946a95.css" />
        <link rel="stylesheet" href="/_assets/main-3263723a73dde5aa.css" />
        <link rel="stylesheet" href="/print.e3e8b7a8.css" media="print" />
      </head>
      <body className="notion-body">{children}</body>
    </html>
  );
}
