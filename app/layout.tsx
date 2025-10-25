import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "b402 Bullish Hub",
  description: "Connect, trade, and amplify b402 sentiment on Base",
  openGraph: {
    title: "b402 Bullish Hub",
    description: "Connect, trade, and amplify b402 sentiment on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
