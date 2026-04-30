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
    <div data-aos="fade-right">
      <div className="grid grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 ">
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
    </div>
  );
}
