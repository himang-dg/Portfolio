import type { Metadata } from "next";
import { Quicksand, JetBrains_Mono } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-quicksand",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
import { LanguageProvider } from "@/hooks/useTranslation";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIMANG — Web Developer & Digital Creator",
  description:
    "Portfolio of HIMANG, a web developer and digital creator specializing in modern websites, visual design, and game development.",
  keywords: [
    "HIMANG",
    "portfolio",
    "web developer",
    "digital creator",
    "Next.js",
    "Tailwind CSS",
    "Roblox developer",
    "UI/UX",
  ],
  authors: [{ name: "HIMANG", url: "https://www.himang.my.id/" }],
  openGraph: {
    title: "HIMANG — Web Developer & Digital Creator",
    description:
      "Portfolio of HIMANG, a web developer and digital creator specializing in modern websites, visual design, and game development.",
    url: "https://himang.vercel.app/",
    siteName: "HIMANG Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMANG — Web Developer & Digital Creator",
    description:
      "Portfolio of HIMANG, a web developer and digital creator.",
    creator: "@Himangmyid",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${quicksand.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
