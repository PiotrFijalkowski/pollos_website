import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pollos - Twój Partner w Marketingu | Białystok",
    template: "%s | Pollos - Agencja Marketingowa Białystok",
  },
  description: "Kompleksowa obsługa marketingowa: Social Media, Fotografia, Wideo, Strony WWW, Kampanie Reklamowe. Działamy w Białymstoku i całej Polsce.",
  keywords: ["agencja marketingowa białystok", "social media białystok", "strony www białystok", "fotografia kulinarna", "wideo marketing", "reklamy facebook", "reklamy google"],
  openGraph: {
    title: "Pollos - Agencja Marketingowa Białystok",
    description: "Twój Partner w Marketingu. Foto, Wideo, Social Media, WWW.",
    url: "https://pollos.pl",
    siteName: "Pollos",
    locale: "pl_PL",
    type: "website",
  },
};

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeContextProvider } from "@/context/ThemeContext";
import GlobalStyles from "@/styles/GlobalStyles";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScrolling>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <StyledComponentsRegistry>
            <ThemeContextProvider>
              <GlobalStyles />
              <Navbar />
              {children}
              <Footer />
            </ThemeContextProvider>
          </StyledComponentsRegistry>
        </body>
      </SmoothScrolling>
    </html>
  );
}
