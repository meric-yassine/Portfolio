# Student developer portfolio

Minimal single-page portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**. All text and links are centralized in `src/data/portfolio.ts`. Section titles and short intros live in **`SECTION_COPY`** at the top of that file.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit your content

See `src/data/portfolio.ts` — search for `TODO_REPLACE` and update:

- Name, title, email, GitHub, LinkedIn  
- Profile image path (`PROFILE_IMAGE_SRC`) and résumé PDF path (`RESUME_PDF_PATH`)  
- Hero, about, philosophy, résumé blurb  
- Academic credentials, projects, capstone tabs, professional samples  

Add your photo and PDF under `public/` (e.g. `public/profile.jpg`, `public/resume.pdf`) and point the constants to those filenames.

## Deploy on Vercel

1. Push this folder to a GitHub repository.  
2. Go to [vercel.com](https://vercel.com), sign in, and **Add New Project**.  
3. Import the repo, keep the default Next.js settings, and deploy.  

Vercel will run `npm run build` and host the static output. No backend or environment variables are required for the default setup.
