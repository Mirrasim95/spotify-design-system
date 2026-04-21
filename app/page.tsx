"use client";
import { useEffect, useState } from "react";
import AlbumList from "@/components/AlbumList";

type Album = {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
};

export default function Home() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    async function fetchSpotify() {
      const tokenRes = await fetch("/api/token");
      const tokenData = await tokenRes.json();

      const token = tokenData.access_token;

      const res = await fetch(
        `https://api.spotify.com/v1/search?q=eminem&type=album&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();
      setAlbums(data.albums.items);

      console.log(data);
    }

    fetchSpotify();
  }, []);

  return (
    <div className="p-5">
      <AlbumList albums={albums} />
    </div>
  );
}
