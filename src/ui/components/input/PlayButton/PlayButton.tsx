import { FaPlay } from "react-icons/fa";

export const PlayButton = () => {
  return (
    <button className="transition opacity-0 flex items-center p-4 bg-green-500 translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 drop-shadow-md rounded-full">
      <FaPlay className="text-black" />
    </button>
  );
};
