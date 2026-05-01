"use client";

import { useEffect, useState } from "react";
import TrackInfo from "./TrackInfo";
import PlayerControls from "./PlayerControls";
import VolumeControl from "./VolumeControl";

export default function PlayingBar() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRepeat, setIsRepead] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div>
      <div className="flex items-center fixed bottom-0 left-0 w-full h-25 bg-white/80 dark:bg-black/30 backdrop-blur-md text-black dark:text-white max-md:h-20">
        {" "}
        <TrackInfo />
        <PlayerControls
          isRepeat={isRepeat}
          setIsRepead={setIsRepead}
          isActive={isActive}
          setIsActive={setIsActive}
          progress={progress}
          setProgress={setProgress}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <VolumeControl
          volume={volume}
          setVolume={setVolume}
          isMute={isMute}
          setIsMute={setIsMute}
        />
      </div>
      <div className="bg-green-600 h-3 color-red fixed bottom-0 left-0 w-full flex justify-end items-center p-2  font-medium text-xs hover:underline max-md:hidden">
        <p> Playin here: Web Player (Chrome)</p>
      </div>
    </div>
  );
}
