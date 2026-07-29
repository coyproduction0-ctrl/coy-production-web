# Coy Production — Site web

Studio de production vidéo & photo · Paris & Laval.
Site statique (HTML / CSS / JavaScript, sans framework).

## Lancer en local
Ouvrez simplement `index.html` dans un navigateur, ou servez le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Structure
- `index.html` — page unique (SPA à routage par ancre `#/`)
- `css/style.css` — styles
- `js/script.js` — logique (routage, portfolio, formulaire, animations)
- `assets/` — logos, images, vidéos

## Mise en ligne
Compatible avec tout hébergement de fichiers statiques : Netlify, Vercel,
Cloudflare Pages ou GitHub Pages.

## Contact
Hugo Coyard — coyproduction0@gmail.com
