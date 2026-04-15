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
    <aside className="border-r border-gray-500 bg-gray-900 flex flex-col h-100vh w-xs gap-4 px-16 py-8">
      <Link href={"/"}>
        <Image
          src="./spotify-logo.svg"
          width={200}
          height={200}
          alt="Spotify logo"
          className="mb-10 -ml-6"
        />
      </Link>
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-100 text-xl"
        >
          <span className="pr-5">{item.label}</span>
          {item.text}
        </Link>
      ))}
    </aside>
  );
};
