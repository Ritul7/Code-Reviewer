# CODE-REVIEWER — Backend

A small Express backend that forwards code to a Google Generative AI model (Gemini) and returns a structured code review.

## Overview
- Provides a single API used by the frontend to request a code review.
- Routes:
  - `GET /` — quick health/test route (returns "Hello").
  - `POST /ai/get-review` — accepts JSON `{ "code": "..." }` and returns the AI review text.

## Prerequisites
- Node.js (v16+ recommended)
- npm
- A Google Generative AI API key (Gemini) — set in environment variable `GOOGLE_GEMINI_KEY`.

## Setup
1. Open a terminal and change to the Backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `Backend` folder with the following content:

```env
GOOGLE_GEMINI_KEY=your_api_key_here
```

Replace `your_api_key_here` with your real API key.

## Running
- Development (uses `nodemon`):

```bash
npm start
```

This starts the server on port `3000` (see `server.js`). You can also run `node server.js` for a standard Node run.

## API — Usage Example
- Request:

POST http://localhost:3000/ai/get-review

Headers: `Content-Type: application/json`

Body:

```json
{ "code": "function sum(a, b) { return a + b }" }
```

- Response: Plain text or markdown with the AI review. The exact format is produced by the service and includes a short review, issues, and suggested fixes.

## Files of interest
- `server.js` — loads `.env`, starts app.
- `src/app.js` — Express app, routes and middleware.
- `src/routes/ai.routes.js` — route definition for `/ai/get-review`.
- `src/controllers/ai.controller.js` — HTTP handling and validation.
- `src/services/ai.service.js` — integration with Google Generative AI (Gemini).

## Environment and Security
- Keep your `GOOGLE_GEMINI_KEY` secret. Do not commit `.env` to source control.
- Rate limits and quota are enforced by Google; use caution while testing.

## Troubleshooting
- CORS errors: The backend uses the `cors` middleware; ensure the frontend is calling the correct origin.
- Invalid API key or permission errors: Verify `GOOGLE_GEMINI_KEY` and check your Google Cloud console.
- If the server does not start, ensure `node` and `npm` are available in your PATH.

## Notes
- The service currently uses `gemini-2.5-flash` via `@google/generative-ai`.
- The AI prompt and response format are defined in `src/services/ai.service.js` — edit carefully if you change response parsing in the frontend.

## License / Contributing
- Small project structure; feel free to open issues or submit PRs for improvements.