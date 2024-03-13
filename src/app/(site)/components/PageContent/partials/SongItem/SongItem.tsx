"use client";

import { useLoadImage } from "@/hooks";
import { Song } from "@/types";
import { PlayButton } from "@/ui";
import Image from "next/image";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}
export const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/50 cursor-pointer hover:bg-neutral-400/10 transition p-3"
      onClick={() => onClick(data.id)}
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover "
          src={imagePath || ""}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 w-full text-start pb-4 truncate">By {data.author}</p>
      </div>
      <div className=" absolute bottom-[100px] right-4">
       <PlayButton/>
      </div>
    </div>
  );
};
