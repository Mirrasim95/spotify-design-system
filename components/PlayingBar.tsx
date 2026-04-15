"use client";

import { useEffect, useState } from "react";

export default function PlayingBar() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRepeat, setIsRepead] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);

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
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full h-25 bg-black text-gray-400 flex justify-around pt-2.5">
        <div></div>
        <div>
          <div className="flex items-center justify-center gap-5 ">
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

            <button onClick={() => setIsPlaying((prev) => !prev)}>
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

            <button onClick={() => setIsRepead((prev) => !prev)}>
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
          <div>
            <div className="w-100 flex items-center gap-3 text-white pt-2">
              {/* current time */}
              <span className="text-xs">0:45</span>

              {/* bar */}
              <div className="flex-1 h-1 bg-gray-600 rounded-full relative">
                <div
                  className="h-1 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* total time */}
              <span className="text-xs">3:20</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-green-600 h-5 color-red fixed bottom-0 left-0 w-full flex justify-end items-center p-2 font-bold text-xs hover:underline">
        <p> Playin here: Web Player (Chrome)</p>
      </div>
    </div>
  );
}
