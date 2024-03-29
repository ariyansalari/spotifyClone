import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ModalProvider, ToasterProvider, UserProvider } from "@/providers";
import { PlayerBottom, SideBar } from "@/ui";
import { getSongsByUserId } from "@/actions";
import SupabaseProvider from "@/providers/SupabaseProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};
export const revalidate=0
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs=await getSongsByUserId()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
              <SideBar songs={userSongs}>{children}</SideBar>
              <PlayerBottom />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
