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
        <p className={`hidden ${charm.className} ${sriracha.className}`}>
          Add fonts
        </p>
        {children}
      </body>
    </html>
  );
}
