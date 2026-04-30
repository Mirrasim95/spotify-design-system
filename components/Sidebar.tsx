"use client";

import clsx from "clsx";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "🏠", text: "Home" },
  { href: "/search", label: "🔍", text: "Search" },
  { href: "/library", label: "📚", text: "Your Library" },
  { href: "/liked", label: "💚", text: "Liked Songs" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // закрывать при переходе на страницу
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* hamburger кнопка — только на мобильном */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-black dark:bg-white text-white dark:text-black p-2 rounded-md"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* затемнение фона при открытом sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={clsx(styles.sidebar, isOpen && styles.sidebarOpen)}>
        <button
          className="fixed top-4 left-4 z-50 md:hidden bg-black dark:bg-white text-white dark:text-black p-2 rounded-md"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>
        <Link href={"/"}>
          <Image
            src="/spotify-logo.svg"
            width={150}
            height={50}
            alt="Spotify logo"
            className="mb-6 mt-10"
          />
        </Link>

        <div className={styles.nav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                styles.navLink,
                pathname === item.href && styles.navLinkActive,
              )}
            >
              <span>{item.label}</span>
              <span className={styles.linkText}>{item.text}</span>
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </aside>
    </>
  );
};
