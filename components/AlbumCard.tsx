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
    <div className="hover:bg-[#282828] transition delay-150 ease-in-out p-3 rounded-lg cursor-pointer ">
      <Image
        src={images[0].url}
        alt="album image"
        width={150}
        height={150}
        className="rounded-sm w-full aspect-square object-cover"
      />
      <p className="mt-2 text-sm">{name}</p>
      <p className="text-gray-400 text-xs">
        {artists.map((a) => a.name).join(", ")}
      </p>
    </div>
  );
}
