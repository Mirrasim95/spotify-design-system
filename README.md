# Spotify Design System

A Spotify-inspired music platform built with Next.js, Tailwind CSS, and the Spotify Web API.

---

## Features

- 🎵 Real Spotify API integration (albums, tracks, search)
- 🌙 Light / Dark theme switching
- 🔍 Search by artist, album, or track
- 🎛️ Interactive PlayingBar with play/pause, shuffle, repeat
- 📱 Responsive layout with sidebar navigation

---

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Spotify Web API**
- **next-themes** (dark/light mode)

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
│   ├── layout.tsx         # Root layout with Sidebar and PlayingBar
│   ├── page.tsx           # Home page (albums + tracks)
│   ├── search/
│   │   └── page.tsx       # Search page
│   ├── library/
│   │   └── page.tsx       # Your Library page
│   └── liked/
│       └── page.tsx       # Liked Songs page
├── components/
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── PlayingBar.tsx     # Music player controls
│   ├── AlbumCard.tsx      # Album card component
│   ├── AlbumList.tsx      # Grid of album cards
│   ├── TrackRow.tsx       # Single track row
│   ├── TrackList.tsx      # List of tracks
│   ├── ThemeToggle.tsx    # Dark/Light button
│   └── ThemeProvider.tsx  # Light/Dark theme provider
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

## Design System

- **Colors:** Spotify green `#1DB954`, dark `#121212`, card `#181818`
- **Typography:** Geist Sans, Geist Mono
- **Theme:** Full light/dark mode support via `next-themes`
- **Components:** Reusable, typed with TypeScript interfaces

---

## Screenshots

See `screenshots/` folder for light and dark mode previews.


