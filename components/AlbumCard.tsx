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
    <div className="bg-[#181818] hover:bg-[#282828] transition p-4 rounded-lg cursor-pointer">
      <Image
        src={images[0].url}
        alt="album image"
        width={150}
        height={150}
        className="rounded-sm"
      />
      <p>{name}</p>
      <p>{artists.map((a) => a.name).join(", ")}</p>
    </div>
  );
}
