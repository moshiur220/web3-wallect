import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { authConnector } from "@web3modal/wagmi";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, arbitrum, base, sepolia } from "wagmi/chains";

// Get projectId from https://cloud.walletconnect.com
export const projectId = "enter your project id";

if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
  name: "appkit-app",
  description: "Wallet Connect App",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

// Create wagmiConfig
const chains = [mainnet, arbitrum, base, sepolia];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: true, // default to true
    socials: ["github", "google", "x", "discord", "apple"],
    showWallets: true, // default to true
    walletFeatures: true // default to true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
});