# Nirawastaken Portfolio

A high-performance, modern cyber-futuristic portfolio built with vanilla HTML, modern CSS, and browser JavaScript. No Node build tools, npm packages, or PHP backend are required to run the site.

## Key Features

- **Cyber-Engineering Visual System**: Deep dark aesthetic (`#05090d`) with electric cyan highlights, glassmorphic headers, responsive layouts, and an ambient cursor spotlight.
- **Modern Typography**: High-impact Google Fonts (`Space Grotesk`, `Plus Jakarta Sans`, and `JetBrains Mono`) with resilient system fallbacks.
- **Interactive Terminal in About**: Formatted, syntax-highlighted identity JSON with 1-click clipboard copy.
- **Dynamic Hero Subtitle**: Animated typing effect rotating through engineering domains (AI & ML, Computer Vision, Embedded IoT, Full-Stack).
- **Interactive Project Filter**: Real-time filtering by category (`All`, `Built`, `AI & Vision`, `Hardware & IoT`, `Ideas & Concepts`).
- **1-Click Email Copy with Toast Notification**: Instant clipboard copying with sleek animated toast feedback.
- **ScrollSpy Navigation**: Header navigation links dynamically highlight based on the current scroll position.
- **Floating Back-to-Top Button**: Smooth 1-click scroll restoration.
- **Text-Driven Content**: Update your bio, contacts, skills, and projects simply by editing `portfolio.txt` and `projects.txt`.

## Run Locally on Windows

Open PowerShell in this folder and run:

```powershell
py -m http.server 8000
```

Then navigate to [http://localhost:8000](http://localhost:8000). You can also open `index.html` directly in any web browser.

## Updating Your Profile

Edit `portfolio.txt`. It contains the profile, bio, contact links, skills, and education details displayed on the page. Keep each entry on one line in `key=value` format. Separate multiple About paragraphs with `|` and separate skills with commas.

## Adding or Editing Projects

Edit `projects.txt` and add one project per line using this format:

```text
Project Title | CATEGORY · DOMAIN | Description of the system. | Stack one, Stack two | Status | https://optional-repo-or-demo-link
```

Status can be `BUILT`, `PROTOTYPE`, or `IDEA`. Save the file and refresh your browser to view updates.

## Privacy & Publishing

- Zero cookies, zero tracking scripts, and zero external trackers.
- Accessible: Screen-reader skip links, keyboard focus rings (`:focus-visible`), and `prefers-reduced-motion` compliance.
- Deploy simply by uploading all files and the `public/` folder to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or any static web host.
