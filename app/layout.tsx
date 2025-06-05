import { Anuphan, Charm, Sriracha } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anuphan.className} antialiased text-lg bg-[#E8E8E8]`}>
        <h1 className={`hidden ${charm.className} ${sriracha.className}`}>
          ศรีสุราษฎร์ บ้านน็อคดาวน์
        </h1>
        {children}
      </body>
    </html>
  );
}
