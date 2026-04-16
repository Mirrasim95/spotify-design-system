"use client";

import { useEffect, useState } from "react";

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
      <div className="flex items-center justify-between fixed bottom-0 left-0 w-full h-25 bg-black text-gray-400 ">
        <div className="flex-1 items-center"></div>
        <div className="flex-1 flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-5">
            <button onClick={() => setIsActive((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isActive ? "text-white" : "hover:text-white"}
              >
                <path d="m18 14 4 4-4 4" />
                <path d="m18 2 4 4-4 4" />
                <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
                <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
                <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
              </svg>
            </button>

            <button onClick={() => setProgress((prev) => (prev = 0))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-skip-back-icon lucide-skip-back hover:text-white"
              >
                <path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
                <path d="M3 20V4" />
              </svg>
            </button>

            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="scale-130 transition duration-200 active:scale-110 "
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-pause-icon lucide-circle-pause hover:text-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="10" x2="10" y1="15" y2="9" />
                  <line x1="14" x2="14" y1="15" y2="9" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-play-icon lucide-circle-play hover:text-white"
                >
                  <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
            </button>

            <button onClick={() => setProgress((prev) => (prev = 0))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-skip-forward-icon lucide-skip-forward hover:text-white"
              >
                <path d="M21 4v16" />
                <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
              </svg>
            </button>

            <button
              onClick={() => setIsRepead((prev) => !prev)}
              className="hover:text-white"
            >
              {isRepeat ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-repeat1-icon lucide-repeat-1"
                >
                  <path d="m17 2 4 4-4 4" />
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                  <path d="m7 22-4-4 4-4" />
                  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                  <path d="M11 10h1v4" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-repeat-icon lucide-repeat"
                >
                  <path d="m17 2 4 4-4 4" />
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                  <path d="m7 22-4-4 4-4" />
                  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-100 flex items-center gap-3 text-white pt-2">
              <span className="text-xs">0:45</span>

              <div className="flex-1 h-1 bg-gray-600 rounded-full relative">
                <div
                  className="h-1 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="text-xs">3:20</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center gap-3 justify-center">
            <button
              onClick={() => setIsMute((prev) => !prev)}
              className="hover:text-white "
            >
              {isMute ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-volume-off-icon lucide-volume-off"
                >
                  <path d="M16 9a5 5 0 0 1 .95 2.293" />
                  <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
                  <path d="m2 2 20 20" />
                  <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
                  <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-volume2-icon lucide-volume-2"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <path d="M16 9a5 5 0 0 1 0 6" />
                  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                </svg>
              )}
            </button>
            <div className="w-24 flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-24 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600 h-1 color-red fixed bottom-0 left-0 w-full flex justify-end items-center p-2 font-medium text-xs hover:underline">
        <p> Playin here: Web Player (Chrome)</p>
      </div>
    </div>
  );
}
