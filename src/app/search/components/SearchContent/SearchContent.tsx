"use client";
import { useOnPlay } from "@/hooks";
import { Song } from "@/types";
import { LikeButton, MediaItem } from "@/ui";

interface SearchContentProps {
  songs: Song[];
}
export const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay=useOnPlay(songs)
  if (songs.length === 0) {
    return (
      <div className="flex flex-col w-full px-6 text-neutral-400">
        No songs found.
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((item) => (
        <div key={item.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id:string) =>onPlay(id)} data={item} />
          </div>
          <LikeButton songId={item.id} />
        </div>
      ))}
    </div>
  );
};
