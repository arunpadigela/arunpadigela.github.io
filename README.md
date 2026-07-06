# Arun Padigela — Portfolio Website

A fast, responsive, dependency-free portfolio site (pure HTML/CSS/JS — no build step required).

## Files

- `index.html` — all content (edit this to update your info)
- `styles.css` — styling (colors are CSS variables at the top of the file)
- `script.js` — mobile menu, scroll animations

## Preview locally

```bash
cd ~/Documents/Arun_Portfolio
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy for free — GitHub Pages (recommended)

1. Create a free account at https://github.com if you don't have one.
2. Create a new **public** repository named `<your-username>.github.io`
   (e.g. `arunpadigela.github.io`) — this exact name gives you the clean URL.
3. From this folder:

   ```bash
   cd ~/Documents/Arun_Portfolio
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

4. In the repo: **Settings → Pages → Source: Deploy from branch → main**.
5. Your site is live at `https://<your-username>.github.io` within a minute or two.

To update the site later: edit the files, then `git add -A && git commit -m "update" && git push`.

## Alternatives (also free)

- **Netlify** (https://app.netlify.com/drop) — drag-and-drop this folder, live instantly, free HTTPS.
- **Cloudflare Pages** — connect the GitHub repo, fastest global CDN.
- **Vercel** — connect the GitHub repo, one-click deploys.

## Custom domain (optional, ~$10–15/year)

Buy `arunpadigela.com` (Cloudflare Registrar or Namecheap are cheapest) and point it
at any of the hosts above — all of them support custom domains with free HTTPS.
