"use client";

import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/", label: "🏠", text: "Home" },
  { href: "/search", label: "🔍", text: "Search" },
  { href: "/library", label: "📚", text: "Your Library" },
  { href: "/liked", label: "💚", text: "Liked Songs" },
];

export const Sidebar = () => {
  return (
    <aside className="bg-black">
      <Link href={"/"} className="pl-10">
        <Image
          src="./spotify-logo.svg"
          width={150}
          height={50}
          alt="Spotify logo"
          className="mb-10 m-7"
        />
      </Link>

      <div className="bg-black flex flex-col h-screen w-64 shrink-0 gap-6 pl-15 ">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition w-fit "
          >
            <span>{item.label}</span>
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
