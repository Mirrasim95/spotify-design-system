"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "🏠", text: "Home" },
  { href: "/search", label: "🔍", text: "Search" },
  { href: "/library", label: "📚", text: "Your Library" },
  { href: "/liked", label: "💚", text: "Liked Songs" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-gray-900 ">
      <Link href={"/"} className="pl-10">
        <Image
          src="./spotify-logo.svg"
          width={150}
          height={50}
          alt="Spotify logo"
          className="mb-20 m-10"
        />
      </Link>
      <div className="bg-gray-900 flex flex-col h-screen w-64 shrink-0 gap-6 pl-15 ">
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
