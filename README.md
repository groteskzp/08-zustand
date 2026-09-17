# NoteHub — Homework 08 (Zustand)

GoIT Next.js homework: a NoteHub client for creating, browsing, filtering, and deleting personal notes. Drafts on the create-note page are stored with Zustand (`persist`) so they survive a page reload.

Notes are loaded from the public NoteHub API (`https://notehub-public.goit.study/api`).

## Live demo

[https://08-zustand-liart-eight.vercel.app](https://08-zustand-liart-eight.vercel.app)

## Features

- Home page with a short NoteHub overview and header/footer layout
- Notes list with server prefetch and client rendering via TanStack Query
- Debounced keyword search (300 ms)
- Pagination (12 notes per page; pager is shown when there is more than one page)
- Tag filter sidebar: All notes, Todo, Work, Personal, Meeting, Shopping
- Dedicated create-note page (`/notes/action/create`) with title, content, and tag
- Zustand draft store (`notehub-draft`) that restores title, content, and tag after reload
- Delete a note from the list
- Note details page (`/notes/[id]`)
- Intercepting-route modal preview when a note is opened from the list (close via button, backdrop, or Escape)
- Custom 404 page and route-level error UI (with retry on notes list and note details)

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Zustand (with `persist`)
- TanStack Query
- Axios
- react-paginate
- use-debounce
- modern-normalize
- next/font (Roboto)
- ESLint (`eslint-config-next`)


## Getting started

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/groteskzp/08-zustand.git
cd 08-zustand
npm install
```

2. Create a `.env.local` file in the project root and add your NoteHub token:

```bash
NEXT_PUBLIC_NOTEHUB_TOKEN=your_token_here
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in the browser.

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Start the Next.js development server |
| `build` | `npm run build` | Create a production build |
| `start` | `npm start` | Serve the production build |
| `lint` | `npm run lint` | Run ESLint |
