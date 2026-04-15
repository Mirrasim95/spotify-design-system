"use clinet";

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
    <aside className="border-r border-gray-500 bg-black flex flex-col h-100vh w-xs">
      <Image
        src="./spotify-logo.svg"
        width={200}
        height={200}
        alt="Spotify logo"
      />
      {nav.map((item) => (
        <Link key={item.href} href={item.href} className="flex text-gray-100">
          <span>{item.label}</span>
          {item.text}
        </Link>
      ))}
    </aside>
  );
};
