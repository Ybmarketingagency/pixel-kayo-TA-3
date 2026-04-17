# Pixel — Refurbished Smartphone Webshop (Static Clone)

Een visuele clone van de Pixel refurbished telefoon webshop. Puur frontend (geen backend, geen database, geen auth). Gebouwd met **Vite + React + Tailwind CSS + React Router**.

## Pagina's

- `/` — Home (hero, producten, impact, reviews, CTA)
- `/products` — Productoverzicht met filters
- `/product/:slug` — Product detail met varianten
- `/over-ons` — Over ons met missie en waarden
- `/contact` — Contact formulier
- `/verkopen` — Telefoon inruilen (4-staps)
- `/klantenservice` — FAQ met categorieën
- `/checkout` — Afrekenen (3 stappen)
- `/login` · `/register` · `/account`

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Bouwen

```bash
npm run build
npm run preview
```

## Deploy via bolt.new

Push de repo naar GitHub en open:

```
https://bolt.new/~/github.com/{owner}/{repo}
```

Bolt.new pakt automatisch de Vite config op en start de dev server.
