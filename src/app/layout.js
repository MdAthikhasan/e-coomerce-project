import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/Header";
import "./reset.css";

import SessionProvider from "@/app/components/sessionProvider/SessProvider";
import Footer from "./footer/footer";
import ReduxProvider from "../redux/storeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce project",
  description: "Our E-commerce project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <SessionProvider>
            <ReduxProvider>
              <Header />
              {children}
              <Footer />
            </ReduxProvider>
          </SessionProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
