import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
import Header from "@/components/Header";
import { Heebo, Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heebo = Heebo({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-heebo",
});

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "MyStore — Your Favorite Products",
  description:
    "Browse and shop high-quality products at MyStore. Find detailed descriptions, prices, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${roboto.variable}  antialiased`}>
        <ReduxProvider>
          <Toaster position="top-right" />
          <Header />
          <main className="pt-16">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
