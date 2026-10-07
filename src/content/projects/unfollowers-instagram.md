---
title: "Instagram Unfollowers Analyzer"
title_en: "Instagram Unfollowers Analyzer"
description: "Aplikasi web client-side untuk menganalisis followers dan unfollowers Instagram secara aman tanpa login."
description_en: "Client-side web application to analyze Instagram followers and unfollowers securely without login credentials."
date: "2025-03-19"
image: "/images/unfollowers-instagram/unfollowers-instagram.webp"
category: "Web"
tags: ["Next.js", "TypeScript", "Tailwind CSS", "ZIP/JSON Parser"]
githubUrl: "https://github.com/himang-dg/instagram-unfollowers-analyzer"
liveUrl: "https://instagram-unfollowers-analyzer.vercel.app/"
---

# HIMANG -  Instagram Unfollowers Analyzer
![](/images/unfollowers-instagram/unfollowers-instagram.webp)
![](/images/unfollowers-instagram/unfollowers-instagram-2.webp)
## What this is

**HIMANG -  Instagram Unfollowers Analyzer** adalah aplikasi web berbasis browser untuk menganalisis data followers dan following Instagram secara lokal. Aplikasi ini membantu pengguna menemukan akun yang tidak melakukan follow back, akun mutual, fans, pending follow requests, recent requests, serta akun yang baru saja di-unfollow tanpa memerlukan login Instagram atau mengirimkan data ke server.

Proyek ini pertama kali di-upload pada **19 Agustus 2026**, dikembangkan oleh **HIMANG**, dan tersedia sebagai aplikasi publik melalui GitHub serta deployment Vercel.

- **Repository:** [github.com/himang-dg/unfollowers-instagram](https://github.com/himang-dg/unfollowers-instagram)
- **Live Preview:** [unfollowers-instagram-rose.vercel.app](https://unfollowers-instagram-rose.vercel.app/)
- **Author:** [HIMANG](https://github.com/himang-dg)
- **Author Link:** [s.id/himang](http://s.id/himang)
- **Upload Date:** 19 Agustus 2026
- **Repository Topics:** `instagram`, `nextjs`, `unfollower`
- **License:** Belum ditentukan pada repository
- **Status:** Public, single-branch project menggunakan branch `main`

Aplikasi ini dirancang untuk pengguna Instagram yang ingin memahami hubungan followers dan following mereka dengan cara yang lebih praktis, privat, dan aman dibandingkan menggunakan layanan pihak ketiga yang meminta akses akun.

### Stack

- **Language(s):** TypeScript sebagai bahasa utama, dengan CSS dan JavaScript sebagai bahasa pendukung
- **Framework / runtime:** Next.js App Router, React 19, Node.js
- **Styling:** Tailwind CSS 4 dan custom CSS design system
- **File processing:** JSZip untuk membaca dan mengekstrak file ZIP secara langsung di browser
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Font:** Inter melalui `next/font/google`
- **Build tooling:** Next.js Turbopack, PostCSS, ESLint, TypeScript
- **Deployment:** Vercel
- **Language composition:**
 - TypeScript: sekitar 93,2%
 - CSS: sekitar 6,1%
 - JavaScript: sekitar 0,7%

> Catatan: README proyek menyebut Next.js 15, tetapi dependency pada `package.json` menggunakan `next` versi `^16.3.1`. Untuk dokumentasi portfolio, proyek ini lebih tepat disebut sebagai aplikasi Next.js modern berbasis React 19.

## Masalah yang diselesaikan

Instagram tidak menyediakan tampilan langsung untuk mengetahui:

- Siapa saja yang tidak melakukan follow back.
- Akun mana yang hanya menjadi fans.
- Akun mana yang mutual dengan pengguna.
- Follow request mana yang masih pending.
- Request follow terbaru yang pernah dikirim.
- Akun mana yang baru saja di-unfollow.

Selain itu, banyak aplikasi pihak ketiga meminta pengguna untuk login atau memberikan kredensial Instagram. Pendekatan tersebut dapat menimbulkan risiko privasi dan keamanan.

Proyek ini menyelesaikan masalah tersebut dengan pendekatan client-side:

1. Pengguna mengunduh data akun Instagram dalam format JSON.
2. File ZIP diunggah ke aplikasi.
3. Data diproses langsung di browser menggunakan JavaScript.
4. Hasil analisis ditampilkan tanpa mengirimkan file atau data pengguna ke backend.

Dengan demikian, aplikasi tidak memerlukan sistem autentikasi, database, API Instagram, maupun server-side data processing.

## Fungsi utama

Aplikasi membaca file export data Instagram, menormalisasi username, menggabungkan data followers dan following, kemudian membandingkan keduanya menggunakan `Set` untuk menghasilkan beberapa kategori analisis.

Kategori hasil yang tersedia:

- **Tidak Follow Back**
 - Menampilkan akun yang diikuti pengguna tetapi tidak mengikuti pengguna kembali.
- **Saling Follow**
 - Menampilkan akun yang saling mengikuti.
- **Fans**
 - Menampilkan akun yang mengikuti pengguna tetapi tidak diikuti kembali.
- **Pending Requests**
 - Menampilkan follow request yang belum diterima.
- **Recent Requests**
 - Menampilkan request follow terbaru yang dikirim.
- **Recently Unfollowed**
 - Menampilkan akun yang baru saja di-unfollow.

## Fitur-fitur

### 1. Upload file ZIP Instagram

Pengguna dapat mengunggah file export Instagram melalui:

- File picker.
- Drag-and-drop.
- Format file ZIP berisi data JSON Instagram.

Input file dibatasi pada format `.zip` dan diproses menggunakan `FileReader` serta `JSZip`.

### 2. Pemrosesan data secara lokal

Seluruh proses dilakukan di sisi client/browser. Aplikasi tidak memiliki API route, database, backend service, atau mekanisme upload ke server.

Hal ini memberikan beberapa keuntungan:

- Data pribadi tetap berada di perangkat pengguna.
- Tidak membutuhkan login Instagram.
- Tidak membutuhkan konfigurasi API key.
- Tidak memerlukan penyimpanan data pengguna.
- Mengurangi risiko kebocoran data ke layanan pihak ketiga.

### 3. Parsing berbagai format data Instagram

Parser pada `PageProses.tsx` menangani beberapa pola data Instagram:

- File `followers_1.json`, `followers_2.json`, dan file followers lain dengan pola serupa.
- File `following.json`.
- File `pending_follow_requests.json`.
- File `recent_follow_requests.json`.
- File `recently_unfollowed_profiles.json`.

Aplikasi mendukung beberapa sumber username, termasuk:

- `string_list_data[].value`
- `string_list_data[].href`
- `title`
- `label_values` untuk username dan display name

Username dinormalisasi menggunakan fungsi `normalizeUsername()` dengan cara:

- Menghapus spasi di awal dan akhir.
- Menghapus karakter `@`.
- Menghapus trailing slash.
- Mengubah username menjadi lowercase.

### 4. Analisis relasi followers dan following

Data followers dan following diubah menjadi data unik menggunakan `Set`. Kemudian aplikasi menghitung:

```text
Tidak Follow Back = Following - Followers
Mutual = Following ∩ Followers
Fans = Followers - Following
```

Pendekatan berbasis `Set` membantu membuat proses pencarian keanggotaan data lebih efisien dibandingkan pencarian array biasa.

### 5. Dashboard hasil analisis

Halaman hasil menyediakan summary cards yang menampilkan:

- Total followers.
- Total following.
- Jumlah akun yang tidak follow back.
- Jumlah akun mutual.
- Jumlah fans.
- Jumlah pending requests.

Setiap kategori hasil memiliki warna, ikon, gradient, dan deskripsi yang berbeda agar mudah dibedakan.

### 6. Tab navigation

Hasil analisis dipisahkan ke dalam tab:

- Tidak FB
- Mutual
- Fans
- Pending
- Recent
- Unfollowed

Tab dibuat responsif sehingga label lengkap ditampilkan pada layar besar dan label pendek digunakan pada perangkat mobile.

### 7. Pencarian username

Setiap kategori memiliki kolom pencarian yang memungkinkan pengguna memfilter username berdasarkan kata kunci.

Fitur pencarian meliputi:

- Filter secara real-time.
- Pencarian case-insensitive.
- Tampilan jumlah data yang ditemukan.
- Tombol untuk menghapus pencarian.
- Empty state ketika tidak ada hasil.

### 8. Link langsung ke profil Instagram

Setiap username dapat diklik untuk membuka profil Instagram terkait pada tab baru melalui format:

```text
https://instagram.com/{username}
```

### 9. Copy username

Pengguna dapat menyalin username dengan tombol copy. Setelah berhasil disalin, ikon berubah menjadi indikator sukses selama beberapa detik.

### 10. Progress processing

Selama proses analisis, aplikasi menampilkan beberapa tahap pemrosesan:

1. Membuka file.
2. Membaca followers.
3. Membaca following.
4. Membaca data tambahan.
5. Menganalisis data.

Progress bar dan status proses memberikan feedback visual agar pengguna mengetahui bahwa file sedang diproses.

### 11. Panduan penggunaan

Halaman panduan menjelaskan cara:

1. Meminta data akun Instagram.
2. Memilih data followers dan following.
3. Mengunduh data dengan format JSON.
4. Mengunggah file ZIP ke aplikasi.
5. Menjalankan proses analisis.

Panduan dilengkapi screenshot dari proses pengunduhan data Instagram menggunakan asset pada folder `public`.

### 12. FAQ

Aplikasi menyediakan beberapa pertanyaan umum:

- Apakah aplikasi ini aman?
- Berapa lama proses analisis?
- Apakah pengguna perlu login Instagram?
- Informasi apa saja yang dapat dilihat?

### 13. Responsive design

UI dirancang untuk desktop dan mobile dengan:

- Responsive grid.
- Mobile navigation menu.
- Tab horizontal yang dapat di-scroll.
- Ukuran typography adaptif.
- Layout upload yang menyesuaikan ukuran layar.
- Mobile-friendly result list.

### 14. Visual interaction dan animation

Aplikasi menggunakan Framer Motion untuk:

- Page transition.
- Animasi header.
- Hover effect.
- Upload card animation.
- Processing state.
- Success overlay.
- Tab transition.
- List item entrance animation.
- Mobile menu transition.
- Floating background orbs.

## Arsitektur aplikasi

```text
app/
├── page.tsx
│   └── Entry point halaman utama
│
├── layout.tsx
│   ├── Metadata aplikasi
│   ├── Inter font
│   ├── AnalysisProvider
│   └── React Hot Toast provider
│
├── components/
│   ├── PageProses.tsx
│   │   ├── Upload file ZIP
│   │   ├── Parsing data Instagram
│   │   ├── Perhitungan relasi followers/following
│   │   └── Navigasi ke halaman hasil
│   │
│   ├── Base.tsx
│   │   ├── Hero section
│   │   ├── Upload drop zone
│   │   ├── Processing progress
│   │   └── Action button
│   │
│   ├── ResultPage.tsx
│   │   ├── Summary statistics
│   │   ├── Category tabs
│   │   ├── Username search
│   │   ├── Copy username
│   │   └── Instagram profile links
│   │
│   ├── Header.tsx
│   │   ├── Brand identity
│   │   ├── Desktop navigation
│   │   └── Mobile navigation
│   │
│   ├── Footer.tsx
│   │   └── Branding, copyright, dan privacy disclaimer
│   │
│   └── Panduan.tsx
│       ├── Step-by-step Instagram data guide
│       ├── Screenshot instructions
│       └── FAQ
│
├── context/
│   └── AnalysisContext.tsx
│       └── Global state untuk menyimpan hasil analisis
│
├── results/
│   └── page.tsx
│       └── Route halaman hasil pada /results
│
├── globals.css
│   ├── Dark theme variables
│   ├── Glassmorphism utilities
│   ├── Glow effects
│   ├── Gradient text
│   ├── Keyframe animations
│   └── Responsive visual styling
│
└── public/
    ├── 1.png sampai 9.png
    ├── 4.4.png
    ├── 8.8.png
    └── SVG assets
```

**How it fits together:** `app/page.tsx` merender `PageProses`, yang menjadi pusat alur upload dan analisis. Setelah file ZIP diproses, `PageProses` membaca berbagai file JSON Instagram, menormalisasi data, menghitung relasi antara followers dan following, lalu menyimpan hasilnya ke `AnalysisContext`. Setelah proses selesai, pengguna diarahkan ke route `/results`, tempat `ResultPage` membaca data dari context dan menampilkannya dalam bentuk dashboard interaktif.

## Data flow

```text
Instagram JSON Export ZIP
          │
          ▼
      FileReader
          │
          ▼
        JSZip
          │
          ▼
  Parse JSON files:
 - followers_*.json
 - following.json
 - pending_follow_requests.json
 - recent_follow_requests.json
 - recently_unfollowed_profiles.json
          │
          ▼
  Username normalization
          │
          ▼
  Deduplication using Set
          │
          ▼
  Followers/following comparison
          │
          ▼
  AnalysisContext
          │
          ▼
       /results
          │
          ▼
 Interactive result dashboard
```

## Komponen teknis penting

### `PageProses.tsx`

File ini merupakan pusat business logic aplikasi. Tanggung jawab utamanya:

- Mengelola file yang dipilih pengguna.
- Menangani drag-and-drop.
- Membaca file menggunakan `FileReader`.
- Membuka arsip ZIP menggunakan `JSZip`.
- Mencari file JSON berdasarkan pola nama.
- Menormalisasi username.
- Memproses data followers dan following.
- Menghitung kategori hasil.
- Menyimpan hasil ke context.
- Menampilkan toast error.
- Mengarahkan pengguna ke halaman hasil.

### `AnalysisContext.tsx`

Context digunakan sebagai state store global sederhana untuk membagikan hasil analisis dari halaman upload ke halaman results.

Data yang disimpan mencakup:

- `notFollowback`
- `mutualFollowers`
- `fans`
- `pendingRequests`
- `recentFollowRequests`
- `recentlyUnfollowed`
- `totalData`

### `ResultPage.tsx`

Komponen ini bertanggung jawab terhadap presentation layer hasil analisis, termasuk:

- Summary cards.
- Tab kategori.
- Search filter.
- Copy username.
- Link profil Instagram.
- Empty state.
- Animated list rendering.
- Responsive layout.

### `globals.css`

Custom CSS membentuk identitas visual aplikasi melalui:

- Premium dark theme.
- Glassmorphism cards.
- Cyan, violet, rose, emerald, dan amber accents.
- Floating blurred orbs.
- Gradient text animation.
- Glow effect.
- Custom scrollbar.
- Input focus state.
- Background animation.

## Design direction

Aplikasi menggunakan visual design bertema **premium dark dashboard** dengan karakteristik:

- Background gelap bernuansa navy.
- Glassmorphism pada card dan navigation.
- Gradient cyan-to-violet sebagai identitas utama.
- Warna aksen berbeda untuk setiap kategori analisis.
- Rounded corners pada hampir semua komponen.
- Motion animation untuk meningkatkan feedback interaksi.
- Fokus pada pengalaman penggunaan yang sederhana dan tidak mengintimidasi.

Design system utama didefinisikan pada `app/globals.css` melalui CSS variables seperti:

```css
--bg-primary: #0b0f19;
--accent-cyan: #06b6d4;
--accent-violet: #8b5cf6;
--accent-rose: #f43f5e;
--accent-emerald: #10b981;
--accent-amber: #f59e0b;
```

## Cara menjalankan project

### Prasyarat

- Node.js
- npm
- Browser modern
- File export Instagram dalam format ZIP dan JSON

### Instalasi

```bash
git clone https://github.com/himang-dg/unfollowers-instagram.git
cd unfollowers-instagram
npm install
```

### Menjalankan development server

```bash
npm run dev
```

Buka aplikasi pada:

```text
http://localhost:3000
```

### Build production

```bash
npm run build
```

### Menjalankan production server

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Cara menggunakan aplikasi

1. Buka aplikasi melalui [live preview](https://unfollowers-instagram-rose.vercel.app/).
2. Unduh data Instagram melalui Account Center.
3. Pilih data followers dan following.
4. Pastikan format data yang dipilih adalah **JSON**, bukan HTML.
5. Unduh file ZIP Instagram.
6. Upload file ZIP ke aplikasi.
7. Klik **Analisis Sekarang**.
8. Tunggu proses parsing selesai.
9. Buka hasil analisis pada halaman `/results`.
10. Gunakan tab kategori dan fitur pencarian untuk menemukan akun tertentu.
11. Klik username untuk membuka profil Instagram atau gunakan tombol copy.

## Nilai proyek untuk portfolio

Proyek ini merepresentasikan kemampuan dalam:

- Membangun aplikasi web client-side dengan Next.js dan React.
- Mengolah file ZIP dan data JSON secara langsung di browser.
- Membuat parser yang toleran terhadap variasi struktur data.
- Menggunakan TypeScript untuk type-safe state dan data processing.
- Mengimplementasikan state management menggunakan React Context.
- Membuat algoritma perbandingan data menggunakan `Set`.
- Mendesain dashboard interaktif dan responsive.
- Membangun pengalaman upload dengan drag-and-drop.
- Menangani loading, progress state, error state, dan success state.
- Mengutamakan privasi dengan local-only processing.
- Menggunakan animation system untuk meningkatkan UX.
- Membuat panduan penggunaan yang lengkap dengan visual instructions.
- Melakukan deployment aplikasi Next.js ke Vercel.

## Ringkasan singkat untuk kartu portfolio

> Aplikasi web client-side untuk menganalisis data followers dan following Instagram secara privat. Pengguna cukup mengunggah file export Instagram dalam format ZIP, lalu aplikasi memproses data secara lokal untuk menampilkan akun yang tidak follow back, mutual followers, fans, pending requests, recent requests, dan recently unfollowed tanpa login atau mengirim data ke server.

## Versi deskripsi pendek

**Instagram Unfollowers Analyzer** adalah aplikasi Next.js yang memungkinkan pengguna mengecek hubungan followers dan following Instagram dengan aman melalui file export JSON. Seluruh proses dilakukan secara lokal di browser menggunakan JSZip, sehingga tidak ada data pengguna yang dikirim ke server.

## Link proyek

- [Live Preview](https://unfollowers-instagram-rose.vercel.app/)
- [GitHub Repository](https://github.com/himang-dg/unfollowers-instagram)
- [Author Profile](https://github.com/himang-dg)
- [Author Website](http://s.id/himang)
