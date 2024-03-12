"ues client";

import { useAuthModal, useUploadModal, useUser } from "@/hooks";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

export const LibrarySidebar = () => {
  const authModal=useAuthModal()
  const uploadModal=useUploadModal()
const {user }=useUser()
  const onClick = () => {
    if(!user){
      return authModal.onOpen()
    }
    return uploadModal.onOpen()
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md ">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
    </div>
  );
};
