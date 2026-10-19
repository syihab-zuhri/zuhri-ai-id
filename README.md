# zuhri.ai.id — Premium AI Domain Sales Landing Page

Website resmi landing page untuk pemasaran dan penjualan nama domain **`zuhri.ai.id`**. Dirancang dengan prinsip *Precision Modernist / Dark Luxury AI Identity*, merefleksikan estetika brand `zuhri.` (shadcn preset b1Q5GC + Figma Make) dengan palet midnight charcoal, aksen electric blue OKLCH, tipografi IBM Plex Sans & IBM Plex Mono, sudut tajam (`radius: 0`), dan performa tinggi tanpa dependensi berlebih.

---

## 1. Ringkasan Domain & Penawaran

- **Nama Domain:** `zuhri.ai.id`
- **Ekstensi:** `.ai.id` (ccTLD Indonesia untuk AI & Inovasi, dikelola oleh PANDI)
- **Harga Penawaran Awal:** Rp299.000 (Nego Wajar)
- **Email Kontak Resmi:** `syihabzuhri301004@gmail.com`
- **Target Pasar:** Developer, AI enthusiast, startup founder, kreator teknologi, dan personal branding berakar nama Zuhri.
- **Model Transaksi:** Kesepakatan langsung antara pemilik dan pembeli (Direct from Owner) via email resmi.

---

## 2. Arsitektur & Teknologi

- **Frontend Core:** React 19 + TypeScript (Strict Type Safety)
- **Build Tool:** Vite 8 (Ultra-fast HMR & Optimized Static Chunks)
- **Styling:** Modern CSS (OKLCH Color Space, CSS Variables, Responsive Grid, Smooth Accessible Accordion)
- **Ikon:** Lucide React (SVG murni, zero runtime overhead)
- **Tipografi:** IBM Plex Sans & IBM Plex Mono
- **Deployment Target:** Cloudflare Pages (Static Edge Distribution)
- **Keamanan & Header:** `_headers` dengan Content-Security-Policy (CSP), HSTS-ready, nosniff, DENY framing.

---

## 3. Struktur Proyek

```text
zuhri.ai.id/
├── public/
│   ├── _headers         # Aturan security headers & asset caching Cloudflare Pages
│   ├── favicon.svg      # Favicon SVG geometris Z khas zuhri
│   ├── robots.txt       # Konfigurasi perayap web
│   └── sitemap.xml      # Peta situs pencarian
├── src/
│   ├── assets/          # Aset visual pendukung
│   ├── components/      # Komponen modular UI
│   │   ├── DomainSpecs.tsx   # Rincian spesifikasi & transparansi kepemilikan
│   │   ├── FaqAccordion.tsx  # Tanya jawab interaktif (ARIA accessible)
│   │   ├── FinalCta.tsx      # Section CTA penutup & salin draf
│   │   ├── Footer.tsx        # Footer semantik & tombol back-to-top
│   │   ├── Hero.tsx          # Hero section, badge harga, CTA mailto
│   │   ├── Logo.tsx          # Wordmark & Geometric Z mark
│   │   ├── Marquee.tsx       # Ticker berjalan tanpa putus
│   │   ├── Navbar.tsx        # Sticky header & menu hamburger mobile
│   │   ├── ProcessSteps.tsx  # Alur 4 langkah transfer domain PANDI
│   │   └── WhyDomain.tsx     # 4 kartu potensi pemanfaatan domain
│   ├── config/
│   │   └── site.ts      # Single source of truth (harga, kontak, mailto generator)
│   ├── types/
│   │   └── index.ts     # TypeScript interfaces
│   ├── App.tsx          # Komponen utama & manajemen toast feedback
│   ├── index.css        # Sistem desain, token OKLCH, animasi & aksesibilitas
│   └── main.tsx         # Entrypoint React 19
├── dist/                # Output build statis siap deploy
├── package.json
├── tsconfig.json
├── vite.config.ts
├── wrangler.jsonc       # Konfigurasi deployment Cloudflare Pages
└── README.md
```

---

## 4. Pengembangan Lokal

### Prasyarat
- Node.js versi 18+ (disarankan Node.js 20 LTS atau 24)
- npm versi 9+ atau pnpm

### Langkah Instalasi & Menjalankan Dev Server
```bash
# 1. Masuk ke direktori proyek
cd /root/zuhri.ai.id

# 2. Pasang dependensi
npm install

# 3. Jalankan server lokal
npm run dev
```

Dev server akan aktif di `http://localhost:5173`.

### Typecheck & Linter
```bash
# Jalankan validasi linter
npm run lint

# Jalankan typecheck TypeScript
npm run build
```

---

## 5. Build Produksi

Untuk menghasilkan bundle statis yang telah di-minifikasi:

```bash
npm run build
```

Output akan otomatis tersimpan di folder `dist/` dengan struktur:
- `dist/index.html` (berisi meta tags lengkap, OpenGraph, JSON-LD schema)
- `dist/assets/*.css` (CSS terkompresi)
- `dist/assets/*.js` (JS terkompresi & tree-shaken)
- `dist/_headers`, `favicon.svg`, `robots.txt`, `sitemap.xml`

Anda dapat menguji hasil build produksi secara lokal dengan:
```bash
npm run preview
```

---

## 6. Panduan Deployment ke Cloudflare Pages

Tersedia dua metode deployment yang didukung penuh:

### Opsi A: Deployment Langsung via Cloudflare CLI (Wrangler)

1. Pastikan Anda telah terotentikasi ke akun Cloudflare:
   ```bash
   wrangler login
   ```
   *Atau jika dijalankan di server headless/WSL tanpa browser langsung:*
   ```bash
   wrangler login --device
   ```
   *(Buka tautan verifikasi yang muncul di browser dan setujui otorisasi).*

2. Pastikan file build produksi telah siap:
   ```bash
   npm run build
   ```

3. Deploy folder `dist/` ke Cloudflare Pages:
   ```bash
   npx wrangler pages deploy dist --project-name zuhri-ai-id
   ```
   Wrangler akan mengunggah aset ke Cloudflare edge dan memberikan preview URL gratis (misal: `https://zuhri-ai-id.pages.dev`).

### Opsi B: Deployment Otomatis via Git (GitHub / GitLab)

1. Buat repository baru di GitHub (misal: `zuhri-ai-id` atau dalam monorepo Anda).
2. Push source code proyek ini ke branch `main`:
   ```bash
   cd /root/zuhri.ai.id
   git init
   git add .
   git commit -m "feat: initial commit zuhri.ai.id domain sales website"
   git remote add origin git@github.com:USERNAME/REPO.git
   git push -u origin main
   ```
3. Buka **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
4. Pilih repository `zuhri-ai-id`.
5. Masukkan pengaturan build berikut:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(kosongkan atau isi subfolder jika monorepo)*
6. Klik **Save and Deploy**. Cloudflare akan otomatis membangun dan merilis website setiap kali ada commit baru ke branch `main`.

---

## 7. Pengaturan Custom Domain (`zuhri.ai.id`)

Jika Anda ingin website ini langsung diakses melalui domain `zuhri.ai.id`:

1. Buka project Pages Anda di Cloudflare Dashboard: **Workers & Pages** -> `zuhri-ai-id` -> **Custom domains**.
2. Klik tombol **Set up a custom domain**.
3. Masukkan nama domain: `zuhri.ai.id` (dan `www.zuhri.ai.id` jika diinginkan).
4. Jika domain `zuhri.ai.id` sudah menggunakan Cloudflare DNS (Nameserver Cloudflare), Cloudflare akan secara otomatis menambahkan DNS record CNAME yang diperlukan dengan status Proxied (Orange Cloud ON).
5. Tunggu 1–2 menit hingga sertifikat SSL/TLS Universal otomatis aktif.

---

## 8. Verifikasi Fitur & Testing

Website ini telah melalui pengujian end-to-end:
- [x] **Responsivitas:** Tampilan optimal pada mobile (viewport 360px–480px), tablet (768px), dan desktop (1024px–1440px).
- [x] **CTA Email Mailto:** Seluruh tombol mengarah ke `syihabzuhri301004@gmail.com` dengan encoding URL yang valid (`%20` dsb.) pada subject dan pesan pembuka.
- [x] **Fallback Salin:** Tombol salin domain dan salin alamat email dilengkapi toast alert instan.
- [x] **FAQ Accordion:** Navigasi keyboard (Tab, Enter, Space) dan atribut ARIA (`aria-expanded`, `aria-controls`) berfungsi penuh.
- [x] **Mobile Menu:** Drawer responsif dengan tombol toggle, penanganan tombol ESC, dan penutupan otomatis saat tautan diklik.
- [x] **SEO & Accessibility:** Tag semantik `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, serta JSON-LD Schema `Product` dan `FAQPage`.
- [x] **Keamanan:** Bebas dari hardcoded secret, token API, data pribadi sensitif, nomor telepon, atau alamat fisik.
