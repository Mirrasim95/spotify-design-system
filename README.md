# Spotify Design System

A Spotify-inspired music platform built with Next.js, Tailwind CSS, and the Spotify Web API.

---

## Features

- 🎵 Real Spotify API integration (albums, tracks, search)
- 🌙 Light / Dark theme switching with smooth transitions
- 🔍 Search by artist, album, or track
- 🎛️ Interactive PlayingBar with play/pause, shuffle, repeat, volume control
- 📱 Fully responsive layout with mobile sidebar
- 💀 Skeleton loading states while data loads
- 🎨 CSS Modules for component-scoped styling
- ✨ Micro-interactions and hover animations

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **CSS Modules**
- **Spotify Web API**
- **next-themes** (dark/light mode)
- **clsx** (conditional classnames)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Mirrasim95/spotify-design-system.git
cd spotify-design-system
```

Install dependencies:

```bash
npm install
```

## Getting Spotify API Keys

To use the Spotify API you need to create a free developer account:

1. Go to [https://developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account (or create one for free)
3. Click **"Create App"**
4. Fill in:
   - **App name:** anything you want (e.g. `spotify-design-system`)
   - **App description:** anything
   - **Redirect URI:** `http://localhost:3000`
   - Check the **Web API** checkbox
5. Click **Save**
6. Open your app and click **Settings**
7. Copy your **Client ID** and **Client Secret**

Create a `.env.local` file in the root of the project:

```env
SPOTIFY_CLIENT_ID=paste_your_client_id_here
SPOTIFY_CLIENT_SECRET=paste_your_client_secret_here
```

Run the project:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
spotify-design-system/
├── app/
│   ├── layout.tsx              # Root layout with Sidebar and PlayingBar
│   ├── page.tsx                # Home page (albums + tracks)
│   ├── search/
│   │   └── page.tsx            # Search page
│   ├── library/
│   │   └── page.tsx            # Your Library page
│   └── liked/
│       └── page.tsx            # Liked Songs page
├── components/
│   ├── Sidebar.tsx             # Navigation sidebar (responsive)
│   ├── Sidebar.module.css      # CSS Modules for Sidebar
│   ├── PlayingBar.tsx          # Music player (composed of sub-components)
│   ├── TrackInfo.tsx           # Track info (left section of PlayingBar)
│   ├── PlayerControls.tsx      # Play controls (center section)
│   ├── VolumeControl.tsx       # Volume control (right section)
│   ├── AlbumCard.tsx           # Album card with hover animation
│   ├── AlbumList.tsx           # Responsive grid of album cards
│   ├── TrackRow.tsx            # Single track row
│   ├── TrackList.tsx           # List of tracks
│   ├── SkeletonCard.tsx        # Loading skeleton for albums
│   ├── ThemeToggle.tsx         # Dark/Light toggle button
│   └── ThemeProvider.tsx       # Theme provider wrapper
├── public/
│   └── spotify-logo.svg
└── README.md
```

---

## Pages

| Route      | Description                           |
| ---------- | ------------------------------------- |
| `/`        | Home — featured albums and top tracks |
| `/search`  | Search artists, albums, tracks        |
| `/library` | Your library                          |
| `/liked`   | Liked songs                           |

---

## Key Improvements

### CSS Modules

Sidebar uses `Sidebar.module.css` for scoped, maintainable styles instead of inline Tailwind classes.

### Mobile Responsive

- Sidebar hides on mobile with hamburger menu button
- Album grid adapts: 2 cols on mobile → 6 cols on large screens
- Track album column hidden on small screens

### PlayingBar Split into Components

- `TrackInfo` — album cover, title, artist
- `PlayerControls` — shuffle, prev, play/pause, next, repeat, progress bar
- `VolumeControl` — mute button and volume slider

### Skeleton Loading

Albums show animated skeleton cards while data loads from Spotify API.

### Animations

- Album cards show a green play button on hover with smooth opacity transition
- Theme switching with smooth color transitions

---

## Design System

- **Colors:** Spotify green `#1DB954`, dark `#121212`, card `#181818`
- **Typography:** Geist Sans, Geist Mono
- **Theme:** Full light/dark mode support via `next-themes`
- **Components:** Reusable, typed with TypeScript interfaces

---

## Screenshots

See `screenshots/` folder for light and dark mode previews.

---

### The Core Team

suleyma_mi

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
