# Horizon Esports Academy — React Version

Same design, same content, same Express API — the frontend is now built with
React (Vite) instead of vanilla HTML/CSS/JS.

## What changed
- `index.html` + `main.js` → React components under `src/components/`
  (Nav, Hero, TournamentDashboard, Registration, About, ComingSoon,
  Sponsors, Gallery, Testimonials, FAQ, Footer), wired together in `src/App.jsx`.
- `style.css` → copied as-is to `src/index.css`. No visual changes.
- `server.js` → same Express API (`/api/games`, `/api/tournaments/:id`,
  `/api/register`), now serving the built React app from `dist/` instead of
  a static `public/` folder.
- `data/games.js` and `data/tournaments.js` are included (these were
  referenced by the original `server.js` but weren't in the upload, so
  sample data matching the site's content was added — edit freely).

## Install
```bash
npm install
```

## Development (hot reload)
Run the API and the Vite dev server in two terminals:
```bash
npm run server   # Express API on http://localhost:3000
npm run dev      # Vite dev server on http://localhost:5173 (proxies /api to :3000)
```
Open http://localhost:5173 while developing — `/api/*` calls are proxied to
the Express server automatically (see `vite.config.js`).

## Production
```bash
npm run build    # builds the React app into /dist
npm run server   # Express now serves /dist AND the /api/* routes on :3000
```
Open http://localhost:3000 — one server, one port, same as the original app.

## Notes
- Registrations are still stored in `data/registrations.json` (created
  automatically), exactly like before.
- No UI library was added — all styling is your original `style.css`,
  untouched.
