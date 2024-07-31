"use client";

import CustomButton from "@/components/CustomButton";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="min-h-screen px-8 py-0 flex flex-col items-center">
      <header className="w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/company_logo.png" alt="logo" className="w-10 h-10 mr-2" />
          <div className="hidden sm:inline text-xl font-bold">WalletConnect test app</div>
        </div>
        <div className="flex items-center">
          <w3m-button />
        </div>
      </header>
      <h2 className="my-8 text-2xl font-bold leading-snug text-center">Let's connect to the app</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        {isConnected && (
          <>
            <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <h3 className="text-sm font-semibold bg-gray-100 p-2">Account button (only when connected)</h3>
              <div className="text-xs bg-gray-50 p-2 font-mono overflow-x-auto">
                {'<w3m-account-button balance={"show"} />'}
              </div>
              <div className="flex justify-center items-center p-4">
                <w3m-account-button balance={"show"} />
              </div>
            </div>
            <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <h3 className="text-sm font-semibold bg-gray-100 p-2">Account button with balance hidden</h3>
              <div className="text-xs bg-gray-50 p-2 font-mono overflow-x-auto">
                {'<w3m-account-button balance={"hide"} />'}
              </div>
              <div className="flex justify-center items-center p-4">
                <w3m-account-button balance={"hide"} />
              </div>
            </div>
          </>
        )}

        {isConnected && (
          <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <h3 className="text-sm font-semibold bg-gray-100 p-2">Network selection button</h3>
            <div className="text-xs bg-gray-50 p-2 font-mono overflow-x-auto">{"<w3m-network-button />"}</div>
            <div className="flex justify-center items-center p-4">
              <w3m-network-button />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center flex-1">
        <CustomButton />
      </div>
    </main>
  );
}
