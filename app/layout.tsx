"use client";

import { Outfit } from "next/font/google";
import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";

const font = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const privyAppId: string = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId={privyAppId}
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
