<img src="public/preview.png" />

# Portfolio

This is my personal portfolio, built on top of a neobrutalism-styled Next.js Tailwind template. 

## About This Template

### Where to Find the Original Template
This project was initially scaffolded using the [Neobrutalism Portfolio Template](https://github.com/neobrutalism-templates/portfolio). 

### How to Use the Original Template
If you want to start fresh with the original template:
1. [Create a new repo](https://github.com/neobrutalism-templates/portfolio/generate) from the template.
2. Install dependencies using `pnpm i`.
3. Run the app locally using `pnpm run dev`.
4. Update `layout.tsx` metadata, `page.tsx` content, and `data/` folder content to suit your needs.
5. Refer to the [styling docs](https://neobrutalism.dev/styling) for Neobrutalism styling customizations.

---

## How I Use This Template Now

I have heavily customized and adapted this template to fit my personal needs as a Machine Learning Engineer and Data Enthusiast.

### Key Customizations & Data Management
- **Projects (`src/app/projects/page.tsx` & `src/data/projects.ts`)**: I have restructured the projects page to display a 3-column grid (on large screens) and updated the data model to include fields like `year`, `role`, and `skills`. The original aspect ratio was updated to `16/9` to better showcase project preview images. I also added dynamic handling for `Visit` and `GitHub` links.
- **Gallery (`src/app/gallery/page.tsx` & `src/data/gallery.ts`)**: I added a Gallery section to properly showcase my licenses, certifications, and credentials with preview images, also standardized to a `16/9` aspect ratio.
- **Experiences (`src/app/page.tsx`)**: I modified the homepage to include my professional timeline and removed the default skills section to focus more on my roles and descriptions.
- **Styling tweaks**: Adjusted the main layout wrapper from `750px` to `900px` to allow for wider content and project cards. Also updated the navbar (`src/components/nav.tsx`) to dynamically fit its content using `w-fit` rather than stretching the full width of the screen. I've also enforced clear visibility in dark mode (e.g., ensuring text colors turn white appropriately).

### Installation & Running Locally

This project still uses `pnpm`. To run my customized version of the portfolio locally:

```bash
# Install all dependencies
pnpm i

# Run the local development server
pnpm run dev
```

Then visit `http://localhost:3000`.
