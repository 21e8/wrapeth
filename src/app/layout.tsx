import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./_providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WrapEth",
  description: "Wrap and unwrap your ETH/WETH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
