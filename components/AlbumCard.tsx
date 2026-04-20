"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        `https://api.spotify.com/v1/search?q=eminem&type=album&limit=5`,
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
    <div>
      <h1>Albums</h1>

      {albums.map((album) => (
        <div key={album.id}>
          <Image
            src={album.images[0]?.url}
            width={100}
            height={100}
            className="w-auto"
            loading="eager"
            alt={"album image"}
          />
          <div>{album.name}</div>
          <div>{album.artists.map((a) => a.name).join(", ")}</div>
        </div>
      ))}
    </div>
  );
}
