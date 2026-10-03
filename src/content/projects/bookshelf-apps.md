---
title: "Bookshelf Apps"
title_en: "Bookshelf Apps"
description: "Aplikasi web pengelola daftar buku bacaan interaktif berbasis JavaScript DOM dan Web Storage API."
description_en: "Interactive book collection management web app built with JavaScript DOM and Web Storage API."
date: "2022-06-22"
image: "/images/bookshelf-apps/bookshelf.webp"
category: "Web"
tags: ["JavaScript", "DOM API", "Web Storage", "HTML5", "CSS3"]
githubUrl: "https://github.com/himang-dg/bookshelf-apps-himang"
liveUrl: "https://himang-dg.github.io/bookshelf-apps-himang/"
---

# Bookshelf Apps

> Aplikasi web untuk mengelola daftar buku menggunakan DOM API dan Web Storage.

## Informasi Proyek

| Detail | Keterangan |
|---|---|
| **Nama proyek** | Bookshelf Apps |
| **Repository** | [bookshelf-apps-himang](https://github.com/himang-dg/bookshelf-apps-himang) |
| **Live Preview** | [himang-dg.github.io/bookshelf-apps-himang](https://himang-dg.github.io/bookshelf-apps-himang/) |
| **Tahun dibuat/upload** | 2022 |
| **Tanggal upload awal** | 22 Juni 2022 |
| **Platform deployment** | GitHub Pages |
| **Tipe aplikasi** | Static web application |
| **Status** | Aktif dan dapat digunakan melalui browser |

## Ringkasan Proyek

Bookshelf Apps adalah aplikasi web sederhana untuk membantu pengguna mengelola koleksi buku yang sedang dibaca maupun yang telah selesai dibaca.

Aplikasi ini menyediakan dua rak utama, yaitu **Belum Dibaca** dan **Selesai Dibaca**. Pengguna dapat menambahkan informasi buku, memindahkan status buku, mengedit data, menghapus buku, serta menyimpan data secara permanen di browser menggunakan `localStorage`.

Proyek ini dibuat sebagai submission pembelajaran untuk menerapkan penggunaan **JavaScript DOM** dan **Web Storage API** tanpa menggunakan framework frontend.

## Masalah yang Diselesaikan

Aplikasi ini menyelesaikan beberapa kebutuhan dasar dalam pengelolaan daftar bacaan:

- Membantu pengguna mencatat buku yang sedang ingin atau sedang dibaca.
- Memisahkan buku berdasarkan status penyelesaian.
- Menyimpan daftar buku agar tidak hilang ketika halaman dimuat ulang.
- Menyediakan informasi penting seperti judul, penulis, tahun terbit, dan target penyelesaian.
- Memungkinkan pengguna memperbarui data buku tanpa harus membuat catatan baru.
- Memudahkan pengguna memindahkan buku dari rak belum selesai ke rak selesai, maupun sebaliknya.

## Fitur Utama

### 1. Menambahkan Buku

Pengguna dapat menambahkan buku baru melalui form dengan informasi:

- Judul buku
- Nama penulis
- Tahun terbit
- Target selesai membaca
- Status selesai dibaca

Buku akan secara otomatis ditempatkan ke rak yang sesuai berdasarkan status checkbox.

### 2. Dua Rak Buku

Buku dikelompokkan ke dalam dua kategori:

- **Belum Dibaca**
- **Selesai Dibaca**

Pengelompokan dilakukan secara dinamis menggunakan manipulasi DOM.

### 3. Menandai Buku sebagai Selesai

Buku yang masih berada di rak **Belum Dibaca** dapat dipindahkan ke rak **Selesai Dibaca** menggunakan tombol checklist.

Status buku pada data internal juga diperbarui dari:

```javascript
selesai: false
```

menjadi:

```javascript
selesai: true
```

### 4. Mengembalikan Buku ke Rak Belum Dibaca

Buku yang sudah selesai dibaca dapat dikembalikan ke rak sebelumnya menggunakan tombol undo atau restart.

Fitur ini berguna ketika pengguna ingin mengoreksi status buku atau melanjutkan kembali buku yang sebelumnya dianggap selesai.

### 5. Mengedit Informasi Buku

Aplikasi memiliki fitur improvisasi berupa pengeditan data buku.

Saat tombol edit ditekan:

1. Data buku dimuat kembali ke dalam form.
2. Tombol tambah buku disembunyikan.
3. Tombol edit ditampilkan.
4. Pengguna dapat memperbarui informasi buku.
5. Data lama dihapus dan digantikan dengan data terbaru.
6. Buku ditempatkan kembali ke rak berdasarkan status yang dipilih.

Informasi yang dapat diedit meliputi:

- Judul
- Penulis
- Tahun terbit
- Target selesai membaca
- Status selesai dibaca

### 6. Menghapus Buku

Pengguna dapat menghapus buku dari rak menggunakan tombol trash.

Penghapusan dilakukan pada:

- Tampilan DOM
- Array data aplikasi
- Data yang tersimpan di `localStorage`

### 7. Penyimpanan Data di Browser

Data buku disimpan menggunakan Web Storage API melalui `localStorage`.

Data disimpan menggunakan key:

```javascript
READING_LIST
```

Karena menggunakan `localStorage`, daftar buku tetap tersedia setelah halaman direfresh atau browser dibuka kembali pada perangkat yang sama.

### 8. Pemulihan Data Otomatis

Saat aplikasi dijalankan, data yang sebelumnya tersimpan di `localStorage` akan dimuat kembali dan dirender ke dalam rak buku.

Alur pemulihan data:

1. Aplikasi memeriksa dukungan browser terhadap Web Storage.
2. Data diambil dari `localStorage`.
3. Data JSON diubah kembali menjadi array JavaScript.
4. Setiap buku dibuat ulang sebagai elemen DOM.
5. Buku ditampilkan pada rak berdasarkan statusnya.

### 9. Informasi Target Penyelesaian

Setiap buku memiliki field tanggal target selesai membaca. Informasi ini ditampilkan bersama metadata buku sehingga pengguna dapat mengatur target membaca secara lebih terstruktur.

### 10. Desain Responsif dan Visual

Antarmuka aplikasi menggunakan:

- Layout berbasis CSS
- Background bertema perpustakaan
- Font Google Fonts `Quicksand`
- Tombol aksi berbasis ikon
- Warna hijau sebagai warna utama
- Card atau panel untuk form dan rak buku
- Layout yang dipusatkan agar nyaman digunakan pada layar berukuran kecil

## Tech Stack

### Bahasa Pemrograman

- **JavaScript — 61.6%**
  - Mengatur logika aplikasi.
  - Memanipulasi DOM.
  - Mengelola event pengguna.
  - Mengatur data buku.
  - Mengelola penyimpanan `localStorage`.

- **CSS — 23.8%**
  - Mengatur layout dan tampilan aplikasi.
  - Membuat styling form, rak, card buku, tombol, dan footer.
  - Menambahkan background dan efek hover pada tombol aksi.

- **HTML — 14.6%**
  - Menyediakan struktur halaman.
  - Membuat form input buku.
  - Menyediakan container untuk rak buku.
  - Menyediakan elemen header dan footer.

### API dan Teknologi Browser

- **DOM API**
  - Membuat elemen HTML secara dinamis.
  - Menambahkan dan menghapus elemen buku.
  - Mengubah isi form dan tampilan aplikasi.
  - Mengatur event listener untuk tombol aksi.

- **Web Storage API**
  - Menyimpan data buku secara lokal.
  - Memuat data ketika aplikasi dibuka kembali.
  - Menggunakan `localStorage` sebagai media persistence.

- **JSON**
  - Mengubah array data buku menjadi string sebelum disimpan.
  - Mengubah kembali data string menjadi object JavaScript saat dimuat.

- **GitHub Pages**
  - Digunakan untuk melakukan deployment aplikasi static web.

### Framework dan Library

Aplikasi ini tidak menggunakan framework frontend atau library eksternal seperti React, Vue, Angular, Bootstrap, atau jQuery.

Implementasi dilakukan menggunakan:

- Vanilla JavaScript
- Native DOM API
- Native Web Storage API
- CSS murni
- HTML semantik dasar

## Struktur Proyek

```text
bookshelf-apps-himang/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── dom.js
│   ├── script.js
│   └── webStorage.js
└── img/
    ├── library.png
    ├── checked.svg
    ├── checked.gif
    ├── editt.svg
    ├── edit.gif
    ├── restart.svg
    ├── restart.gif
    ├── trash.svg
    └── trash.gif
```

## Arsitektur dan Pembagian Tanggung Jawab

### `index.html`

Berfungsi sebagai struktur utama aplikasi.

Bagian penting di dalamnya meliputi:

- Header aplikasi
- Form input buku
- Field judul buku
- Field penulis buku
- Field tahun terbit
- Field target selesai
- Checkbox status selesai
- Rak buku belum dibaca
- Rak buku selesai dibaca
- Footer
- Import file JavaScript dan CSS

### `css/style.css`

Mengatur tampilan visual aplikasi, antara lain:

- Reset margin dan padding
- Warna utama aplikasi
- Layout halaman
- Tampilan form
- Tampilan rak buku
- Tampilan card buku
- Tombol checklist
- Tombol edit
- Tombol hapus
- Tombol undo
- Background gambar perpustakaan
- Efek hover pada tombol
- Styling footer

### `js/script.js`

Berfungsi sebagai entry point dan penghubung event utama aplikasi.

Tanggung jawabnya meliputi:

- Menunggu halaman selesai dimuat.
- Mengatur event submit form.
- Memanggil fungsi tambah buku.
- Menghapus isi form setelah data disimpan.
- Memuat data dari storage saat aplikasi dimulai.
- Menangani event `ondatasaved`.
- Menangani event `ondataloaded`.
- Mengubah label status buku berdasarkan checkbox.

### `js/dom.js`

Berisi fungsi-fungsi yang berkaitan dengan pembuatan dan manipulasi elemen DOM.

Fungsi penting di dalamnya meliputi:

- `buatListBaca()`
- `tambahBuku()`
- `hapusForm()`
- `buatTombol()`
- `tambahBukuSelesai()`
- `hapusBukuSelesai()`
- `buatTombolCek()`
- `buatTombolSampah()`
- `buatTombolUndo()`
- `buatTombolEdit()`
- `undoBukuSelesai()`
- `editInfoBuku()`
- `tambahBukuEdit()`
- `tombolKembali()`

File ini menjadi pusat proses rendering buku dan interaksi pengguna terhadap setiap item buku.

### `js/webStorage.js`

Berisi pengelolaan data aplikasi dan persistence menggunakan `localStorage`.

Fungsi penting di dalamnya meliputi:

- `isStorageExist()`
- `saveData()`
- `loadDataFromStorage()`
- `updateDataToStorage()`
- `buatObjekBuku()`
- `cariBuku()`
- `cariIndeksBuku()`
- `refreshDataFromList()`

Setiap buku direpresentasikan sebagai object dengan struktur:

```javascript
{
  id: Number,
  judul: String,
  penulis: String,
  tahun: String,
  waktu: String,
  selesai: Boolean
}
```

## Alur Kerja Aplikasi

### Menambahkan Buku

```text
Pengguna mengisi form
        ↓
Menekan tombol tambah buku
        ↓
Data dibaca dari input
        ↓
Object buku dibuat
        ↓
Object dimasukkan ke array list
        ↓
Elemen buku dibuat menggunakan DOM
        ↓
Buku ditampilkan pada rak yang sesuai
        ↓
Data disimpan ke localStorage
```

### Memuat Data Saat Aplikasi Dibuka

```text
Halaman selesai dimuat
        ↓
Browser diperiksa apakah mendukung Web Storage
        ↓
Data diambil dari localStorage
        ↓
Data JSON diubah menjadi array
        ↓
Setiap buku dirender kembali ke DOM
        ↓
Buku ditempatkan pada rak sesuai status
```

### Mengubah Status Buku

```text
Pengguna menekan tombol checklist atau undo
        ↓
Data buku dicari berdasarkan ID
        ↓
Nilai selesai diperbarui
        ↓
Elemen lama dihapus
        ↓
Elemen baru dibuat
        ↓
Buku ditempatkan di rak tujuan
        ↓
Data diperbarui di localStorage
```

## Data Model

Setiap buku memiliki data dengan format sebagai berikut:

| Properti | Tipe | Keterangan |
|---|---|---|
| `id` | Number | ID unik berdasarkan timestamp |
| `judul` | String | Judul buku |
| `penulis` | String | Nama penulis buku |
| `tahun` | String | Tahun terbit buku |
| `waktu` | String | Target tanggal selesai membaca |
| `selesai` | Boolean | Status penyelesaian buku |

Contoh data:

```javascript
{
  id: 1655941531000,
  judul: "Atomic Habits",
  penulis: "James Clear",
  tahun: "2018",
  waktu: "2022-07-01",
  selesai: false
}
```

## Cara Menjalankan Proyek

Karena aplikasi ini merupakan static web application dan tidak memiliki dependency eksternal, proyek dapat dijalankan dengan cara berikut:

### Menggunakan Live Preview

Buka link berikut melalui browser:

```text
https://himang-dg.github.io/bookshelf-apps-himang/
```

### Menjalankan Secara Lokal

1. Clone repository:

```bash
git clone https://github.com/himang-dg/bookshelf-apps-himang.git
```

2. Masuk ke direktori proyek:

```bash
cd bookshelf-apps-himang
```

3. Buka file `index.html` menggunakan browser.

Alternatifnya, gunakan extension seperti **Live Server** pada Visual Studio Code agar aplikasi berjalan melalui local development server.

## Deployment

Aplikasi di-deploy menggunakan GitHub Pages dengan alamat:

```text
https://himang-dg.github.io/bookshelf-apps-himang/
```

Karena tidak menggunakan proses build atau bundling, file HTML, CSS, JavaScript, dan asset gambar dapat langsung disajikan oleh GitHub Pages.

## Highlight untuk Portfolio

Proyek ini menunjukkan kemampuan dalam:

- Membangun aplikasi web interaktif tanpa framework.
- Menggunakan JavaScript untuk manipulasi DOM.
- Membuat form input dan validasi dasar menggunakan HTML.
- Mengelola state aplikasi menggunakan array JavaScript.
- Mengimplementasikan CRUD sederhana pada data buku.
- Menggunakan `localStorage` untuk menyimpan data secara persisten.
- Membuat fitur edit, delete, complete, dan undo.
- Menghubungkan event pengguna dengan perubahan data dan tampilan.
- Melakukan deployment aplikasi static melalui GitHub Pages.
- Memisahkan kode berdasarkan tanggung jawab DOM, event, dan storage.

## Tantangan Teknis

Beberapa tantangan teknis yang diselesaikan dalam proyek ini:

1. **Sinkronisasi data dan tampilan**
   
   Setiap perubahan pada data buku harus diikuti dengan pembaruan elemen DOM dan `localStorage`.

2. **Pemindahan buku antar-rak**
   
   Buku harus dipindahkan dari rak belum selesai ke rak selesai tanpa kehilangan ID dan metadata lainnya.

3. **Editing data**
   
   Fitur edit memerlukan proses mengambil data dari elemen DOM, memasukkannya kembali ke form, memperbarui data, lalu merender ulang buku.

4. **Pemulihan data**
   
   Data yang tersimpan dalam format JSON perlu dikonversi kembali menjadi object JavaScript dan dirender ulang saat halaman dibuka.

5. **Pengelolaan status buku**
   
   Status `selesai` digunakan untuk menentukan rak tempat buku ditampilkan dan tombol aksi yang tersedia.

## Catatan Implementasi

README proyek menyebutkan rencana atau rekomendasi fitur pencarian buku berdasarkan judul. Namun, pada source code yang tersedia saat ini belum ditemukan elemen input pencarian maupun fungsi filter pencarian.

Fitur yang benar-benar tersedia dan terimplementasi meliputi:

- Menambahkan buku
- Menampilkan buku berdasarkan status
- Menandai buku selesai
- Mengembalikan buku ke rak belum selesai
- Mengedit buku
- Menghapus buku
- Menyimpan data menggunakan `localStorage`
- Memuat ulang data dari storage

## Ringkasan Singkat untuk Kartu Portfolio

Bookshelf Apps adalah aplikasi pengelolaan daftar bacaan berbasis Vanilla JavaScript yang memungkinkan pengguna menambahkan, mengedit, menghapus, dan mengubah status buku. Data disimpan secara persisten menggunakan `localStorage`, sedangkan tampilan rak buku dibuat dinamis dengan DOM API. Proyek ini di-deploy menggunakan GitHub Pages dan dibuat sebagai implementasi pembelajaran JavaScript DOM serta Web Storage.

<!-- EN -->
## Deskripsi Singkat dalam Bahasa Inggris

Bookshelf Apps is a vanilla JavaScript web application for managing a personal reading list. Users can add books, edit their information, delete items, move books between unread and completed shelves, and persist data using the browser's `localStorage`. The application was built with HTML, CSS, and native DOM APIs, then deployed through GitHub Pages.

## Link Proyek

- **Repository:** [GitHub Repository](https://github.com/himang-dg/bookshelf-apps-himang)
- **Live Demo:** [Open Live Preview](https://himang-dg.github.io/bookshelf-apps-himang/)
