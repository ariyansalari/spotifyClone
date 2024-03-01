"use client";
import React from "react";
import { ListItemHomeProps } from "./listItemHomse.interface";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export const ListItemHome: React.FC<ListItemHomeProps> = ({
  href,
  image,
  name,
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative flex group items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px] ">
        <Image className="object-cover " fill src={image} alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-400 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 text-black">
        <FaPlay />
      </div>
    </button>
  );
};
