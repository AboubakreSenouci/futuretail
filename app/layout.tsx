import localFont from "next/font/local";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";

import "./globals.css";

const openSauceTwo = localFont({
  src: [
    {
      path: "../public/fonts/open-sauce-two_5.2.5/webfonts/open-sauce-two-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/open-sauce-two_5.2.5/webfonts/open-sauce-two-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/open-sauce-two_5.2.5/webfonts/open-sauce-two-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/open-sauce-two_5.2.5/webfonts/open-sauce-two-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce-two",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSauceTwo.variable}>
      <body className="min-h-full flex flex-col">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
