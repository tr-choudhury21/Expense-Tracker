import {Inter, Outfit} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FinTrack Flow",
  description: "AI powered financial tracker",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider 
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >

      <html lang="en">
        <body
          className={outfit.className}
        >
          {children}
        </body>
      </html>

    </ClerkProvider>
  );
}
