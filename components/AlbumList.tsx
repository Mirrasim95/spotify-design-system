import AlbumCard from "./AlbumCard";

type Album = {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
};

interface AlbumListProps {
  albums: Album[];
}

export default function AlbumList({ albums }: AlbumListProps) {
  return (
    <div>
      {albums.map((item) => (
        <AlbumCard
          key={item.id}
          id={item.id}
          name={item.name}
          images={item.images}
          artists={item.artists}
        />
      ))}
    </div>
  );
}
