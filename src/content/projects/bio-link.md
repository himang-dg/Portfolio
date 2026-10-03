---
title: "Bio Link - Personal Hub"
title_en: "Bio Link - Personal Hub"
description: "Landing page personal bergaya link-in-bio responsif untuk menyatukan semua kanal dan profil digital."
description_en: "Responsive link-in-bio style landing page consolidating personal portfolio and social links."
date: "2026-08-20"
image: "/images/bio-link/bio-link.webp"
category: "Web"
tags: ["HTML5", "Vanilla CSS", "JavaScript", "Netlify", "Glassmorphism"]
githubUrl: "https://github.com/himang-dg/Bio-link"
liveUrl: "https://bio-himang.netlify.app/"
---

## What this is
![](/images/bio-link/bio-link.webp)


**Bio Link** adalah landing page personal bergaya “link-in-bio” yang menggabungkan profil singkat, foto/avatar, dan seluruh tautan penting ke dalam satu halaman. Proyek ini dibuat untuk memudahkan seseorang membagikan portfolio, media sosial, kanal komunitas, platform donasi, dan berbagai profil online melalui satu URL yang responsif serta memiliki tampilan modern.

Proyek ini menyelesaikan masalah fragmentasi link di berbagai platform. Alih-alih membagikan banyak URL secara terpisah, pengguna cukup membagikan satu halaman utama yang berisi seluruh kanal digitalnya.

**Informasi proyek:**

- **Nama proyek:** Bio Link
- **Pemilik:** Himang / `himang-dg`
- **Tahun upload:** 2026
- **Initial commit:** 20 Agustus 2026
- **Repository:** [github.com/himang-dg/Bio-link](https://github.com/himang-dg/Bio-link)
- **Live preview:** [bio-himang.netlify.app](https://bio-himang.netlify.app/)
- **Lisensi:** README menyebutkan MIT License, tetapi file `LICENSE` belum terlihat pada daftar top-level repository.
- **Topik repository:** `bio`, `html5`, `profile`, `profile-page`

### Stack

- **Language(s):**
  - HTML5 — struktur halaman dan metadata SEO
  - Vanilla CSS — layout, glassmorphism, animasi, responsive design, dan theming
  - Vanilla JavaScript — rendering link secara dinamis dan sistem ikon SVG
- **Framework / runtime:** Static website tanpa framework, bundler, atau backend
- **Deployment:** Netlify
- **Typography:** Google Fonts — Inter
- **Notable implementation patterns:**
  - Configuration-driven rendering melalui `public/link.js`
  - Inline SVG icon system
  - CSS custom properties untuk warna dan tema
  - CSS animations untuk background mesh, profile entrance, dan link cards
  - Progressive enhancement dengan dukungan `prefers-reduced-motion`

### Masalah yang diselesaikan

Bio Link dirancang untuk menyelesaikan beberapa kebutuhan umum personal branding:

1. **Menggabungkan banyak link dalam satu halaman**  
   Pengguna dapat menampilkan link ke portfolio, GitHub, Instagram, YouTube, TikTok, LinkedIn, Discord, Roblox, PayPal, dan platform lainnya.

2. **Menyediakan halaman profil yang mudah dibagikan**  
   Satu URL dapat digunakan sebagai pusat navigasi ke seluruh identitas digital pengguna.

3. **Mengurangi kebutuhan pengeditan kode utama**  
   Link tidak ditulis langsung di bagian rendering halaman. Pengguna cukup mengubah array `links` pada `public/link.js`.

4. **Menyediakan tampilan yang lebih personal dibanding daftar link biasa**  
   Setiap platform memiliki ikon, warna, glow effect, serta gaya visual yang berbeda.

5. **Mendukung penggunaan lintas perangkat**  
   Layout dibuat dengan pendekatan responsive sehingga dapat digunakan pada perangkat mobile, tablet, dan desktop.

6. **Tetap ringan dan mudah dideploy**  
   Karena tidak menggunakan framework atau proses build, halaman dapat langsung dibuka dari `index.html` atau dideploy ke static hosting seperti Netlify.

### Fitur utama

- **Glassmorphism interface**  
  Link ditampilkan dalam bentuk kartu transparan dengan efek blur, border halus, dan highlight seperti kaca.

- **Animated background mesh**  
  Terdapat tiga gradient blob yang bergerak secara perlahan menggunakan CSS animation.

- **Subtle grid background**  
  Background grid digunakan sebagai elemen dekoratif tambahan untuk memperkuat kesan modern dan digital.

- **Responsive layout**  
  Container utama menggunakan ukuran maksimum sekitar 480px dan menyesuaikan padding serta ukuran elemen pada layar yang lebih besar.

- **Dynamic link rendering**  
  Seluruh link dibuat secara dinamis melalui fungsi `renderLinks()` di `index.html`.

- **External link configuration**  
  Data link dipisahkan ke file `public/link.js`, sehingga penambahan, penghapusan, atau pengurutan link dapat dilakukan tanpa menyentuh logic utama.

- **Platform-based icon system**  
  Object `PLATFORMS` memetakan tipe platform ke nama ikon dan warna brand.

- **Inline SVG icons**  
  Ikon tidak bergantung pada library eksternal. Path SVG didefinisikan di object `ICONS` dan dirender melalui fungsi `makeSvg()`.

- **Per-link theming**  
  Setiap link mendapatkan:
  - warna ikon
  - background ikon
  - warna glow saat hover
  - ikon khusus berdasarkan platform

- **Fallback generic link**  
  Jika `type` tidak dikenali, sistem otomatis menggunakan ikon generik `link`.

- **Animated profile section**  
  Bagian profil memiliki avatar ring dengan gradient warna, efek glow, verified badge, nama, dan bio.

- **Verified badge**  
  Badge verifikasi dibuat langsung menggunakan inline SVG.

- **Staggered card animation**  
  Setiap link card masuk dengan delay bertahap melalui `animationDelay`, sehingga halaman terasa lebih hidup saat pertama dibuka.

- **Hover interaction**  
  Saat cursor diarahkan ke link:
  - card bergerak sedikit ke atas
  - border menjadi lebih terang
  - muncul glow berdasarkan warna platform
  - ikon membesar dan berotasi sedikit
  - arrow bergeser ke kanan

- **External-link security**  
  Link dibuka pada tab baru menggunakan:
  - `target="_blank"`
  - `rel="noopener noreferrer"`

- **Accessibility support**  
  Proyek menggunakan semantic HTML, `alt` text pada avatar, background decorative dengan `aria-hidden="true"`, serta media query `prefers-reduced-motion`.

- **Dynamic copyright year**  
  Tahun pada footer diisi otomatis menggunakan `new Date().getFullYear()`.

- **30+ supported platform types**  
  Beberapa platform yang tersedia antara lain:
  - Website
  - Facebook
  - Instagram
  - Twitter / X
  - YouTube
  - GitHub
  - TikTok
  - Telegram
  - Pinterest
  - LinkedIn
  - Spotify
  - Discord
  - Dribbble
  - Medium
  - PayPal
  - Twitch
  - WhatsApp
  - Threads
  - Roblox
  - Steam
  - Snapchat
  - Kick
  - LINE
  - Shopee
  - Tokopedia
  - Saweria
  - Trakteer
  - Ko-fi
  - Email
  - Marketplace
  - Buy Me a Coffee
  - Generic Link

### Link yang saat ini ditampilkan

Konfigurasi aktif pada `public/link.js` menampilkan 11 link:

- Portfolio
- MyCoffee
- Instagram
- YouTube
- GitHub
- TikTok
- LinkedIn
- Roblox
- Discord
- PayPal
- Facebook

Penambahan link baru dapat dilakukan dengan menambahkan object baru ke array `links`.

## How it's organized

```text
Bio-link/
├── index.html          # Halaman utama, metadata, struktur HTML,
│                       # seluruh CSS, konfigurasi platform, ikon SVG,
│                       # dan logic rendering link
├── public/
│   └── link.js         # Konfigurasi link personal yang ditampilkan
└── readme.md           # Dokumentasi fitur, instalasi, customization,
                        # daftar platform, dan penggunaan proyek
```

**How it fits together:**  
`index.html` menjadi entry point utama aplikasi. File tersebut berisi struktur profile page, CSS untuk visual interface, konfigurasi warna dan ikon platform, serta fungsi JavaScript untuk membangun link card secara dinamis.

Saat halaman selesai dimuat, event `DOMContentLoaded` menjalankan dua proses utama: mengisi tahun footer secara otomatis dan memanggil `renderLinks()`. Fungsi ini membaca array `links` dari `public/link.js`, mengambil konfigurasi ikon dan warna dari `PLATFORMS`, lalu membuat setiap link card menggunakan DOM API.

Alur utama aplikasinya adalah:

```text
public/link.js
      ↓
Array links
      ↓
renderLinks()
      ↓
PLATFORMS + ICONS
      ↓
Dynamic SVG link cards
      ↓
Responsive bio-link page
```

### Struktur teknis utama

#### `index.html`

File ini menangani:

- HTML document structure
- SEO metadata
- Open Graph metadata
- Twitter Card metadata
- Google Fonts integration
- Profile section
- Avatar dan verified badge
- Background mesh dan grid
- Responsive layout
- Link card styling
- CSS animations
- Platform configuration
- SVG icon definitions
- Dynamic link rendering
- Footer year generation

#### `public/link.js`

File ini menjadi single source of truth untuk data link. Setiap item menggunakan format:

```javascript
{
  type: 'github',
  label: 'GitHub',
  url: 'https://github.com/username'
}
```

Field yang digunakan:

- `type` — menentukan platform, ikon, dan warna
- `label` — teks yang ditampilkan pada card
- `url` — tujuan link

URL `/` dapat digunakan untuk menyembunyikan link karena akan dilewati oleh logic `renderLinks()`.

### Design system

Visual interface menggunakan beberapa prinsip desain:

- Dark background dengan warna dasar `#08080d`
- Card transparan dengan gradient halus
- Backdrop blur untuk efek glassmorphism
- Border dengan opacity rendah
- Gradient warna pada avatar ring
- Platform-specific accent color
- Soft shadow dan glow saat hover
- Layout centered dengan lebar maksimum 480px
- Typography menggunakan font Inter
- Animasi dengan easing cubic-bezier untuk transisi yang halus

### How to run it

Proyek ini tidak memerlukan instalasi dependency atau proses build.

```bash
git clone https://github.com/himang-dg/Bio-link.git
cd Bio-link
```

Kemudian buka file berikut menggunakan browser:

```text
index.html
```

Atau jalankan menggunakan static server sederhana:

```bash
python3 -m http.server 8000
```

Setelah itu buka:

```text
http://localhost:8000
```

### Cara melakukan customization

#### Mengubah link

Edit file:

```text
public/link.js
```

Contoh:

```javascript
const links = [
  {
    type: 'website',
    label: 'Portfolio',
  url: 'https://yoursite.com'
  },
  {
    type: 'github',
    label: 'GitHub',
  url: 'https://github.com/yourusername'
  },
  {
    type: 'instagram',
    label: 'Instagram',
  url: 'https://instagram.com/yourusername'
  }
];
```

#### Mengubah profil

Edit bagian berikut pada `index.html`:

- Avatar
- Nama
- Verified badge
- Bio
- Footer text

#### Mengubah warna tema

Warna utama dapat diubah melalui CSS custom properties pada bagian `:root`:

```css
:root {
  --bg: #08080d;
  --text: #eeeef3;
  --text-dim: #7a7a92;
  --text-muted: #4a4a60;
}
```

#### Mengubah background

Background gradient blobs dikontrol melalui class:

```text
.bg-blob-1
.bg-blob-2
.bg-blob-3
```

### Portfolio showcase description

Berikut versi singkat yang dapat digunakan pada kartu portfolio:

> **Bio Link** adalah personal link-in-bio website yang dibuat menggunakan HTML5, Vanilla CSS, dan Vanilla JavaScript. Proyek ini menyediakan satu halaman terpusat untuk menampilkan portfolio, media sosial, platform komunitas, serta link donasi dalam interface glassmorphism yang modern dan responsif. Sistem link dibuat dinamis menggunakan konfigurasi terpisah di `public/link.js`, lengkap dengan dukungan lebih dari 30 tipe platform, inline SVG icons, per-link theming, animated background, hover interaction, SEO metadata, dan accessibility support. Website ini dideploy sebagai static site menggunakan Netlify tanpa framework maupun proses build.

### Portfolio project details

| Item | Detail |
|---|---|
| Project name | Bio Link |
| Category | Personal Branding / Link-in-Bio Website |
| Role | Developer |
| Year | 2026 |
| Status | Deployed |
| Frontend | HTML5, Vanilla CSS, Vanilla JavaScript |
| Design style | Glassmorphism, dark mode, animated gradient mesh |
| Deployment | Netlify |
| Repository | [GitHub Repository](https://github.com/himang-dg/Bio-link) |
| Live Preview | [Open Live Preview](https://bio-himang.netlify.app/) |
| Build system | None |
| Backend | None |
| Database | None |
| License | MIT according to README |

### Catatan analisis repository

- Repository hanya memiliki satu halaman utama dan satu file konfigurasi JavaScript.
- Tidak ditemukan framework frontend, backend, database, package manager, atau bundler.
- README mendokumentasikan `package.json` pada struktur proyek, tetapi file tersebut tidak terlihat pada daftar top-level repository yang tersedia.
- README juga merujuk ke file `LICENSE`, sementara file tersebut belum terlihat pada daftar top-level repository.
- Implementasi aktual menggunakan JavaScript native, DOM API, CSS custom properties, inline SVG, dan CSS animations.
- Versi yang sedang dianalisis menggunakan branch `main`.
- Repository terakhir memiliki commit yang memperbaiki live demo link pada README.

## How to run it

```bash
git clone https://github.com/himang-dg/Bio-link.git
cd Bio-link
python3 -m http.server 8000
```

Buka:

```text
http://localhost:8000
```

Untuk deployment, repository dapat langsung dihubungkan ke Netlify sebagai static website dengan:

```text
Build command: kosongkan
Publish directory: /
```

Alternatif paling sederhana adalah membuka `index.html` secara langsung di browser.

