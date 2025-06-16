import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import { Providers } from '@/redux/provider';


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "MD. Abu Hanif | Full-Stack Developer",
    template: "%s | MD. Abu Hanif"
  },
  description: "Professional portfolio of MD. Abu Hanif, a Full-Stack Developer specializing in React, Next.js, Node.js and modern web technologies.",
  keywords: ["Full-Stack Developer", "Web Developer", "React Developer", "Next.js Developer", "Frontend Developer", "Backend Developer", "Bangladesh"],
  authors: [{ name: "MD. Abu Hanif" }],
  creator: "MD. Abu Hanif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abuhanif.vercel.app",
    title: "MD. Abu Hanif | Full-Stack Developer",
    description: "Professional portfolio of MD. Abu Hanif, a Full-Stack Developer specializing in React, Next.js, Node.js and modern web technologies.",
    siteName: "MD. Abu Hanif Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Abu Hanif | Full-Stack Developer",
    description: "Professional portfolio of MD. Abu Hanif, a Full-Stack Developer specializing in React, Next.js, Node.js and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
