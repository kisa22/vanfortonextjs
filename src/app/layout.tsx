import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Van | Portofolio",
  description:
    "“Van is a web developer who just started his career journey 6 months ago. Currently, he is pursuing higher education as a student at Politeknik Negeri Lampung.”"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-secondary text-color-darker pt-28 sm:pt-26`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
