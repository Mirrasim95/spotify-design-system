"use client";

import { useEffect, useState } from "react";
import AlbumList from "@/components/AlbumList";
import TrackList from "@/components/TrackList";
import SkeletonCard from "@/components/SkeletonCard";

type Album = {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
};

interface Track {
  id: string;
  name: string;
  duration_ms: number;
  album: Album;
  artists: { name: string }[];
}

export default function Home() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpotify() {
      const tokenRes = await fetch("/api/token");
      const tokenData = await tokenRes.json();
      const token = tokenData.access_token;

      const [res, resTrack] = await Promise.all([
        fetch(
          `https://api.spotify.com/v1/search?q=eminem&type=album&limit=10`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        ),
        fetch(
          `https://api.spotify.com/v1/search?q=eminem&type=track&limit=10`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        ),
      ]);

      const data = await res.json();
      const trackData = await resTrack.json();

      if (data.error || trackData.error) {
        console.log("Spotify API error, try again later");
        return;
      }

      if (data.albums) setAlbums(data.albums.items);
      if (trackData.tracks) setTracks(trackData.tracks.items);
      setLoading(false);
    }

    fetchSpotify();
  }, []);

  return (
    <div className="m-0">
      <div className="flex max-md:ml-10 items-center relative">
        <h2 className="text-xl font-bold mt-5 ml-5 hover:underline cursor-pointer ">
          Albums
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-spotify absolute right-5 text-5xl top-5 md:hidden"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
        </svg>
      </div>
      {loading ? (
        <div className="grid grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 ">
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <AlbumList albums={albums} />
      )}

      <h2 className="text-xl font-bold mt-5 ml-5 hover:underline cursor-pointer">
        Tracks
      </h2>
      <TrackList tracks={tracks} />
    </div>
  );
}
