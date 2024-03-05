import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/ui";
import SupabaseProvider from "@/providers/SupabaseProvider";
import { UserProvider } from "@/providers";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
        <SideBar>{children}</SideBar>
        </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
