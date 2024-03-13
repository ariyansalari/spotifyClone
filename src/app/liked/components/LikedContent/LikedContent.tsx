'use client'

import { useOnPlay, useUser } from "@/hooks";
import { Song } from "@/types";
import { LikeButton, MediaItem } from "@/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
  songs: Song[];
}
export const LikedContent: React.FC<LikedContentProps> = ({songs}) => {
  const router = useRouter();
  const onPlay=useOnPlay(songs)
  const { isLoading, user } = useUser();
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);
  if(songs?.length===0){
    return (
        <div className="flex flex-col gap-y w-full px-6 text-neutral-400">
No Liked songs.
        </div>
    )
  }
  return <div className="flex flex-col gap-y-2 w-full p-6">
    {songs?.map((item)=>(
        <div key={item.id} className="flex items-center gap-x-4 w-full">
<div className="flex-1">
    <MediaItem data={item} onClick={(id:string)=>onPlay(id)} />
</div>
<LikeButton songId={item.id} />
        </div>
    ))}
  </div>;
};
