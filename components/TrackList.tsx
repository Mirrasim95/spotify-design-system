type Track = {
  id: string;
  name: string;
  duration_ms: number;
  album: Album;
  artists: { name: string }[];
};

type Album = {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
};

interface TrackRowProps {
  index: number;
  track: Track;
}

export default function TrackRow({ index, track }: TrackRowProps) {
  return (
    <div className="grid grid-cols-4 items-center px-4 py-2 hover:bg-[#282828] rounded-md group">
      {/* 1. номер */}
      {/* 2. обложка + название + артист */}
      {/* 3. альбом */}
      {/* 4. длительность */}
    </div>
  );
}
