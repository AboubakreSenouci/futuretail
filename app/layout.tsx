import localFont from "next/font/local";

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
      <head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('futuretail:desktop-sidebar-open');
                var isOpen = saved === null ? true : saved === 'true';
                document.documentElement.setAttribute('data-sidebar', isOpen ? 'open' : 'closed');
              } catch(e) {}
            `,
          }}
        /> */}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
