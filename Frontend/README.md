# CODE-REVIEWER — Frontend

A small React + Vite UI that allows you to paste JavaScript code, send it to the backend, and display an AI-generated review in markdown.

## Overview
- Built with Vite and React.
- Editor: `react-simple-code-editor` with Prism highlighting.
- Sends code to the backend endpoint `POST /ai/get-review` and renders the returned markdown.

## Prerequisites
- Node.js (v16+ recommended)
- npm

## Setup
1. Open a terminal and change to the Frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

## Run (Development)

```bash
npm run dev
```

Vite starts a dev server (default `http://localhost:5173`). Open the URL printed by Vite.

## Build / Preview
- Build for production:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

## Configuration / Backend URL
- By default the frontend sends requests to `http://localhost:3000/ai/get-review` (see `src/App.jsx`).
- If your backend runs on a different host/port, update the URL in `src/App.jsx` or implement an environment-based configuration.

## How to use
1. Start the Backend (see Backend/README.md) on port 3000.
2. Start this frontend with `npm run dev`.
3. Paste or edit code in the left editor pane and click the `Review` button.
4. The AI-generated review will appear on the right as rendered markdown.

## Troubleshooting
- CORS: If you see CORS errors, ensure the backend has CORS enabled (it does in this repo). Confirm frontend is calling the correct backend origin.
- No response / network errors: Confirm backend is running and reachable at the configured URL.
- Build issues: Ensure Vite and Node versions are compatible and dependencies are installed.

## Files of interest
- `src/App.jsx` — main UI, editor, and API call (see the `axios.post` URL).
- `src/main.jsx` — app entry point.
- `index.html`, `App.css` — UI shell and styles.

## Development notes
- The UI posts raw code and expects a markdown/text response from the backend — the frontend does not parse AI internals.
- Consider moving the backend URL into a `.env` (Vite uses `VITE_` prefixed variables) if you plan to deploy or change endpoints frequently.

## License / Contributing
- Small demo app; contributions welcome. Please send PRs or issues for UI/UX improvements.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
