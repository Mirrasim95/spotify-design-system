"use client";
import { useEffect, useState } from "react";
import AlbumList from "@/components/AlbumList";
import TrackList from "@/components/TrackList";

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
      const resTrack = await fetch(
        `https://api.spotify.com/v1/search?q=eminem&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const trackData = await resTrack.json();
      console.log("trackData:", trackData);
      const data = await res.json();
      setTracks(trackData.tracks.items);
      setAlbums(data.albums.items);

      console.log(data);
    }

    fetchSpotify();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-white text-xl font-bold mb-4">Albums</h2>
      <AlbumList albums={albums} />

      <h2 className="text-white text-xl font-bold mt-8 mb-4">Tracks</h2>
      <TrackList tracks={tracks} />
    </div>
  );
}
