import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "./context/user";
import AllOverlays from "./Components/AllOverlays";


export const metadata: Metadata = {
  title: "video watch app",
  description: "watch and post video",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en">
    <UserProvider>
      <body>
        <AllOverlays />
        {children}
      </body>
    </UserProvider>
  </html>
      
  );
}
