# Federico Ahumada | Personal portfolio

A static React, TypeScript, Vite and Tailwind CSS portfolio for https://fedahumada.github.io/. Lucide supplies icons. CSS transitions and IntersectionObserver provide lightweight animation, with reduced-motion support.

## Local development

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Validate with `npm run lint` and `npm run build`. Run `npm run preview` to inspect the production build.

## Structure

```text
src/
  App.tsx                 Page sections and navigation
  main.tsx                React entry point
  components/
    ProjectCard.tsx        Reusable, data-driven portfolio cards
    VideoDialog.tsx        Native accessible video dialog
  data/
    projects.ts            Projects, demos and contributions
    experience.ts          Professional timeline
    certifications.ts      Verification links
    profile.ts             Skills, email and optional social links
  styles/main.css          Responsive styles and reduced motion
public/                    Optimized supplied images, original assets and SEO files
.github/workflows/deploy.yml
vite.config.ts
```

## Update content

Add a project to `src/data/projects.ts`; its TypeScript interface describes the fields. A YouTube video ID enables the in-page player. Keep the full YouTube URL for the external fallback. Image paths are relative to `public/` and automatically respect the Vite base path. Update experience, certifications and skills in their respective data files. Optional social links start empty and can be configured in `profile.ts`.

The supplied headshot and both project thumbnails were converted to WebP for delivery. Original plugin artwork was retained. The previous Astro implementation remains available in Git history. Tracked node_modules and Astro generated state were removed from the index; dependencies are installed from the lockfile.

## Deploy to GitHub Pages

1. In repository Settings > Pages, select GitHub Actions as the build source.
2. Merge the portfolio changes into `main`.
3. The included workflow installs dependencies, lints, builds, uploads `dist`, and deploys to GitHub Pages. Pull requests run validation without deployment.
4. Inspect the workflow's deployment URL after it succeeds.

For this repository, `fedahumada/fedahumada.github.io`, the base is `/`. For another repository, Vite derives `/repository-name/` from `GITHUB_REPOSITORY` during Actions builds. To override it, set the repository Actions variable `VITE_BASE_PATH` to `/` or `/your-repository/` as appropriate. Local builds default to `/`; to test a project path, set the environment variable `VITE_BASE_PATH=/portfolio/` before building.

For a custom domain, configure it in GitHub Pages, configure the domain's DNS, and add the domain as the only line in `public/CNAME`. Set `VITE_BASE_PATH` to `/`. Update canonical URL, Open Graph URL and image URL in `index.html`, and the URLs in `public/robots.txt` and `public/sitemap.xml`. No backend, API keys or environment secrets are needed.

## Video behavior and accessibility

Both demo images and Watch Demo buttons open a native modal dialog containing a privacy-enhanced YouTube embed. No YouTube player is loaded before interaction. The dialog traps focus, supports Escape, restores focus to the trigger, stops playback on close, and supports full screen. YouTube may require an additional tap depending on browser autoplay rules. A direct video link remains available if embedding is unavailable.

Navigation, copy-email feedback, visible keyboard focus, semantic sections, image alt text and reduced motion are included. Animations never hide essential content.

## Content and configuration

All professional claims and dates follow the supplied brief. Both additional games are explicitly In Development. No missing assets or credentials are required for the site itself. Social profiles and a custom domain are optional. Preserve English site copy and avoid double dashes or long dash punctuation in visible text.
