# Spotify Design System — Learning Insights

## What I Learned

---

### 1. Utility-First CSS with Tailwind

Before this project I was writing traditional CSS. Tailwind changed how I think about styling — instead of writing custom classes, I compose styles directly in JSX using utility classes like `flex`, `gap-4`, `rounded-lg`. This made it much faster to build UI without switching between files.

**Key insight:** Tailwind v4 uses `@import "tailwindcss"` instead of the old `@tailwind base/components/utilities` syntax. Dark mode also requires `@variant dark (&:where(.dark, .dark *))` to work correctly.

---

### 2. Next.js App Router & Layouts

I learned how the App Router works — `layout.tsx` wraps all pages, and each `page.tsx` renders inside it as `{children}`. This is how the Sidebar and PlayingBar stay fixed while only the main content changes when navigating.

**Key insight:** Components that use hooks like `usePathname` or `useTheme` must have `"use client"` at the top — otherwise Next.js treats them as Server Components and throws an error.

---

### 3. Dark / Light Theme System

Implementing theme switching taught me about hydration mismatches — the server renders with one theme but the client loads a different one. The fix was:

- Add `suppressHydrationWarning` on `<html>`
- Use `mounted` state in components that depend on the theme
- Use `next-themes` library for theme management

**Key insight:** Never render theme-dependent UI until the component is mounted on the client.

---

### 4. Spotify Web API

I learned how to authenticate with the Spotify API using Client Credentials flow — sending `client_id` and `client_secret` to get an access token, then using that token to fetch albums and tracks.

**Key insight:** The API has rate limits and returns `502 Bad Gateway` when overloaded. Always wrap API calls with error handling (`if (data.error) return`) to prevent crashes.

---

### 5. Component Architecture

I built a clear component hierarchy:

```
AlbumList → AlbumCard
TrackList → TrackRow
```

Each component has its own TypeScript interface for props. This made the code predictable and easy to debug — if a prop is wrong, TypeScript catches it immediately.

**Key insight:** Separate data (types, interfaces) from UI (components). Keep components small and focused on one job.

---

### 6. React State & useEffect

I learned when to use `useState` vs when data should come from props. The `useEffect` hook with an interval was used to animate the progress bar in PlayingBar — and I learned the importance of cleaning up intervals with `return () => clearInterval(interval)` to prevent memory leaks.

---

### 7. Responsive Layout with Flexbox

The main layout uses `display: flex` on `body` to place Sidebar and main content side by side. I learned that:

- `shrink-0` on Sidebar prevents it from collapsing
- `flex: 1` on main makes it fill remaining space
- `overflow-hidden` on body prevents double scrollbars

---

## Challenges I Faced

| Challenge                            | Solution                                                 |
| ------------------------------------ | -------------------------------------------------------- |
| Sidebar taking full width            | Added `shrink-0` and inline `style={{ width: "256px" }}` |
| Hydration mismatch with theme        | Added `suppressHydrationWarning` and `mounted` state     |
| Spotify API 502 errors               | Added `if (data.error) return` checks                    |
| Dark mode not working in Tailwind v4 | Added `@variant dark` in globals.css                     |
| PlayingBar covering content          | Added `paddingBottom: 120px` on main                     |

---

## Key Takeaways

- **Design systems** are built from small, reusable components — not big monolithic files
- **TypeScript** catches bugs before they happen — always define interfaces for props and API responses
- **Real APIs** are unpredictable — always handle errors gracefully
- **Dark mode** requires careful planning from the start, not as an afterthought
- **Next.js App Router** separates layout from content cleanly — layouts persist, pages swap
