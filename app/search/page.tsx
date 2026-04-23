"use client";

import AlbumList from "@/components/AlbumList";
import TrackList from "@/components/TrackList";
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

    if (data.error) {
      console.log("Error:", data.error);
      return;
    }

    if (data.albums) {
      const filtered = data.albums.items.filter((album: Album) =>
        album.artists.some((a) =>
          a.name.toLowerCase().includes(query.toLowerCase()),
        ),
      );
      setAlbums(filtered);
    }

    if (data.tracks) {
      const filtered = data.tracks.items.filter((track: Track) =>
        track.artists.some((a) =>
          a.name.toLowerCase().includes(query.toLowerCase()),
        ),
      );
      setTracks(filtered);
    }
  }

  return (
    <div className="p-5">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Поиск артиста, трека..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 p-3 rounded-lg bg-[#7a7a7a] outline-none w-250"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-6 rounded-lg font-bold hover:bg-green-400 transition"
        >
          Search
        </button>
      </div>

      {albums.length > 0 && (
        <>
          <h2 className="text-white text-xl font-bold mb-4">Albums</h2>
          <AlbumList albums={albums} />
        </>
      )}

      {tracks.length > 0 && (
        <>
          <h2 className="text-white text-xl font-bold mt-8 mb-4">Tracks</h2>
          <TrackList tracks={tracks} />
        </>
      )}
    </div>
  );
}
