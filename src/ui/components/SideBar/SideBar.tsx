 'use client'
import { Box } from "@/ui";
import { usePathname } from "next/navigation";
import React, { ReactNode, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
interface SideBarType {
  children: ReactNode;
}
export const SideBar: React.FC<SideBarType> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ];
  }, [pathname]);
  return (
    <div className="h-full flex">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          SideBar Navigation
        </Box>
        <Box className="overflow-y-auto h-full">
          Song Library
        </Box>
      </div>
    </div>
  );
};
