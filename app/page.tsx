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
    }

    fetchSpotify();
  }, []);

  return (
    <div>
      <h2 className="text-white text-xl font-bold mt-5 ml-5 hover:underline cursor-pointer">
        Albums
      </h2>
      <AlbumList albums={albums} />

      <h2 className="text-white text-xl font-bold mt-5 ml-5 hover:underline cursor-pointer">
        Tracks
      </h2>
      <TrackList tracks={tracks} />
    </div>
  );
}
