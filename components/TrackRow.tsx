import Image from "next/image";

interface Track {
  id: string;
  name: string;
  duration_ms: number;
  album: Album;
  artists: { name: string }[];
}

interface Album {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
}

interface TrackRowProps {
  index: number;
  track: Track;
}

const formatTime = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export default function TrackRow({ index, track }: TrackRowProps) {
  return (
    <div className="flex justify-start items-center px-4 py-2 hover:bg-[#282828] rounded-md cursor-pointer overflow-hidden">
      <span className="text-gray-400 w-[5%]">{index + 1}</span>

      <div className="flex items-center gap-3 overflow-hidden w-[50%]">
        <Image
          src={track.album.images[0].url}
          alt="track image"
          width={40}
          height={40}
          className="shrink-0"
        />
        <div className="overflow-hidden">
          <p className="truncate">{track.name}</p>
          <p className="text-gray-500 text-sm truncate">
            {track.artists.map((a) => a.name).join(", ")}
          </p>
        </div>
      </div>

      <span className="text-gray-400 truncate overflow-hidden text-sm w-[40%]">
        {track.album.name}
      </span>

      <span className="text-gray-400 w-[5%]">
        {formatTime(track.duration_ms)}
      </span>
    </div>
  );
}
