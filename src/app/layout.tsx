import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import Header from "@/components/navigation/Header";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: '%s | BJR Art',
        default: 'BJR Art',
    },
  description: "Art from Arkansas painter Brent J Rowley",
    metadataBase: new URL('https://brentjrowley.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body className={`${anton.variable} ${spaceGrotesk.variable}`}>

      <header>
          <NavBar/>
      </header>
      {children}
      <Footer/>
      </body>
      </html>
  )
}
