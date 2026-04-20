import Image from "next/image";

interface AlbumCardProps {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
}

export default function AlbumCard({
  id,
  name,
  images,
  artists,
}: AlbumCardProps) {
  return (
    <div>
      <Image
        src={images[0].url}
        alt="album image"
        width={100}
        height={100}
        className="rounded-2xl"
      />
      <p>{name}</p>
      <p>{artists.map((a) => a.name).join(", ")}</p>
    </div>
  );
}
