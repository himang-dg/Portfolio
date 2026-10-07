---
title: "GitHub Profile Card Generator"
title_en: "GitHub Profile Card Generator"
description: "Aplikasi penghasil kartu profil GitHub interaktif dengan tema visual dan ekspor gambar."
description_en: "Interactive GitHub profile card generator with customizable themes and image export."
date: "2024-11-15"
image: "/images/github-profile/github-profile.webp"
category: "Tools"
tags: ["React", "TypeScript", "Tailwind CSS", "GitHub API"]
githubUrl: "https://github.com/himang-dg/github-profile-card"
liveUrl: "https://github-profile-card.vercel.app/"
---

## What this is
![](/images/github-profile/github-profile.webp)
**GitHub Profile Card** adalah aplikasi web berbasis Next.js yang mengubah data publik GitHub menjadi tampilan profil developer dan daftar repository yang lebih informatif, interaktif, serta visual. Aplikasi ini dirancang sebagai personal developer portfolio untuk membantu pengunjung memahami identitas, statistik, repository, bahasa pemrograman, dan aktivitas open-source seorang developer tanpa harus menelusuri profil GitHub secara manual.

Proyek ini menyelesaikan masalah presentasi profil GitHub yang cenderung sederhana dan kurang terkurasi dengan menyediakan pengalaman visual bergaya **iOS Glassmorphism Dark Mode**, pencarian repository, pengurutan berdasarkan berbagai metrik, serta halaman detail repository yang menampilkan statistik dan komposisi bahasa pemrograman.

### Informasi proyek

| Item | Detail |
|---|---|
| **Nama proyek** | GitHub Profile Card |
| **Tahun upload** | 2026 |
| **Repository** | [himang-dg/GitHub-Profile-Card](https://github.com/himang-dg/GitHub-Profile-Card) |
| **Live preview** | [git-hub-profile-card-one.vercel.app](https://git-hub-profile-card-one.vercel.app/) |
| **Repository ID** | `1341521412` |
| **Pemilik** | [himang-dg](https://github.com/himang-dg) |
| **Kategori** | Developer Portfolio / GitHub Profile Viewer |
| **Status** | Public |
| **Lisensi** | Belum ditentukan pada repository |
| **Branch utama** | `main` |
| **Deskripsi GitHub** | Github profile card view |

> Tahun upload ditentukan berdasarkan commit pertama repository yang tercatat pada **21 Agustus 2026**. Commit terbaru yang tersedia juga tercatat pada **21 Agustus 2026**.

### Stack

- **Language(s):** TypeScript, CSS, JavaScript
- **Framework / runtime:** Next.js 16 dengan App Router, React 19, Node.js
- **Styling:** Tailwind CSS v4, PostCSS, custom CSS design system
- **API:** GitHub REST API v3
- **UI / icon libraries:** Lucide React, React Icons
- **Utilities:** `clsx`
- **Deployment target:** Vercel
- **Type checking:** TypeScript strict mode
- **Code quality:** ESLint dengan konfigurasi Next.js Core Web Vitals dan TypeScript

### Komposisi bahasa

Berdasarkan data bahasa repository:

| Bahasa | Persentase |
|---|---:|
| TypeScript | 55.1% |
| CSS | 44.0% |
| JavaScript | 0.9% |

TypeScript digunakan untuk komponen React, routing, pengambilan data API, serta definisi tipe. CSS menjadi bagian besar dari proyek karena aplikasi memiliki design system khusus untuk efek glassmorphism, responsive layout, animasi, glow effect, skeleton loading, dan dark theme.

## Fitur utama

### 1. GitHub profile overview

Aplikasi mengambil data profil GitHub melalui endpoint:

```text
https://api.github.com/users/himang-dg
```

Informasi yang ditampilkan meliputi:

- Avatar pengguna
- Nama lengkap atau username
- Username GitHub
- Bio
- Lokasi
- Perusahaan
- Website pribadi
- Email, jika tersedia
- Link GitHub
- Link Twitter, jika tersedia
- Jumlah repository publik
- Jumlah followers
- Jumlah following

Komponen utama yang menangani fitur ini adalah `src/components/GithubProfile.tsx`.

### 2. Repository listing

Daftar repository publik diambil melalui GitHub REST API dan ditampilkan dalam bentuk card. Setiap card dapat menampilkan:

- Nama repository
- Deskripsi repository
- Bahasa pemrograman utama
- Jumlah stars
- Jumlah forks
- Tanggal terakhir diperbarui
- Informasi lisensi, jika tersedia
- Link langsung menuju repository GitHub

Implementasi utama terdapat pada:

- `src/components/RepoList.tsx`
- `src/components/RepoCard.tsx`
- `src/utils/github.ts`

### 3. Search repository

Pengguna dapat mencari repository berdasarkan:

- Nama repository
- Deskripsi repository
- Bahasa pemrograman

Pencarian dilakukan secara client-side menggunakan state React dan filter string sederhana sehingga interaksi dapat berlangsung secara langsung tanpa reload halaman.

### 4. Sorting repository

Repository dapat diurutkan berdasarkan beberapa opsi:

- Newly Created
- Recently Updated
- Most Stars
- Most Forks
- Largest Size

Sorting dilakukan pada komponen `RepoList.tsx` dengan membandingkan field `created_at`, `updated_at`, `stargazers_count`, `forks_count`, dan `size`.

### 5. Show more / show less

Secara default, aplikasi menampilkan maksimal enam repository untuk menjaga halaman tetap ringkas. Jika jumlah repository lebih dari enam, pengguna dapat menekan tombol:

- `View All [jumlah] Repositories`
- `Show Less`

### 6. Repository detail page

Aplikasi menyediakan dynamic route:

```text
/repo/[id]
```

Halaman ini menampilkan informasi repository secara lebih detail, termasuk:

- Nama repository
- Deskripsi
- Jumlah stars
- Jumlah forks
- Ukuran repository
- Komposisi bahasa pemrograman
- Visualisasi language distribution bar
- Persentase setiap bahasa
- Tombol `View on GitHub`
- Tombol navigasi kembali ke halaman profil

Implementasi terdapat pada:

```text
src/app/repo/[id]/page.tsx
```

Data bahasa repository diperoleh dari endpoint:

```text
https://api.github.com/repos/{username}/{repo}/languages
```

### 7. Language composition visualization

Halaman detail repository menghitung persentase bahasa berdasarkan jumlah byte kode yang dikembalikan GitHub API. Data tersebut kemudian divisualisasikan menggunakan:

- Horizontal stacked language bar
- Label bahasa
- Persentase setiap bahasa
- Warna khusus untuk masing-masing bahasa

Warna bahasa didefinisikan dalam fungsi `getLanguageBarColor()`.

### 8. iOS-inspired glassmorphism UI

Aplikasi menggunakan design system custom dengan gaya visual yang terinspirasi dari antarmuka iOS, meliputi:

- Translucent glass cards
- `backdrop-filter: blur(...)`
- Border transparan
- Soft shadow
- Glow effect
- Gradient text
- Rounded corners
- Interactive hover states
- Animated background orbs
- Dark mode sebagai tema utama

Design system ini didefinisikan secara terpusat pada:

```text
src/app/globals.css
```

### 9. Animated background

Background aplikasi menggunakan beberapa layer visual:

- Radial gradient
- Floating gradient orbs
- Blur effect
- CSS keyframe animation
- Blue, purple, dan cyan glow

Animasi utama yang digunakan antara lain:

- `floatOrb1`
- `floatOrb2`
- `floatOrb3`
- `fadeInUp`
- `pulseGlow`
- `scaleIn`
- `shimmer`
- `btnShimmer`

### 10. Responsive layout

Layout menyesuaikan berbagai ukuran layar:

- Mobile
- Tablet
- Laptop
- Desktop
- Wide desktop

Pada layar kecil, profile card dan repository list ditampilkan secara vertikal. Pada layar besar, layout berubah menjadi:

- Sidebar kiri untuk profile card
- Main content di sebelah kanan untuk daftar repository

Sidebar juga menggunakan sticky positioning pada layar desktop agar informasi profil tetap mudah diakses saat pengguna menggulir daftar repository.

### 11. Loading state

Aplikasi menyediakan skeleton loading untuk meningkatkan pengalaman pengguna ketika data GitHub masih dimuat.

Loading state digunakan pada:

- Profile card
- Repository card grid

Skeleton menggunakan gradient animation melalui class `.skeleton` dan keyframe `shimmer`.

### 12. Error handling

Halaman repository detail memiliki fallback error state apabila:

- Repository tidak ditemukan
- GitHub API gagal diakses
- Terjadi error saat mengambil detail repository
- Data bahasa repository gagal dimuat

Pengguna akan melihat pesan error serta tombol untuk kembali ke halaman utama.

## Masalah yang diselesaikan

### Masalah utama

Profil GitHub standar hanya menampilkan informasi dalam format bawaan GitHub. Format tersebut belum tentu ideal untuk digunakan sebagai personal portfolio karena:

- Tampilan tidak sepenuhnya dapat dikustomisasi
- Informasi repository tersebar dalam halaman GitHub
- Tidak ada visualisasi profil yang terkurasi
- Pengunjung perlu melakukan banyak klik untuk memahami proyek developer
- Data repository sulit diprioritaskan berdasarkan kebutuhan pengguna
- Tidak tersedia pengalaman visual yang konsisten dengan personal branding developer

### Solusi yang ditawarkan

GitHub Profile Card menggabungkan seluruh informasi penting ke dalam satu halaman portfolio yang:

- Mengambil data secara real-time dari GitHub API
- Menampilkan profil dan statistik developer secara ringkas
- Menyediakan pencarian repository
- Menyediakan beberapa metode sorting
- Menampilkan detail teknis repository
- Memvisualisasikan komposisi bahasa pemrograman
- Memiliki desain modern dan responsive
- Dapat dijadikan template untuk username GitHub lain

## Struktur proyek

```text
GitHub-Profile-Card/
├── public/
│   ├── favicon.ico       # Favicon aplikasi
│   └── *.svg             # Asset SVG bawaan dan pendukung
│
├── src/
│   ├── app/
│   │   ├── repo/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │                   # Dynamic repository detail page
│   │   ├── globals.css    # Design system, responsive layout, animations
│   │   ├── layout.tsx     # Root layout, metadata, Inter font
│   │   └── page.tsx       # Halaman utama profile viewer
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.tsx # Reusable button component
│   │   ├── GithubProfile.tsx
│   │   │                   # Profile card dan statistik pengguna
│   │   ├── RepoCard.tsx    # Card untuk setiap repository
│   │   └── RepoList.tsx    # Fetch, search, sort, dan render repository
│   │
│   ├── utils/
│   │   ├── github.ts       # Helper untuk mengambil repository GitHub
│   │   └── languages.tsx   # Helper untuk mengambil bahasa repository
│   │
│   └── types.ts            # TypeScript interface untuk data repository
│
├── eslint.config.mjs       # Konfigurasi ESLint
├── next.config.ts          # Konfigurasi Next.js dan remote image
├── next-env.d.ts           # Type declarations Next.js
├── package.json            # Dependencies dan scripts
├── package-lock.json       # Dependency lockfile
├── postcss.config.mjs      # Konfigurasi Tailwind melalui PostCSS
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md               # Dokumentasi proyek
```

**How it fits together:** Halaman utama pada `src/app/page.tsx` mengambil data profil GitHub menggunakan `fetch`, kemudian meneruskannya ke komponen `GithubProfile`. Komponen `RepoList` mengambil daftar repository melalui `fetchRepos()` dari `src/utils/github.ts`, lalu memproses data menggunakan pencarian, sorting, dan pembatasan jumlah item sebelum dirender melalui `RepoCard`. Ketika halaman detail repository digunakan, dynamic route `src/app/repo/[id]/page.tsx` mengambil daftar repository, mencari repository berdasarkan ID, mengambil statistik bahasa melalui `fetchRepoLanguages()`, lalu menampilkan detail dan visualisasi komposisi bahasa.

## Alur data aplikasi

```text
GitHub REST API
      │
      ├── /users/{username}
      │        │
      │        └── GithubProfile
      │
      ├── /users/{username}/repos
      │        │
      │        └── fetchRepos()
      │                  │
      │                  └── RepoList
      │                              │
      │                              └── RepoCard
      │
      └── /repos/{username}/{repo}/languages
               │
               └── fetchRepoLanguages()
                              │
                              └── Repository Detail Page
```

## Cara menjalankan proyek

### Prasyarat

- Node.js versi 18 atau lebih baru
- npm versi 9 atau lebih baru
- Koneksi internet untuk mengakses GitHub REST API

### Instalasi

```bash
git clone https://github.com/himang-dg/GitHub-Profile-Card.git
cd GitHub-Profile-Card
npm install
```

### Menjalankan development server

```bash
npm run dev
```

Aplikasi dapat diakses melalui:

```text
http://localhost:3000
```

### Menjalankan production build

```bash
npm run build
npm run start
```

### Menjalankan lint

```bash
npm run lint
```

### Environment variables

Repository ini tidak menggunakan environment variable wajib. Data diambil langsung dari GitHub REST API melalui request client-side dan server-side.

## Konfigurasi untuk username GitHub lain

Project dapat digunakan sebagai template profile viewer untuk username lain. Username saat ini ditulis secara langsung pada beberapa file:

```text
src/app/page.tsx
src/components/RepoList.tsx
src/app/repo/[id]/page.tsx
```

Bagian yang perlu diubah antara lain:

```typescript
fetch("https://api.github.com/users/YOUR_USERNAME")
```

```typescript
fetchRepos("YOUR_USERNAME")
```

```typescript
fetchRepoLanguages("YOUR_USERNAME", repo.name)
```

Untuk versi yang lebih scalable, username dapat dipindahkan ke:

- Environment variable
- Dynamic route
- Search input
- Configuration file
- Parameter URL

## Highlight teknis untuk portfolio

- Membangun dashboard portfolio berbasis data GitHub REST API.
- Menggunakan Next.js App Router dengan kombinasi client component dan async server component.
- Mengimplementasikan dynamic route untuk halaman detail repository.
- Membuat reusable React components untuk profile card, repository card, repository list, dan button.
- Menggunakan TypeScript strict mode untuk meningkatkan keamanan tipe data.
- Membuat filtering dan sorting repository secara client-side.
- Mengolah data byte bahasa pemrograman menjadi persentase visual.
- Membuat design system custom berbasis CSS variables.
- Mengimplementasikan glassmorphism dengan `backdrop-filter`, gradient, shadow, dan glow.
- Membuat responsive layout dengan pendekatan mobile-first.
- Menyediakan skeleton loading dan error fallback.
- Mengatur remote image domain GitHub melalui `next.config.ts`.
- Mengoptimalkan asset gambar melalui ImgBot pada riwayat repository.

## Nilai proyek

GitHub Profile Card menunjukkan kemampuan dalam membangun aplikasi frontend modern yang menggabungkan:

- Integrasi API eksternal
- Pengolahan data asynchronous
- Component-based architecture
- Responsive UI engineering
- Visual design system
- Dynamic routing
- Data visualization sederhana
- Type-safe development
- Optimasi user experience

Proyek ini cocok digunakan sebagai contoh karya untuk posisi atau bidang:

- Frontend Developer
- React Developer
- Next.js Developer
- TypeScript Developer
- UI Engineer
- Web Developer
- Developer Portfolio Designer

## Deskripsi singkat untuk kartu portfolio

> GitHub Profile Card adalah dashboard portfolio interaktif berbasis Next.js yang menampilkan informasi profil GitHub, statistik developer, daftar repository, pencarian, sorting, serta visualisasi komposisi bahasa pemrograman dalam tampilan iOS-inspired glassmorphism dark mode.

## Deskripsi profesional untuk portfolio website

> GitHub Profile Card merupakan aplikasi web portfolio yang terintegrasi dengan GitHub REST API untuk menyajikan profil developer dan repository publik secara lebih modern, terstruktur, dan interaktif. Aplikasi ini dibangun menggunakan Next.js, React, TypeScript, Tailwind CSS, dan custom CSS design system dengan tampilan dark glassmorphism yang responsive. Pengguna dapat melihat statistik profil, mencari repository, mengurutkan proyek berdasarkan tanggal, stars, forks, atau ukuran, serta membuka halaman detail repository dengan visualisasi distribusi bahasa pemrograman.

## Links

- **Live Preview:** [https://git-hub-profile-card-one.vercel.app/](https://git-hub-profile-card-one.vercel.app/)
- **Source Code:** [https://github.com/himang-dg/GitHub-Profile-Card](https://github.com/himang-dg/GitHub-Profile-Card)
- **GitHub Profile:** [https://github.com/himang-dg](https://github.com/himang-dg)
- **GitHub REST API:** [https://docs.github.com/en/rest](https://docs.github.com/en/rest)
- **Next.js:** [https://nextjs.org/](https://nextjs.org/)
- **Tailwind CSS:** [https://tailwindcss.com/](https://tailwindcss.com/)
- **Vercel:** [https://vercel.com/](https://vercel.com/)
