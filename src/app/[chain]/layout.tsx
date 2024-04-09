import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CandyWrap",
  description: "Wrap and unwrap your ETH/WETH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
