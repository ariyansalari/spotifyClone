'use client'

import { useLoadImage } from "@/hooks";
import { Song } from "@/types"
import Image from "next/image";

interface MediaItemProps {
    data:Song;
    onClick?:(id:string)=>void
}
export const MediaItem:React.FC<MediaItemProps> = ({data,onClick}) => {
    const imageUrl=useLoadImage(data)
    const handleClick =()=>{
        if(onClick){
            return onClick(data.id)
        }
    }
  return (
   <div onClick={handleClick} className="flex items-center hover:bg-neutral-800/50 p-2 w-full rounded-md cursor-pointer gap-x-3">
    <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image fill src={imageUrl || ''} alt="mediaItem" className="object-cover"/>

    </div>
    <div className="flex flex-col overflow-hidden gap-y-1 ">
<p className="text-white truncate">
    {data.title}
</p>
<p className="text-neutral-400 text-sm truncate">{data.author}</p>
    </div>
    </div>
  )
}
