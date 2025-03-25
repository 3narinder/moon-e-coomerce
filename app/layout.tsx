import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Moon",
  description: "Shop the best ceramics",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col">
        {" "}
        <Navbar />
        <main className="flex-1 pt-[75px]"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
