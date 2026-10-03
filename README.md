# HIMANG — Web Developer & Digital Creator 🚀

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)]()

Personal portfolio website yang modern, responsif, dan fully animated — dibangun dengan Next.js 16, Tailwind CSS v4, dan Framer Motion.

---

<div align="center">
<h3>💸 Support Me 💰</h3>
<table>
  <tr>
    <td align="center">
      <a href="https://paypal.me/DogGhozt" target="_blank">
        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/paypal/default.svg" width="52" height="40" alt="PayPal" />
      </a>
    </td>
    <td align="center">
      <a href="https://tako.id/himang" target="_blank">
        <img src="https://img.icons8.com/?size=100&id=13013&format=png&color=000000" width="52" height="40" alt="Tako" />
      </a>
    </td>
  </tr>
</table>
</div>

---

🌐 **Live:** [himang.vercel.app](https://himang.vercel.app/)

---

## ✨ Fitur Utama

- 🎨 **Dark Mode Premium** — Desain gelap modern dengan glassmorphism, gradient glow, dan noise texture
- 🌍 **Bilingual (ID/EN)** — Auto-detect bahasa browser, switchable manual
- 🎬 **Animasi Halus** — Framer Motion di seluruh section (scroll reveal, hover effects, typing animation)
- 📱 **Fully Responsive** — Dioptimalkan untuk Mobile, Tablet, dan Desktop
- 💼 **Experience & Education** — Timeline interaktif dengan tab switching antara Pengalaman Kerja dan Pendidikan
- 🏷️ **Tag Icons** — Setiap teknologi/skill otomatis mendapat icon berwarna dari React Icons
- 📂 **Markdown Projects** — Kelola proyek dari file `.md` tanpa database
- 🔍 **SEO Optimized** — Meta tags, Open Graph, Twitter Card, dan semantic HTML
- ⚡ **Performa Tinggi** — Next.js Turbopack, optimized images, code splitting

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js 16+ (App Router, Turbopack) |
| **Bahasa** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 + `@tailwindcss/typography` |
| **Animasi** | Framer Motion |
| **Ikon** | React Icons + Lucide React |
| **Font** | Inter + JetBrains Mono (Google Fonts) |
| **Konten** | Markdown via `gray-matter` + `react-markdown` |
| **Deployment** | Vercel |

---

## 📂 Struktur Proyek

```
src/
├── app/
│   ├── globals.css          # Design system & utility classes
│   ├── layout.tsx           # Root layout (fonts, metadata, i18n provider)
│   └── page.tsx             # Halaman utama (komposisi semua section)
├── components/
│   ├── Navbar.tsx            # Navigasi + mobile drawer + language toggle
│   ├── Hero.tsx              # Landing section + typing animation
│   ├── About.tsx             # Bio + foto profil + statistik
│   ├── Skills.tsx            # Grid tech stack dengan hover effects
│   ├── Services.tsx          # Kartu layanan (Web Dev, Roblox, Design, Content)
│   ├── Projects.tsx          # Grid proyek + filter kategori + modal detail
│   ├── ProjectCard.tsx       # Kartu individual proyek
│   ├── Experience.tsx        # Tab Work Experience & Education + timeline
│   ├── Contact.tsx           # Email + social links
│   ├── Footer.tsx            # Copyright + back to top
│   ├── SectionWrapper.tsx    # Wrapper animasi scroll reveal
│   └── TagIcon.tsx           # Mapping tag → icon React Icons
├── content/
│   └── projects/             # File markdown proyek (.md)
├── data/
│   ├── personal.ts           # Data diri, pengalaman kerja, pendidikan
│   └── techstack.ts          # Daftar keahlian + ikon
├── hooks/
│   └── useTranslation.tsx    # Context & hook multi-bahasa
├── lib/
│   └── projects.ts           # Parser markdown proyek
└── locales/
    ├── en.json               # Teks UI bahasa Inggris
    └── id.json               # Teks UI bahasa Indonesia
```

---

## 👨‍💻 Cara Mengubah Data

### 1. Data Diri & Sosial Media

Buka **`src/data/personal.ts`**:

```typescript
export const personalData = {
  name: "Benidiktus Himang",
  title: "Web Developer & Digital Creator",
  profilePicture: "/himme.png",
  resumeUrl: "/Las-Benidiktus Himang-CV.pdf",
  roles: ["Web Developer", "Roblox Developer", ...],      // Typing animation (EN)
  roles_id: ["Web Developer", "Roblox Developer", ...],    // Typing animation (ID)
  bio: ["...", "..."],      // Bahasa Indonesia
  bio_en: ["...", "..."],   // English
  socials: [...]
};
```

**Tambah medsos baru:**
1. Cari icon di [react-icons.github.io](https://react-icons.github.io/react-icons/)
2. Import icon di baris atas file
3. Tambah ke array `socials`:
   ```typescript
   { name: "Twitter", url: "https://...", icon: FaTwitter, color: "text-blue-400", bg: "bg-blue-400/10 hover:bg-blue-400/20" }
   ```

### 2. Pengalaman Kerja & Pendidikan

Pengalaman Kerja (*Work Experience*) dan Pendidikan (*Education*) dikelola terpusat di file lokalisasi **`src/locales/id.json`** dan **`src/locales/en.json`** pada key `"experience"`:

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
        "school": "Nama Sekolah/Kampus",
        "description": "Jurusan / Program Studi",
        "year": "2020 – 2024",
        "location": "Kota, Indonesia"
      }
    ]
  }
}
```

> 💡 Tags otomatis mendapat icon berwarna! Lihat mapping lengkap di `src/components/TagIcon.tsx`.

### 3. Proyek & Postingan (Markdown & Lokalisasi)

Data postingan proyek (Judul, Deskripsi, dan Isi Konten Markdown) tersimpan terpusat di dua tempat:
1. **File JSON Lokalisasi:** **`src/locales/id.json`** & **`src/locales/en.json`** pada key `"projects.items.[id]"`
   ```json
   "items": {
     "roblox-map-development": {
       "title": "Roblox Map: MangObby",
       "description": "Mendesain dan membangun lingkungan pulau terbang...",
       "content": "# Develop Roblox Map: MangObby\n\n..."
     }
   }
   ```
2. **File Markdown:** Folder **`src/content/projects/`** untuk file `.md` utama.

### 4. Tech Stack / Keahlian

Buka **`src/data/techstack.ts`**:

```typescript
{ icon: FaPython, name: "Python", color: "text-blue-500", bg: "bg-blue-500/10" }
```

### 5. Teks UI & Lokalisasi

Semua teks UI, navigasi, serta postingan proyek bilingual dikelola terpusat di:
- `src/locales/id.json` — Bahasa Indonesia
- `src/locales/en.json` — Bahasa Inggris

> ⚠️ Pastikan struktur key antara `id.json` dan `en.json` tetap simetris (1:1).

---

## 🖼 Panduan Gambar & File Statis

Semua file statis ditaruh di folder **`public/`**:

| File | Lokasi | Resolusi Ideal | Format |
|------|--------|----------------|--------|
| Foto Profil | `/himme.png` | 500×500 — 800×800 px (1:1) | PNG / WebP |
| Thumbnail Proyek | `/projects/nama.png` | 1280×720 — 1920×1080 px (16:9) | PNG / WebP |
| Favicon | `src/app/favicon.ico` | 64×64 px | ICO |
| CV / Resume | `/Las-Benidiktus Himang-CV.pdf` | — | PDF |

> 💡 Usahakan gambar proyek < 500 KB agar website tetap cepat.

---

## 🚀 Menjalankan Secara Lokal

```bash
# Install dependensi (sekali saja)
npm install

# Jalankan dev server
npm run dev

# Buka di browser
# http://localhost:3000
```

Setiap kali Anda save file `.md`, `.ts`, atau `.tsx`, browser otomatis refresh (Hot Module Replacement).

---

## 📦 Build & Deploy

```bash
# Build produksi
npm run build

# Jalankan build lokal
npm start
```

**Deploy ke Vercel:**
1. Push kode ke GitHub
2. Connect repository di [vercel.com](https://vercel.com)
3. Vercel akan auto-build setiap push ke branch `main`

---

## 📝 Catatan Penting

- **Tag Icons** — Jika menggunakan teknologi baru yang belum ada iconnya, tambahkan mapping di `src/components/TagIcon.tsx` menggunakan icon dari [react-icons](https://react-icons.github.io/react-icons/)
- **Experience Section** — Mendukung tab switching antara "Pengalaman Kerja" (freelance/magang) dan "Pendidikan"
- **Bahasa Otomatis** — Website auto-detect bahasa browser pengunjung. Jika browser bahasa Indonesia → tampil ID, lainnya → EN. Bisa di-switch manual via tombol 🇮🇩/🇬🇧 di navbar
- **Animasi** — Semua section menggunakan scroll-triggered animations via Framer Motion. Animasi hanya berjalan sekali (tidak replay saat scroll ulang)

---
---

<p align="right">
  <a href="#top">
    <img src="https://img.icons8.com/?size=100&id=114041&format=png" alt="Back to top" width="70" height="70">
  </a>
</p>
<p align="center">
  Dibuat dengan ❤️ oleh <strong>HIMANG</strong>
</p>
