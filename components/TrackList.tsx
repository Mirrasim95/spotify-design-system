import TrackRow from "./TrackRow";

interface Album {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
}

interface Track {
  id: string;
  name: string;
  duration_ms: number;
  album: Album;
  artists: { name: string }[];
}

interface TrackListProps {
  tracks: Track[];
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <div>
      {tracks.map((track, id) => (
        <TrackRow key={track.id} index={id} track={track} />
      ))}
    </div>
  );
}
