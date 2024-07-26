import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import SideNav from "./dashboard/_components/SideNav";
import Header from "./dashboard/_components/Header";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ai content creater",
  description: "this ai tool is for to creating article and post",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
        <body >
          {
          <div>
            <div className='md:w-64 hidden md:block fixed'>
              <SideNav />
              <h1>Hello</h1>
            </div>
            <div className='md:ml-64'>
              <Header />
              {children}
            </div>
          </div>    
          }
        </body>
    </html>
    </ClerkProvider>
  );
}