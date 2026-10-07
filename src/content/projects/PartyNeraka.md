---
title: "Party Neraka Stream Overlay & Tools"
title_en: "Party Neraka Stream Overlay & Tools"
description: "Sistem interaktif stream overlay, sound effect manager, dan donation alerts bertema Cyberpunk."
description_en: "Interactive live streaming overlay system, sound effect manager, and cyberpunk donation alerts."
date: "2026-05-15"
image: "/images/party-neraka/partyneraka-1.webp"
category: "Web"
tags: ["HTML5", "CSS3", "JavaScript", "OBS Studio", "Streaming UI"]
githubUrl: "https://github.com/himang-dg/PartyNeraka"
liveUrl: ""
---

# PartyNeraka
![](/images/party-neraka/partyneraka-1.webp)
![](/images/party-neraka/partyneraka-2.webp)
![](/images/party-neraka/partyneraka-3.webp)
![](/images/party-neraka/partyneraka-4.webp)

> Website komunitas dan direktori streamer Party Neraka dengan konsep visual bertema neraka, horor, api, dan humor lokal.

## Informasi Proyek

| Detail | Keterangan |
|---|---|
| **Nama proyek** | PartyNeraka |
| **Kategori** | Community Website / Streamer Directory / Landing Page |
| **Status** | Public |
| **Tahun upload** | 2026 |
| **Tanggal dibuat di GitHub** | 15 Mei 2026 |
| **Update terakhir yang terdeteksi** | 24 Agustus 2026 |
| **Repository** | [github.com/himang-dg/PartyNeraka](https://github.com/himang-dg/PartyNeraka) |
| **Live Preview** | [partyneraka.vercel.app](https://partyneraka.vercel.app/) |
| **Pemilik proyek** | [Himang](https://github.com/himang-dg) |
| **Lisensi** | Belum ditentukan di repository |
| **Bahasa utama** | TypeScript |

---

## Ringkasan Proyek

PartyNeraka adalah website komunitas yang berfungsi sebagai direktori streamer dan content creator yang tergabung dalam ekosistem Party Neraka. Website ini menyajikan profil sekitar 30 streamer dalam bentuk kartu interaktif yang dilengkapi foto, deskripsi karakter, tautan Instagram, TikTok, YouTube, serta link dukungan atau donasi.

Proyek ini menggabungkan konsep komunitas streamer dengan identitas visual bertema dark fantasy dan “neraka”. Tampilan website dibuat menggunakan warna merah gelap, hitam, efek api, embers, glow, animasi transisi, serta tipografi bergaya horor untuk menciptakan pengalaman visual yang khas dan mudah dikenali.

Selain direktori streamer, website juga menyediakan bagian gallery, promosi merchandise resmi, tautan media sosial komunitas, kontak admin, dan link dukungan komunitas.

---

## Masalah yang Diselesaikan

Sebelum adanya website terpusat, informasi mengenai streamer dan creator dalam komunitas berpotensi tersebar di berbagai platform seperti Instagram, TikTok, YouTube, dan platform donasi.

PartyNeraka menyelesaikan beberapa kebutuhan berikut:

- Menyediakan satu tempat terpusat untuk mengenal seluruh streamer komunitas.
- Memudahkan pengunjung menemukan akun media sosial setiap streamer.
- Mempermudah audiens memberikan dukungan melalui platform donasi.
- Membangun identitas digital resmi untuk komunitas Party Neraka.
- Menampilkan profil streamer dengan cara yang lebih menarik dibandingkan daftar link biasa.
- Menjadi media promosi untuk merchandise resmi komunitas.
- Menyediakan gallery visual untuk memperkuat branding dan suasana komunitas.
- Membuat pengalaman eksplorasi yang lebih interaktif melalui search, animasi, hover effect, dan load more.

---

## Fungsi Utama

### 1. Direktori Streamer

Website menampilkan daftar streamer Party Neraka dalam bentuk grid card. Setiap card berisi:

- Nama streamer.
- Foto profil.
- Deskripsi dengan gaya humor bertema neraka.
- Link Instagram.
- Link TikTok.
- Link YouTube.
- Tombol dukungan atau donasi.

Data streamer disimpan secara terstruktur di file:

```text
src/data/streamers.ts
```

Setiap data streamer menggunakan interface TypeScript dengan properti:

```text
nama
foto
ig
tiktok
youtube
donasi
deskripsi
```

### 2. Pencarian Streamer

Pengunjung dapat mencari streamer berdasarkan nama melalui search bar.

Fitur pencarian:

- Berjalan langsung di sisi client.
- Menggunakan pencocokan nama secara case-insensitive.
- Menggunakan `useMemo` untuk mengoptimalkan proses filtering.
- Menampilkan pesan khusus ketika data streamer tidak ditemukan.
- Mengatur ulang jumlah data yang ditampilkan ketika pencarian baru dilakukan.

### 3. Load More

Pada awalnya website menampilkan delapan streamer. Pengunjung dapat menekan tombol “Lihat Penghuni Lainnya...” untuk menampilkan delapan streamer berikutnya.

Pendekatan ini membantu menjaga tampilan halaman agar tetap ringkas dan tidak langsung menampilkan seluruh data dalam satu waktu.

### 4. Profil dan Link Eksternal

Setiap streamer memiliki tautan langsung menuju platform mereka. Link tersebut dibuka pada tab baru menggunakan:

```tsx
target="_blank"
rel="noopener noreferrer"
```

Platform yang terhubung meliputi:

- Instagram.
- TikTok.
- YouTube.
- Tako.
- Tiptap.

### 5. Animasi Interaktif

Website menggunakan Framer Motion untuk menghasilkan berbagai interaksi visual, seperti:

- Fade-in animation.
- Slide-up animation.
- Scale animation.
- Hover animation.
- Staggered entrance animation.
- Animasi saat elemen masuk ke viewport.
- Animasi logo yang berdenyut.
- Animasi kartu streamer.
- Animasi gallery.
- Animasi marketplace banner.

### 6. Efek Fire Embers

Komponen `FireEmbers` membuat sekitar 40 partikel bara api secara dinamis di sisi client.

Setiap ember memiliki karakteristik berbeda:

- Posisi horizontal acak.
- Ukuran acak.
- Delay animasi acak.
- Durasi animasi acak.
- Efek glow merah.
- Pergerakan vertikal dari bawah ke atas.

Randomisasi dilakukan di dalam `useEffect` agar tidak menyebabkan hydration mismatch pada Next.js.

### 7. Gallery

Website menyediakan bagian gallery berisi beberapa aset visual komunitas.

Gallery menggunakan:

- Layout masonry berbasis CSS columns.
- Efek grayscale secara default.
- Efek warna saat hover.
- Animasi scale dan fade-in.
- Border merah sesuai identitas visual website.

Data gallery dikelola melalui:

```text
src/data/gallery.ts
```

### 8. Marketplace Merchandise

Bagian `Neraka Store` berfungsi sebagai promosi merchandise resmi Party Neraka.

Fitur ini menyediakan:

- Judul promosi merchandise.
- Deskripsi singkat.
- Tombol menuju marketplace Shopee.
- Ikon shopping cart.
- Animasi hover dan tap.
- Efek floating dan glow.

Marketplace yang digunakan:

```text
https://shopee.co.id/partyneraka
```

### 9. Media Sosial Komunitas

Header website menyediakan akses langsung menuju:

- Instagram Party Neraka.
- TikTok Party Neraka.
- Discord komunitas.
- Link dukungan komunitas melalui Tako.

### 10. Kontak Admin

Footer menampilkan informasi kontak komunitas:

- Email admin.
- Nomor WhatsApp.
- Link profil developer.
- Logo Party Neraka.
- Copyright dinamis berdasarkan tahun saat ini.

---

## Fitur-Fitur Utama

- Landing page full-screen dengan branding Party Neraka.
- Direktori sekitar 30 streamer.
- Search streamer secara real-time.
- Load more untuk daftar streamer.
- Profile card interaktif.
- Link Instagram, TikTok, YouTube, dan donasi.
- Gallery komunitas.
- Promosi official merchandise.
- Integrasi link komunitas Discord.
- Integrasi link media sosial.
- Kontak email dan WhatsApp admin.
- Dark theme dengan gaya horror dan inferno.
- Efek embers atau bara api bergerak.
- Efek glow dan flickering fire text.
- Animasi scroll-based menggunakan Framer Motion.
- Hover effect pada card, gambar, ikon, dan tombol.
- Responsive layout untuk mobile, tablet, dan desktop.
- Fallback image apabila gambar streamer gagal dimuat.
- Metadata SEO dasar melalui Next.js Metadata API.
- Open Graph metadata untuk kebutuhan social sharing.
- Twitter card metadata.
- Custom font melalui `next/font/google`.
- Type-safe data model menggunakan TypeScript.

---

## Tech Stack

### Core Technology

- **TypeScript** -  Bahasa utama untuk logic, komponen, dan data model.
- **React 19** -  Library utama untuk membangun interface berbasis component.
- **Next.js 16** -  Framework React yang digunakan untuk routing, rendering, metadata, dan struktur aplikasi.
- **Node.js / npm** -  Runtime dan package manager untuk development serta build process.

### Styling

- **Tailwind CSS 4** -  Utility-first CSS framework untuk membangun layout dan styling.
- **CSS Modules / Global CSS** -  Custom styling untuk animasi, warna, scrollbar, card effect, dan utility class.
- **CSS Animations** -  Digunakan untuk efek floating ember, fire flicker, pulse red, dan glow.
- **Glassmorphism** -  Digunakan pada card dan beberapa panel melalui efek transparansi serta backdrop blur.

### Animation

- **Framer Motion 13** -  Digunakan untuk:
 - Entrance animation.
 - Scroll reveal.
 - Hover interaction.
 - Button interaction.
 - Layout animation.
 - Staggered animation.
 - Repeating logo animation.

### Icons and Typography

- **React Icons** -  Menyediakan ikon Instagram, TikTok, YouTube, Discord, WhatsApp, email, shopping cart, search, dan support.
- **Creepster** -  Font bertema horror untuk heading dan branding.
- **Rajdhani** -  Font utama untuk body text dan interface.

### Tooling

- **ESLint 9** -  Code linting.
- **eslint-config-next** -  Konfigurasi linting khusus Next.js.
- **PostCSS** -  Processing CSS untuk integrasi Tailwind CSS.
- **TypeScript strict mode** -  Membantu menjaga keamanan tipe pada source code.

---

## Komposisi Bahasa

Berdasarkan statistik repository GitHub:

| Bahasa | Persentase |
|---|---:|
| TypeScript | 88.7% |
| CSS | 9.8% |
| JavaScript | 1.5% |

Komposisi tersebut menunjukkan bahwa proyek ini mayoritas menggunakan TypeScript untuk komponen React, struktur data, dan konfigurasi aplikasi, dengan CSS sebagai bagian penting dari visual design dan animasi.

---

## Struktur Proyek

```text
PartyNeraka/
├── public/
│   ├── images/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   ├── 4.png
│   │   ├── prk.png
│   │   └── berbagai foto streamer
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── FireEmbers.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Header.tsx
│   │   ├── Marketplace.tsx
│   │   ├── StreamerCard.tsx
│   │   └── StreamerSection.tsx
│   │
│   └── data/
│       ├── gallery.ts
│       └── streamers.ts
│
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Arsitektur dan Alur Aplikasi

Aplikasi menggunakan struktur Next.js App Router dengan satu halaman utama.

Alur render halaman:

```text
src/app/layout.tsx
        │
        ├── Global metadata
        ├── Google Fonts
        ├── Global CSS
        ├── Background texture
        └── FireEmbers
                │
                ▼
src/app/page.tsx
        │
        ├── Header
        ├── StreamerSection
        │       └── StreamerCard
        ├── Marketplace
        ├── GallerySection
        └── Footer
```

`page.tsx` berfungsi sebagai komposer utama halaman. Komponen-komponen section dipisahkan berdasarkan tanggung jawabnya agar struktur kode lebih mudah dirawat dan dikembangkan.

Data streamer tidak ditulis langsung di dalam komponen UI. Sebaliknya, data disimpan di `src/data/streamers.ts`, lalu diproses oleh `StreamerSection` dan diteruskan ke `StreamerCard`.

---

## Detail Komponen

### `Header.tsx`

Berfungsi sebagai hero section utama website.

Tanggung jawab:

- Menampilkan logo Party Neraka.
- Menampilkan headline “PARTY NERAKA”.
- Menampilkan tagline komunitas.
- Menampilkan link media sosial komunitas.
- Menjalankan animasi entrance.
- Menjalankan animasi pulse pada logo.

### `StreamerSection.tsx`

Berfungsi sebagai pusat direktori streamer.

Tanggung jawab:

- Mengambil data dari `streamerData`.
- Mengelola state pencarian.
- Mengelola jumlah card yang ditampilkan.
- Melakukan filtering data.
- Menampilkan pesan ketika hasil pencarian kosong.
- Merender daftar `StreamerCard`.

### `StreamerCard.tsx`

Berfungsi sebagai komponen reusable untuk setiap profil streamer.

Tanggung jawab:

- Menampilkan gambar streamer.
- Menampilkan nama dan deskripsi.
- Menampilkan link media sosial.
- Menampilkan tombol dukungan.
- Menangani fallback apabila gambar gagal dimuat.
- Menyediakan animasi hover dan scroll reveal.

### `FireEmbers.tsx`

Berfungsi sebagai dekorasi visual global berupa partikel bara api.

Tanggung jawab:

- Membuat ember secara acak.
- Menentukan posisi, ukuran, delay, dan durasi setiap ember.
- Menghindari hydration mismatch melalui client-side generation.
- Menambahkan efek glow pada partikel.

### `Marketplace.tsx`

Berfungsi untuk mempromosikan official merchandise Party Neraka.

### `GallerySection.tsx`

Berfungsi untuk menampilkan dokumentasi atau aset visual komunitas.

### `Footer.tsx`

Berfungsi sebagai area informasi penutup.

Tanggung jawab:

- Menampilkan kontak admin.
- Menampilkan email dan WhatsApp.
- Menampilkan logo.
- Menampilkan copyright dinamis.
- Menampilkan link developer.

---

## Visual Design

Identitas visual website dibangun dengan konsep “dark inferno”.

### Warna Utama

- Hitam pekat: `#0a0a0a`
- Merah gelap: `#8b0000`
- Merah darah: `#4a0000`
- Merah terang: `#ff0000`
- Oranye api: `#ff4a00`

### Gaya Visual

- Dark theme.
- Horror typography.
- Red fire glow.
- Glassmorphism panel.
- Gradient hitam dan merah.
- Grayscale image dengan color reveal ketika hover.
- Custom scrollbar.
- Floating ember animation.
- Fire flicker text.
- Card elevation dan hover transformation.

---

## Pengalaman Pengguna

Website dirancang untuk memberikan pengalaman yang lebih engaging dibandingkan halaman komunitas biasa.

Pengunjung dapat:

1. Mengenal identitas Party Neraka melalui hero section.
2. Menjelajahi daftar streamer.
3. Mencari streamer berdasarkan nama.
4. Membuka platform sosial masing-masing streamer.
5. Memberikan dukungan melalui platform donasi.
6. Melihat gallery komunitas.
7. Mengunjungi marketplace merchandise.
8. Bergabung atau mengakses kanal komunitas.
9. Menghubungi admin melalui email atau WhatsApp.

---

## Cara Menjalankan Secara Lokal

Pastikan sudah menginstal Node.js dan npm.

### Clone Repository

```bash
git clone https://github.com/himang-dg/PartyNeraka.git
cd PartyNeraka
```

### Install Dependencies

```bash
npm install
```

### Jalankan Development Server

```bash
npm run dev
```

Buka website melalui:

```text
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
```

### Jalankan Production Build

```bash
npm run start
```

### Jalankan Linter

```bash
npm run lint
```

---

## NPM Scripts

| Script | Fungsi |
|---|---|
| `npm run dev` | Menjalankan development server Next.js |
| `npm run build` | Membuat production build |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan ESLint |

---

## Nilai Teknis Proyek

PartyNeraka menunjukkan kemampuan dalam beberapa area pengembangan frontend modern:

- Membangun landing page berbasis Next.js App Router.
- Membuat komponen React yang reusable.
- Mengelola data terstruktur menggunakan TypeScript interface.
- Membangun client-side search dan filtering.
- Mengimplementasikan progressive content loading menggunakan load more.
- Membuat animasi interaktif menggunakan Framer Motion.
- Mengembangkan design system sederhana berbasis Tailwind CSS.
- Membuat efek visual custom menggunakan CSS animation.
- Mengintegrasikan berbagai external links dan social platforms.
- Menyusun metadata SEO dan Open Graph.
- Menggunakan responsive grid untuk berbagai ukuran perangkat.
- Menangani fallback pada gambar yang gagal dimuat.
- Memisahkan data, UI component, dan layout secara terstruktur.

---

## Catatan Implementasi

Beberapa catatan teknis yang terdapat pada implementasi:

- Data streamer disimpan secara statis dalam file TypeScript.
- Website belum menggunakan database atau CMS.
- Search hanya melakukan filtering berdasarkan nama streamer.
- Link sosial dan donasi dikelola melalui data object masing-masing streamer.
- Beberapa streamer memiliki link TikTok kosong atau bernilai `/`, sehingga link tersebut disembunyikan dari UI.
- Gambar menggunakan elemen HTML `<img>` secara langsung.
- Efek embers dibuat secara random ketika komponen berjalan di client.
- Marketplace masih berupa link eksternal menuju Shopee.
- Belum terdapat sistem autentikasi, dashboard admin, atau fitur CRUD.
- Belum terdapat automated test yang terlihat di repository.
- Metadata Open Graph masih menggunakan URL GitHub Pages lama, sedangkan homepage repository menunjuk ke deployment Vercel.

---

## Deskripsi Singkat untuk Portfolio

### Versi Bahasa Indonesia

**PartyNeraka** adalah website komunitas dan direktori streamer yang dibangun menggunakan Next.js, React, TypeScript, Tailwind CSS, dan Framer Motion. Website ini menampilkan profil sekitar 30 streamer lengkap dengan foto, deskripsi, link media sosial, serta link donasi. Proyek ini mengusung tema visual horror dan inferno dengan animasi bara api, efek glow, glassmorphism, interactive card, search filtering, gallery, dan promosi merchandise resmi komunitas.

### Versi Profesional

**PartyNeraka** merupakan platform komunitas berbasis web yang berfungsi sebagai direktori digital untuk streamer dan content creator. Aplikasi ini menghadirkan pengalaman eksplorasi interaktif melalui pencarian streamer, profile card, social media integration, donation links, animated gallery, dan marketplace promotion. Dari sisi visual, proyek ini menggunakan konsep dark inferno dengan custom CSS animation, Framer Motion transitions, responsive layout, dan typography bergaya horror.

### Versi Bahasa Inggris

**PartyNeraka** is a community website and streamer directory built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The platform showcases approximately 30 streamers through interactive profile cards containing photos, descriptions, social media links, and donation links. It features a dark inferno-inspired interface with animated fire embers, glowing typography, glassmorphism cards, live search filtering, a visual gallery, community links, and official merchandise promotion.

---

## Portfolio Highlights

- Built a themed community directory from scratch.
- Implemented reusable and type-safe React components.
- Created interactive streamer search with client-side filtering.
- Added progressive streamer loading using a load more interaction.
- Designed a custom horror-inspired visual identity.
- Implemented animated UI transitions with Framer Motion.
- Added dynamic fire ember particles using React state and effects.
- Integrated social media, donation, Discord, WhatsApp, and marketplace links.
- Built responsive layouts using Tailwind CSS grid utilities.
- Added SEO metadata, Open Graph configuration, and social sharing information.
- Structured static content into maintainable TypeScript data modules.

---

## Link Penting

- **Live Website:** [partyneraka.vercel.app](https://partyneraka.vercel.app/)
- **GitHub Repository:** [github.com/himang-dg/PartyNeraka](https://github.com/himang-dg/PartyNeraka)
- **Instagram Party Neraka:** [instagram.com/partyneraka](https://www.instagram.com/partyneraka/)
- **TikTok Party Neraka:** [tiktok.com/@partynerakacommunity](https://www.tiktok.com/@partynerakacommunity)
- **Discord Community:** [discord.gg/gistring](https://discord.gg/gistring)
- **Official Merchandise:** [Shopee Party Neraka](https://shopee.co.id/partyneraka)
- **Support Party Neraka:** [Tako Party Neraka](https://tako.id/PartyNeraka)
- **Developer Profile:** [s.id/himang](https://s.id/himang)

---

## Kesimpulan

PartyNeraka adalah proyek frontend yang menggabungkan kebutuhan komunitas, direktori streamer, promosi merchandise, dan branding digital dalam satu halaman web yang interaktif. Keunggulan utama proyek ini terletak pada identitas visualnya yang kuat, pemisahan komponen yang terstruktur, pemanfaatan TypeScript, serta penggunaan animasi untuk meningkatkan pengalaman pengguna.

Proyek ini cocok ditampilkan sebagai portfolio project untuk menunjukkan kemampuan dalam:

- Frontend development.
- React component architecture.
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- UI animation.
- Responsive design.
- Social media integration.
- Static content modeling.
- Creative visual implementation.
````

