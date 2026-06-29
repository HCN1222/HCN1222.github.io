# Cheng-Ning Huang — Personal Website

Personal portfolio site built with [Next.js](https://nextjs.org) on the
[Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template
(by [Once UI](https://once-ui.com)) and deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

- Profile, experience, education, and skills: `src/resources/content.tsx`
- Site settings (theme, routes, base URL): `src/resources/once-ui.config.ts`
- Projects: add an `.mdx` file under `src/app/work/projects/`
- Images: `public/images/` (replace `avatar.jpg` with your own photo)

## Deployment

Connected to Vercel; pushes to `main` deploy automatically.
