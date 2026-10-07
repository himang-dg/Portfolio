# HIMANG - Web Developer & Digital Creator

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

Website portfolio personal yang modern, responsif, dan interaktif - dibangun menggunakan Next.js 16 (Turbopack), Tailwind CSS v4, dan Framer Motion.

---

<div align="center">
<h3>Support Me</h3>
<table>
  <tr>
    <td align="center">
      <a href="https://paypal.me/DogGhozt" target="_blank" rel="noopener noreferrer">
        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/paypal/default.svg" width="52" height="40" alt="PayPal" />
      </a>
    </td>
    <td align="center">
      <a href="https://tako.id/himang" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/?size=100&id=13013&format=png&color=000000" width="52" height="40" alt="Tako" />
      </a>
    </td>
  </tr>
</table>
</div>

---

**Live Preview:** [himang.vercel.app](https://himang.vercel.app/)

---

## Fitur Utama

- **Dark Mode Premium:** Desain tema gelap dengan sentuhan glassmorphism, glowing accents, dan canvas partikel ambient.
- **Bilingual (ID / EN):** Deteksi otomatis bahasa peramban dengan opsi alih bahasa manual menggunakan segmented switch `[ ID | EN ]`.
- **Motion Halus & Terarah:** Didukung Framer Motion dengan physics spring alami, synchronized entrance, dan dukungan penuh untuk preferensi `prefers-reduced-motion`.
- **Proyek Terkurasi (3 Card / Page):** Tampilan katalog proyek yang fokus dan rapi (3 kartu per halaman) dilengkapi pagination interaktif serta filter kategori (All, Web, Design, Tools, Game).
- **Modal Detail Proyek:** Menampilkan dokumentasi lengkap berbasis Markdown (`react-markdown` + `remark-gfm`), thumbnail layar penuh, dan tautan live / repositori.
- **Timeline Pengalaman & Edukasi:** Antarmuka tab interaktif antara Pengalaman Kerja dan Riwayat Pendidikan dengan badge teknologi dinamis.
- **Layanan Lengkap:** 4 pilar keahlian utama (Web Development, Roblox Development, Desain Grafis, dan Content Creator).
- **Kopas Email & Kontak:** Salin alamat email secara instan dengan indikator umpan balik visual dan integrasi seluruh akun media sosial.
- **Performa & SEO:** Menggunakan Next.js Turbopack, font Plus Jakarta Sans dan JetBrains Mono, optimasi gambar Next Image, dan Open Graph metadata.

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| **Core Framework** | Next.js 16 (App Router, Turbopack) |
| **Library UI** | React 19 |
| **Bahasa** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS v4 + `@tailwindcss/typography` |
| **Animasi** | Framer Motion |
| **Ikon** | React Icons + Lucide React |
| **Tipografi** | Plus Jakarta Sans & JetBrains Mono (`next/font/google`) |
| **Parser Konten** | `gray-matter` + `react-markdown` + `remark-gfm` |
| **Platform Hosting** | Vercel |

---

## Struktur Proyek

```text
src/
├── app/
│   ├── favicon.ico             # Favicon website
│   ├── globals.css             # Tema Tailwind CSS v4 & custom variables
│   ├── layout.tsx              # Root layout (fonts, SEO metadata, i18n provider)
│   └── page.tsx                # Halaman utama (komposisi section)
├── components/
│   ├── About.tsx               # Bio, foto profil, dan statistik count-up
│   ├── BackToTop.tsx           # Tombol kembali ke atas dengan scroll tracking
│   ├── Contact.tsx             # Kartu email langsung dan tautan sosial media
│   ├── Experience.tsx          # Tab Work Experience & Education dengan timeline
│   ├── FloatingParticles.tsx   # Canvas partikel ambient dengan pembersihan memori aman
│   ├── Footer.tsx              # Signature dan hak cipta minimalis
│   ├── Hero.tsx                # Hero section dengan animasi teks peran dinamis
│   ├── LoadingScreen.tsx       # Animasi pembuka saat website pertama kali dimuat
│   ├── Navbar.tsx              # Navigasi sticky, mobile drawer, dan segmented switcher [ID | EN]
│   ├── ProjectCard.tsx         # Kartu proyek dengan efek hover dan icon kategori
│   ├── Projects.tsx            # Katalog proyek (3 card/halaman, filter, modal)
│   ├── SectionWrapper.tsx      # Pembungkus section dengan scroll reveal lembut
│   ├── Services.tsx            # 4 kartu layanan keahlian
│   ├── Skills.tsx              # Matriks keahlian teknologi berdasarkan domain
│   └── TagIcon.tsx             # Mapping dinamis tag teknologi ke icon
├── content/
│   └── projects/               # Berkas markdown dokumentasi proyek (.md)
├── data/
│   ├── personal.ts             # Data profil, tautan sosial media, dan CV
│   └── techstack.tsx           # Daftar teknologi dan ikon keahlian
├── hooks/
│   └── useTranslation.tsx      # Provider & context multi-bahasa (ID / EN)
├── lib/
│   └── projects.ts             # Parser metadata markdown proyek
└── locales/
    ├── en.json                 # Kamus terjemahan Bahasa Inggris
    └── id.json                 # Kamus terjemahan Bahasa Indonesia
```

---

## Panduan Pengelolaan Data

### 1. Data Diri & Tautan Sosial Media

Edit berkas **`src/data/personal.ts`**:

```typescript
export const personalData = {
  name: "Benidiktus Himang",
  title: "Web Developer & Digital Creator",
  profilePicture: "/himme.webp",
  resumeUrl: "/Las-Benidiktus Himang-CV.pdf",
  roles: ["Web Developer", "Roblox Developer", ...],      // Animasi peran (EN)
  roles_id: ["Web Developer", "Roblox Developer", ...],   // Animasi peran (ID)
  bio: ["...", "..."],      // Bio Bahasa Indonesia
  bio_en: ["...", "..."],   // Bio Bahasa Inggris
  socials: [...]            // Tautan media sosial
};
```

### 2. Riwayat Kerja & Pendidikan

Riwayat kerja dan pendidikan dikelola di berkas lokalisasi **`src/locales/id.json`** dan **`src/locales/en.json`** pada bagian `"experience"`:

```json
{
  "experience": {
    "work": [
      {
        "role": "Roblox QA & Map Tester",
        "company": "Hetix Project (By @lancetlot)",
        "type": "Freelance / Contributor",
        "year": "2026",
        "location": "Remote, Indonesia",
        "description": ["..."],
        "tags": ["Roblox", "QA Testing", "UI/UX Evaluation"]
      }
    ],
    "education": [
      {
        "school": "STMIK Widya Cipta Dharma",
        "description": "Jurusan Teknik Informatika",
        "year": "2020 - Sekarang",
        "location": "Samarinda, Indonesia"
      }
    ]
  }
}
```

### 3. Menambah Proyek Baru

Setiap proyek terdiri dari dua bagian:

1. **Berkas Markdown (`src/content/projects/[slug].md`)**:
   Memuat frontmatter seperti judul, tanggal, kategori, tag, url gambar, tautan live / GitHub, dan isi artikel dokumentasi:
   ```markdown
   ---
   title: "Nama Proyek"
   description: "Deskripsi singkat proyek."
   date: "2026-05"
   image: "/images/nama-folder/gambar.webp"
   category: "Web"
   tags: ["Next.js", "Tailwind CSS", "TypeScript"]
   liveUrl: "https://example.com"
   githubUrl: "https://github.com/..."
   ---

   # Dokumentasi Proyek
   ...
   ```
2. **Kamus Teks Terjemahan (`src/locales/id.json` & `en.json`)**:
   Tambahkan terjemahan judul, deskripsi, dan konten di dalam objek `"projects.items.[slug]"`.

### 4. File Statis & Aset Gambar

Letakkan semua file gambar dan berkas unduhan di folder **`public/`**:

| Berkas | Lokasi | Format yang Disarankan |
|---|---|---|
| Foto Profil | `public/himme.webp` | WebP (rasio 1:1) |
| Berkas CV | `public/Las-Benidiktus Himang-CV.pdf` | PDF |
| Tangkapan Layar Proyek | `public/images/[nama-proyek]/` | WebP / PNG (rasio 16:9) |
| Icon Lokal Khusus | `public/iconLocal/` | WebP / SVG |

---

## Menjalankan di Lingkungan Lokal

```bash
# 1. Pasang dependensi
npm install

# 2. Jalankan server pengembangan
npm run dev

# Buka http://localhost:3000 di peramban
```

## Membangun untuk Produksi

```bash
# Lakukan kompilasi build produksi Next.js
npm run build

# Jalankan server hasil build
npm run start
```

---

<p align="right">
  <a href="#top">
    <img src="https://img.icons8.com/?size=100&id=114041&format=png" alt="Back to top" width="70" height="70">
  </a>
</p>

<p align="center">
  Dibuat dengan ❤️ oleh <strong>HIMANG</strong>
</p>
