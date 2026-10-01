# Personal website template

A minimal personal portfolio site for CS students, styled after [rishabh-ranjan.github.io](https://github.com/rishabh-ranjan/rishabh-ranjan.github.io). Built with Next.js so all the content lives in one typed config file instead of raw HTML.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Making it yours

Everything you need to edit lives in **`lib/config.ts`**: your name, bio, links, experience, projects, news, and footer. You shouldn't need to touch any other file for a basic site.

Text fields in `lib/config.ts` support a tiny inline markup, handled by `lib/inline.tsx`:

- `**bold**`
- `_italic_`
- `__underline__`
- `[label](https://example.com)` for links
- `{name}` expands to your `name` from `lib/config.ts`

Assets go in `public/`:

- Replace `public/profile-placeholder.svg` with your own headshot and point `profilePic` in `lib/config.ts` at it.
- Drop your resume into `public/` (e.g. `public/resume.pdf`) and reference it from `lib/config.ts`.

## Deploying

Push to GitHub and deploy on [Vercel](https://vercel.com/new), or run `pnpm build && pnpm start` to serve it yourself. Once you know your domain, update `siteUrl` in `lib/config.ts` — it drives canonical links, Open Graph/Twitter cards, and `sitemap.xml`/`robots.txt`.
