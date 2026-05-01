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
    <div className="hover:bg-gray-200 dark:hover:bg-[#282828] transition ease-in-out p-3 rounded-lg cursor-pointer group">
      {" "}
      <div className="relative">
        <Image
          src={images[0].url}
          alt="album image"
          width={150}
          height={150}
          className="rounded-sm w-full aspect-square object-cover"
        />
        {/* кнопка play */}
        <button className="absolute bottom-2 right-2 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ▶
        </button>
      </div>
      <p className="mt-2 text-sm max-md:text-xs">{name}</p>
      <p className="text-gray-400 text-xs">
        {artists.map((a) => a.name).join(", ")}
      </p>
    </div>
  );
}
