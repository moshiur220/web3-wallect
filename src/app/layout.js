import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers"; // added
import { cookieToInitialState } from "wagmi"; // added
import { config } from "@/config"; // added
import Web3ModalProvider from "@/context"; // added

export const metadata = {
  title: "Wallet AppKit",
  description: "Powered by WalletConnect"
};

export default function RootLayout({
  children
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie")); // added
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}