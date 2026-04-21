"use client";
import { useState } from "react";

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

export default function Search() {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);

  async function handleSearch() {
    if (!query) return;

    const tokenRes = await fetch("/api/token");
    const tokenData = await tokenRes.json();
    const token = tokenData.access_token;

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=album,track&limit=10`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const data = await res.json();
    setAlbums(data.albums.items);
    setTracks(data.tracks.items);
  }

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Поиск артиста, трека..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg bg-[#282828] text-white outline-none"
      />
    </div>
  );
}
