import { Anuphan, Charm, Sriracha } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const anuphan = Anuphan({
  subsets: ["latin"],
});
const charm = Charm({
  weight: ["400", "700"],
  subsets: ["thai"],
});
const sriracha = Sriracha({
  weight: ["400"],
  subsets: ["thai"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.DOMAIN_NAME}`),
  alternates: { canonical: "./" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${charm.className} ${sriracha.className}`}>
      <body className={`${anuphan.className} antialiased text-lg bg-[#E8E8E8]`}>
        {children}
      </body>
    </html>
  );
}
