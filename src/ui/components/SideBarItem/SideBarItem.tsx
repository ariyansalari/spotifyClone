import Link from "next/link";
import { SideBarItemProps } from "./sideBarItem.interface";
import { twMerge } from "tailwind-merge";

export const SideBarItem: React.FC<SideBarItemProps> = ({
  icon:Icon,
  href,
  label,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
   <Icon size={26}/>
   <p className="w-full truncate">{label}</p>
    </Link>
  );
};
