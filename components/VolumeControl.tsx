interface VolumeControlProps {
  volume: number;
  setVolume: (value: number) => void;
  isMute: boolean;
  setIsMute: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function VolumeControl({
  volume,
  setVolume,
  isMute,
  setIsMute,
}: VolumeControlProps) {
  return (
    <div className="flex-1 flex">
      <div className="flex-1 flex items-center gap-3 justify-center max-sm:">
        <button
          onClick={() => setIsMute((prev) => !prev)}
          className="hover:text-gray-500 transition duration-200 active:scale-80 "
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
              className="lucide lucide-volume-off-icon lucide-volume-off text-red-500"
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
  );
}
