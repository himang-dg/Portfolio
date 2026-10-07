---
title: "IPK Kalkulator"
title_en: "GPA Calculator (IPK Kalkulator)"
description: "Aplikasi web interaktif untuk menghitung IPK semester dan kumulatif mahasiswa dengan visualisasi chart."
description_en: "Interactive web application to calculate semester and cumulative GPA with visual chart analytics."
date: "2025-03-19"
image: "/images/ipk-kalkulator/ipk-kalkulator.webp"
category: "Web"
tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js"]
githubUrl: "https://github.com/himang-dg/ipk-kalkulator"
liveUrl: "https://ipk-kalkulator.netlify.app/"
---

# IPK Kalkulator
![](/images/ipk-kalkulator/ipk-kalkulator.webp)
![](/images/ipk-kalkulator/ipk-kalkulator-2.webp)
![](/images/ipk-kalkulator/ipk-kalkulator-3.webp)
## What this is

**IPK Kalkulator** adalah aplikasi web interaktif untuk menghitung Indeks Prestasi Kumulatif (IPK) mahasiswa berdasarkan mata kuliah, jumlah SKS, dan nilai yang diperoleh pada setiap semester.

Aplikasi ini membantu mahasiswa menghitung IPK semester maupun IPK kumulatif secara cepat tanpa perlu menggunakan kalkulator manual atau spreadsheet. Selain menampilkan hasil perhitungan, aplikasi juga menyediakan ringkasan data dan visualisasi perkembangan IPK dalam bentuk gauge chart serta line chart.

### Informasi Proyek

| Detail | Informasi |
|---|---|
| **Nama proyek** | IPK Kalkulator |
| **Kategori** | Education / Productivity / Calculator |
| **Tahun dibuat** | 2025 |
| **Tanggal repository dibuat** | 19 Maret 2025 |
| **Repository** | [github.com/himang-dg/ipk-kalkulator](https://github.com/himang-dg/ipk-kalkulator) |
| **Live Preview** | [ipk-kalkulator.netlify.app](https://ipk-kalkulator.netlify.app/) |
| **Status** | Public repository |
| **Lisensi** | Belum ditentukan secara eksplisit |
| **Author** | [Himang](https://github.com/himang-dg) |

---

## Ringkasan Fungsi Utama

IPK Kalkulator memungkinkan pengguna untuk:

- Menambahkan beberapa semester.
- Menambahkan mata kuliah ke setiap semester.
- Mengisi nama mata kuliah.
- Menentukan jumlah SKS.
- Memilih nilai huruf dari A+ sampai E.
- Menghitung poin nilai berdasarkan skala 4.0.
- Menghitung IPK untuk setiap semester.
- Menghitung IPK kumulatif dari seluruh semester.
- Melihat total SKS dan total poin.
- Melihat perkembangan IPK melalui grafik.
- Menghapus mata kuliah maupun semester.
- Membuka dan menutup detail setiap semester.
- Beralih antara mode terang dan mode gelap.
- Menggunakan antarmuka yang responsif pada desktop maupun perangkat mobile.

---

## Masalah yang Diselesaikan

Perhitungan IPK sering dilakukan secara manual menggunakan kalkulator, catatan pribadi, atau spreadsheet. Cara tersebut dapat menjadi kurang praktis ketika mahasiswa memiliki banyak mata kuliah dan beberapa semester.

Proyek ini menyelesaikan beberapa permasalahan tersebut dengan menyediakan:

1. **Perhitungan otomatis**

   Pengguna tidak perlu menghitung total SKS, total poin, maupun rata-rata IPK secara manual. Semua nilai diperbarui secara langsung ketika data mata kuliah berubah.

2. **Pengelolaan data berdasarkan semester**

   Mata kuliah dikelompokkan berdasarkan semester sehingga pengguna dapat melihat performa akademik secara lebih terstruktur.

3. **Perhitungan IPK kumulatif**

   Aplikasi menggabungkan seluruh mata kuliah dari semua semester untuk menghitung IPK kumulatif berdasarkan total bobot nilai dan total SKS.

4. **Visualisasi performa akademik**

   Data IPK disajikan dalam bentuk gauge chart untuk IPK kumulatif dan line chart untuk melihat perkembangan IPK dari semester ke semester.

5. **Pengalaman penggunaan yang sederhana**

   Antarmuka dibuat dengan pola interaksi yang mudah dipahami, seperti tombol tambah, hapus, tab ringkasan, tabel detail, dan toggle tema.

---

## Fitur-Fitur

### 1. Manajemen Semester

Pengguna dapat:

- Menambahkan semester baru.
- Menghapus semester.
- Membuka atau menutup detail semester.
- Melihat seluruh mata kuliah yang terdapat pada semester tertentu.

Implementasi fitur ini dikelola melalui fungsi seperti:

- `addSemester`
- `deleteSemester`
- `toggleSemesterExpand`

yang terdapat pada `app/page.tsx`.

### 2. Manajemen Mata Kuliah

Setiap semester dapat memiliki beberapa mata kuliah. Pengguna dapat:

- Menambahkan mata kuliah.
- Mengubah nama mata kuliah.
- Mengatur jumlah SKS.
- Memilih grade.
- Menghapus mata kuliah.

Jumlah SKS yang tersedia adalah:

- 1 SKS
- 2 SKS
- 3 SKS
- 4 SKS

Grade yang tersedia adalah:

- A+
- A
- A-
- B+
- B
- B-
- C+
- C
- C-
- D+
- D
- D-
- E

### 3. Konversi Nilai ke Poin

Aplikasi menggunakan sistem konversi nilai berbasis skala 4.0:

| Grade | Poin |
|---|---:|
| A+ | 4.0 |
| A | 4.0 |
| A- | 3.7 |
| B+ | 3.3 |
| B | 3.0 |
| B- | 2.7 |
| C+ | 2.3 |
| C | 2.0 |
| C- | 1.7 |
| D+ | 1.3 |
| D | 1.0 |
| D- | 0.7 |
| E | 0.0 |

Konversi ini didefinisikan dalam fungsi `gradeToPoint` pada `app/types.ts`.

### 4. Perhitungan IPK per Semester

Untuk setiap semester, aplikasi menghitung:

- Total SKS.
- Total poin.
- IPK semester.

Rumus yang digunakan:

```text
IPK Semester = Total Poin / Total SKS
```

Total poin setiap mata kuliah dihitung dengan rumus:

```text
Poin Mata Kuliah = Poin Grade × Jumlah SKS
```

### 5. Perhitungan IPK Kumulatif

IPK kumulatif dihitung dengan menggabungkan seluruh mata kuliah dari semua semester.

```text
IPK Kumulatif = Total Poin Seluruh Mata Kuliah / Total SKS Seluruh Semester
```

Hasil perhitungan dibulatkan hingga dua angka desimal.

### 6. Halaman Ringkasan

Tab **Ringkasan** menampilkan:

- IPK kumulatif dalam ukuran besar.
- Tabel IPK setiap semester.
- Total SKS setiap semester.
- Total poin setiap semester.
- Nilai IPK per semester.

Komponen ini diimplementasikan melalui `app/components/Summary.tsx`.

### 7. Detail Mata Kuliah

Tab **Detail Mata Kuliah** menampilkan tabel interaktif untuk setiap semester.

Tabel tersebut menampilkan:

- Nama mata kuliah.
- Jumlah SKS.
- Grade.
- Point pada skala 4.0.
- Total points berdasarkan jumlah SKS.
- Tombol untuk menghapus mata kuliah.

Komponen ini diimplementasikan melalui `app/components/CourseTable.tsx`.

### 8. Visualisasi Data

Aplikasi menggunakan dua jenis visualisasi:

#### Gauge Chart

Menampilkan IPK kumulatif pada rentang 0 hingga 4.0 dengan indikator warna:

- Merah: rentang IPK rendah.
- Kuning: rentang IPK menengah bawah.
- Biru: rentang IPK menengah.
- Hijau: rentang IPK tinggi.

#### Line Chart

Menampilkan perkembangan IPK setiap semester dalam bentuk grafik garis.

Grafik menggunakan:

- Sumbu X: semester.
- Sumbu Y: IPK dari 0 hingga 4.0.
- Tooltip ketika pengguna mengarahkan kursor ke titik grafik.
- Garis yang dibuat smooth agar visualisasi lebih mudah dibaca.

Komponen visualisasi ini diimplementasikan melalui `app/components/Charts.tsx`.

### 9. Dark Mode

Pengguna dapat mengganti tampilan antara:

- Light mode.
- Dark mode.

Perubahan tema dilakukan dengan menambahkan atau menghapus class `dark` pada elemen `<html>`. Komponen toggle menggunakan animasi spring melalui Framer Motion.

Implementasi terkait terdapat pada:

- `app/page.tsx`
- `app/components/ThemeToggle.tsx`
- `app/globals.css`

### 10. Responsive Design

Antarmuka dirancang agar tetap dapat digunakan pada berbagai ukuran layar.

Pada perangkat mobile:

- Tab disusun secara vertikal.
- Tabel mata kuliah berubah menjadi tampilan blok agar lebih mudah dibaca.
- Ukuran tipografi disesuaikan.
- Layout grafik berubah menjadi satu kolom.

---

## Stack

### Language(s)

- **TypeScript** -  bahasa utama untuk logic aplikasi, tipe data, komponen, dan perhitungan IPK.
- **CSS** -  digunakan untuk styling global, tema, layout, dan desain neobrutalism.
- **JavaScript** -  digunakan sebagai bagian dari ekosistem konfigurasi dan tooling Next.js.

### Framework / Runtime

- **Next.js 15.2.3**
- **React 19**
- **TypeScript 5**
- **Node.js runtime**
- **Next.js App Router**

Aplikasi menggunakan file-based routing melalui direktori `app/`. Halaman utama berada di `app/page.tsx`.

### Notable Libraries

- **ECharts** -  library visualisasi untuk membuat gauge chart dan line chart.
- **echarts-for-react** -  dependency integrasi ECharts dengan React.
- **Framer Motion** -  digunakan untuk animasi pada tombol toggle dark mode.
- **Tailwind CSS 4** -  digunakan untuk utility classes dan responsive layout.
- **PostCSS** -  digunakan untuk memproses konfigurasi styling Tailwind CSS.

### Konfigurasi Tambahan

- ESLint dengan konfigurasi `next/core-web-vitals`.
- TypeScript strict mode.
- Path alias `@/*`.
- Next.js Turbopack pada development mode.
- Font Geist dan Geist Mono melalui `next/font/google`.

---

## Struktur Proyek

```text
ipk-kalkulator/
├── app/
│   ├── components/
│   │   ├── Charts.tsx
│   │   ├── CourseTable.tsx
│   │   ├── Summary.tsx
│   │   ├── Tab.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── types.ts
│   └── utils.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

### `app/page.tsx`

Merupakan entry point utama aplikasi dan bertanggung jawab terhadap:

- State semester.
- State mata kuliah.
- State tab aktif.
- State dark mode.
- Penambahan dan penghapusan semester.
- Penambahan, pembaruan, dan penghapusan mata kuliah.
- Perhitungan IPK semester.
- Perhitungan IPK kumulatif.
- Penyusunan layout utama aplikasi.

Komponen utama dirender dari file ini:

- `CourseTable`
- `Summary`
- `Charts`
- `ThemeToggle`
- `Tab`

### `app/types.ts`

Menyediakan definisi tipe data utama:

- `GradeOption`
- `Course`
- `Semester`

File ini juga berisi fungsi `gradeToPoint` untuk mengubah grade huruf menjadi nilai numerik.

### `app/components/CourseTable.tsx`

Mengelola tampilan dan interaksi data mata kuliah pada suatu semester.

Komponen ini menerima callback dari parent untuk:

- Menambah mata kuliah.
- Memperbarui mata kuliah.
- Menghapus mata kuliah.
- Membuka atau menutup semester.
- Menghapus semester.

### `app/components/Summary.tsx`

Menampilkan ringkasan IPK kumulatif dan IPK per semester dalam bentuk card serta tabel.

### `app/components/Charts.tsx`

Menginisialisasi dan mengelola dua chart ECharts:

- Gauge chart untuk IPK kumulatif.
- Line chart untuk perkembangan IPK semester.

Komponen ini juga menangani:

- Perubahan tema chart.
- Resize chart ketika ukuran window berubah.
- Cleanup instance ECharts ketika komponen dilepas.

### `app/components/Tab.tsx`

Komponen reusable untuk tab:

- Ringkasan.
- Detail Mata Kuliah.

### `app/components/ThemeToggle.tsx`

Komponen tombol untuk mengubah light mode dan dark mode. Tombol menggunakan Framer Motion untuk animasi ketika ditekan.

### `app/globals.css`

Berisi:

- Import Tailwind CSS.
- Variabel warna.
- Styling dark mode.
- Styling komponen neobrutalism.
- Styling tabel dan input.
- Responsive media queries.
- Efek hover dan active button.
- Transisi warna.

---

## Konsep Visual dan UI

Proyek ini menggunakan gaya visual **neobrutalism** dengan karakteristik:

- Border hitam yang tegas.
- Box shadow offset.
- Warna cerah dan kontras.
- Tombol dengan efek pergeseran ketika hover.
- Komponen card yang terlihat seperti elemen solid.
- Input dan tabel dengan border yang jelas.
- Interaksi tombol yang responsif.

Class styling utama yang digunakan antara lain:

- `.neo-container`
- `.neo-title`
- `.neo-subtitle`
- `.neo-box`
- `.neo-button`
- `.neo-button-active`
- `.neo-danger-button`
- `.neo-table`
- `.neo-input`
- `.neo-select`
- `.neo-icon-button`

---

## Alur Kerja Aplikasi

1. Aplikasi dimulai dengan satu semester kosong.
2. Pengguna membuka tab **Detail Mata Kuliah**.
3. Pengguna menambahkan mata kuliah ke semester tertentu.
4. Pengguna mengisi nama mata kuliah, jumlah SKS, dan grade.
5. State `semesters` diperbarui setiap kali terjadi perubahan input.
6. Aplikasi menghitung poin untuk setiap mata kuliah.
7. Aplikasi menghitung IPK masing-masing semester.
8. Aplikasi menghitung IPK kumulatif dari semua semester.
9. Tab **Ringkasan** memperlihatkan hasil perhitungan.
10. Komponen `Charts` memperbarui gauge chart dan line chart secara otomatis.

Seluruh data dikelola di sisi client menggunakan React state. Repository ini tidak menggunakan backend, database, autentikasi, maupun API eksternal untuk menyimpan data akademik.

---

## Cara Menjalankan Proyek

### Persyaratan

- Node.js
- npm, Yarn, pnpm, atau Bun

### Instalasi

```bash
git clone https://github.com/himang-dg/ipk-kalkulator.git
cd ipk-kalkulator
npm install
```

### Menjalankan Development Server

```bash
npm run dev
```

Kemudian buka:

```text
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
```

### Menjalankan Production Server

```bash
npm run start
```

### Menjalankan Linter

```bash
npm run lint
```

---

## Script NPM

| Script | Fungsi |
|---|---|
| `npm run dev` | Menjalankan development server dengan Turbopack |
| `npm run build` | Membuat production build |
| `npm run start` | Menjalankan aplikasi hasil build |
| `npm run lint` | Menjalankan pemeriksaan ESLint |

---

## Deployment

Live preview yang terdaftar pada metadata repository:

[https://ipk-kalkulator.netlify.app/](https://ipk-kalkulator.netlify.app/)

Repository tidak memiliki konfigurasi deployment khusus di dalam source code, seperti workflow GitHub Actions atau file konfigurasi Netlify. Namun, aplikasi Next.js ini dapat di-deploy pada platform modern seperti:

- Netlify
- Vercel
- Railway
- Render
- Platform hosting Node.js lainnya

---

## Highlight untuk Portfolio

Proyek ini menunjukkan kemampuan dalam:

- Membangun aplikasi kalkulator berbasis React dan Next.js.
- Menggunakan TypeScript untuk data modeling yang lebih aman.
- Mengelola state kompleks dengan React Hooks.
- Membuat perhitungan IPK berdasarkan bobot SKS.
- Membuat komponen UI yang reusable.
- Mengintegrasikan library visualisasi ECharts.
- Membuat grafik interaktif berbasis data.
- Menerapkan dark mode.
- Membuat desain neobrutalism menggunakan Tailwind CSS dan CSS custom.
- Membuat layout responsive untuk desktop dan mobile.
- Mengoptimalkan lifecycle chart dengan `useEffect`, `useRef`, dan cleanup function.
- Membangun aplikasi client-side tanpa backend atau database.

---

## Deskripsi Singkat untuk Kartu Portfolio

> IPK Kalkulator adalah aplikasi web berbasis Next.js dan TypeScript yang membantu mahasiswa menghitung IPK per semester dan IPK kumulatif secara interaktif. Aplikasi ini dilengkapi dengan manajemen semester dan mata kuliah, perhitungan otomatis berdasarkan SKS dan grade, visualisasi perkembangan IPK menggunakan ECharts, serta dukungan light mode dan dark mode dengan desain neobrutalism yang responsif.

---

## Deskripsi Singkat dalam Bahasa Inggris

> IPK Kalkulator is an interactive GPA calculator built with Next.js, React, and TypeScript. It allows students to manage semesters and courses, calculate semester and cumulative GPA based on credits and grades, and visualize academic performance through gauge and line charts. The application also features responsive neobrutalist styling, dark mode support, and a client-side state-driven experience.

---

## Catatan Teknis

- Data pengguna hanya disimpan sementara di React state.
- Data akan hilang ketika halaman di-refresh karena belum ada local storage atau database persistence.
- Tidak terdapat sistem login atau akun pengguna.
- Tidak terdapat API backend.
- Perhitungan IPK menggunakan skala maksimal 4.0.
- `app/types.ts` menjadi sumber utama tipe data dan konversi grade.
- `app/utils.ts` juga memiliki fungsi konversi grade terpisah, tetapi implementasi perhitungan utama pada halaman menggunakan fungsi dari `app/types.ts`.
- Repository dibuat pada tahun 2025 dengan commit awal bertanggal 19 Maret 2025.
- Versi proyek pada `package.json` adalah `0.1.0`.

---

## Links

- **Repository:** https://github.com/himang-dg/ipk-kalkulator
- **Live Preview:** https://ipk-kalkulator.netlify.app/
- **Author:** https://github.com/himang-dg
- **Project Topics:** Next.js, Next.js 15, TypeScript, Neobrutalism
