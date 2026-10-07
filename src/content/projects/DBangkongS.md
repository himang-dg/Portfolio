---
title: "TakoID Streaming Overlay - DBangkongS"
title_en: "TakoID Streaming Overlay - DBangkongS"
description: "Koleksi overlay HTML streaming dinamis dengan alert donasi, leaderboard supporter, dan musik player."
description_en: "Dynamic HTML live streaming overlay collection with donation alerts, supporter leaderboards, and music player."
date: "2026-08-24"
image: "/images/takoid-dbangkongs/dbangkongs-1.webp"
category: "Web"
tags: ["HTML5", "Cyberpunk UI", "Streaming Overlay", "Animation"]
githubUrl: "https://github.com/himang-dg/takoidoverlay"
liveUrl: ""
---

# Tako ID Streaming Overlay

> Kumpulan overlay HTML interaktif dan bertema cyber untuk menampilkan aktivitas donasi, musik, polling, milestone, leaderboard, dan sound effect pada live stream berbasis Tako ID.

## Informasi Proyek

| Detail | Keterangan |
|---|---|
| **Nama proyek** | Tako ID Streaming Overlay |
| **Repository** | [himang-dg/takoidoverlay](https://github.com/himang-dg/takoidoverlay) |
| **Pemilik** | [Himang-DG](https://github.com/himang-dg) |
| **Kategori** | Streaming overlay / donation alert / live-stream UI |
| **Tahun upload** | 2026 |
| **Tanggal repository dibuat** | 8 Mei 2026 |
| **Update kode terbaru yang terdeteksi** | 24 Agustus 2026 |
| **Lisensi** | Belum ditentukan |
| **Bahasa utama** | HTML |
| **Komposisi bahasa GitHub** | HTML 100% |
| **Status repository** | Public |
| **Preview langsung** | Belum dapat dikonfirmasi sebagai URL aktif |
| **Deskripsi asli repository** | `ada deh` |

## Ringkasan Proyek

Tako ID Streaming Overlay merupakan sekumpulan template overlay berbasis HTML yang dirancang untuk meningkatkan tampilan visual live streaming. Overlay ini menampilkan berbagai informasi real-time yang berkaitan dengan interaksi penonton, donasi, musik, polling, pencapaian donasi, peringkat supporter, dan efek suara.

Setiap template dibuat dengan tampilan modern bergaya cyber/neon menggunakan kombinasi warna gelap, cyan, biru, dan aksen kuning. Template dirancang agar dapat digunakan pada sistem overlay yang mendukung placeholder dinamis dengan format seperti `{{gifterName}}`, `{{formattedAmount}}`, `{{rankings}}`, dan `{{queue}}`.

Proyek ini lebih berfokus pada sisi presentasi visual dan pengalaman penonton dibandingkan pengembangan backend atau pengolahan data. Data diasumsikan dikirim oleh platform Tako melalui placeholder yang kemudian diproses oleh JavaScript di dalam masing-masing file HTML.

## Masalah yang Diselesaikan

Dalam live streaming, informasi donasi dan aktivitas komunitas sering kali hanya ditampilkan dalam bentuk teks standar. Hal tersebut dapat membuat tampilan stream terlihat kurang menarik dan mengurangi dampak visual dari interaksi penonton.

Proyek ini menyelesaikan beberapa masalah tersebut dengan menyediakan:

- Tampilan notifikasi donasi yang lebih menarik dan informatif.
- Visualisasi aktivitas supporter secara real-time.
- Tampilan musik yang sedang diputar beserta progress dan antreannya.
- Representasi polling dalam bentuk progress bar.
- Indikator progres target atau milestone donasi.
- Daftar peringkat supporter melalui leaderboard.
- Tampilan sound effect yang lebih hidup dan sesuai tema stream.
- Dukungan terhadap avatar, badge, sticker, nominal donasi, dan informasi pengguna.
- Komponen overlay dengan latar transparan sehingga mudah ditempatkan di atas tampilan live stream.

## Fitur Utama

### 1. Donation Alert

File: [`DBangkongSNewTakoID/Alert.html`](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Alert.html)

Menampilkan notifikasi donasi atau pesan supporter dalam bentuk kartu overlay dengan tema cyber.

Fitur yang tersedia:

- Menampilkan pesan dari supporter.
- Menampilkan nominal donasi dengan efek glow berwarna kuning.
- Menampilkan nama pengirim.
- Menampilkan avatar pengirim.
- Menampilkan status verified.
- Menampilkan badge supporter.
- Mendukung sticker menggunakan format `[nama_sticker]`.
- Menyembunyikan avatar jika URL tidak tersedia atau gambar gagal dimuat.
- Menyembunyikan pesan jika placeholder belum memiliki nilai.
- Menampilkan dekorasi gambar dari sumber eksternal.
- Animasi floating pada logo dan dekorasi.
- Efek partikel neon yang bergerak ke atas.
- Efek cahaya yang bergerak melintasi kartu overlay.

Placeholder utama yang digunakan:

```text
{{message}}
{{formattedAmount}}
{{gifterPicture}}
{{gifterName}}
{{isGifterVerified}}
{{gifterBadges}}
```

### 2. Leaderboard Supporter

File: [`DBangkongSNewTakoID/Leaderboard.html`](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Leaderboard.html)

Menampilkan daftar supporter berdasarkan peringkat kontribusi.

Fitur yang tersedia:

- Menampilkan judul leaderboard.
- Menampilkan ranking supporter.
- Warna khusus untuk posisi pertama, kedua, dan ketiga.
- Menampilkan avatar supporter.
- Menampilkan nama supporter.
- Menampilkan badge supporter.
- Menampilkan total nominal kontribusi.
- Efek hover pada setiap baris ranking.
- Animasi partikel dan dekorasi visual.
- Fallback judul menjadi `Leaderboard` jika data tidak tersedia.

Data leaderboard dibaca dari JSON placeholder:

```text
{{rankings}}
```

Setiap entri ranking dapat berisi informasi seperti:

```javascript
{
  name,
  picture,
  badges,
  formattedAmount
}
```

### 3. Milestone Progress

File: [`DBangkongSNewTakoID/Milestone.html`](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Milestone.html)

Menampilkan progres pencapaian target donasi atau milestone tertentu.

Fitur yang tersedia:

- Judul milestone.
- Progress bar visual.
- Nilai progres saat ini.
- Nilai target milestone.
- Persentase progres.
- Efek glow pada nominal donasi.
- Pembatasan nilai progress bar maksimal 100%.
- Fallback judul menjadi `Milestone`.
- Animasi transisi progress bar.
- Efek partikel neon dan gradient cyan.

Placeholder utama:

```text
{{title}}
{{percentage}}
{{formattedStepProgress}}
{{formattedStepTarget}}
```

### 4. Polling Overlay

File: [`DBangkongSNewTakoID/Polling.html`](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Polling.html)

Menampilkan hasil polling komunitas dengan visualisasi progress bar berdasarkan jumlah kontribusi atau suara pada setiap pilihan.

Fitur yang tersedia:

- Menampilkan judul polling.
- Menampilkan waktu berakhirnya polling.
- Menampilkan daftar pilihan polling.
- Menghitung persentase setiap pilihan secara dinamis.
- Menampilkan nominal atau total kontribusi tiap pilihan.
- Menampilkan daftar voter apabila tersedia.
- Menampilkan total kontribusi polling.
- Menggunakan format mata uang Indonesia `IDR`.
- Fallback judul menjadi `Polling`.
- Menyembunyikan informasi waktu berakhir jika data tidak tersedia.
- Animasi progress bar dan efek partikel.

Data polling dibaca dari JSON placeholder:

```text
{{pollingOptions}}
```

Setiap opsi dapat berisi:

```javascript
{
  name,
  totalAmount,
  formattedTotalAmount,
  voters
}
```

### 5. Song Share / Music Player

File: [`DBangkongSNewTakoID/SongShare.html`](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/SongShare.html)

Menampilkan lagu yang sedang diputar atau diminta oleh penonton melalui sistem request lagu.

Fitur yang tersedia:

- Menampilkan judul lagu.
- Menampilkan nama artis.
- Menampilkan cover art.
- Menampilkan durasi lagu.
- Menampilkan progress pemutaran.
- Menampilkan nama requester.
- Menampilkan verified status requester.
- Menampilkan badge requester.
- Menampilkan antrean lagu berikutnya.
- Menampilkan jumlah lagu yang masih berada di antrean.
- Menampilkan kondisi idle ketika tidak ada lagu.
- Menampilkan status jeda antar lagu.
- Menampilkan pesan error.
- Fallback cover art jika gambar gagal dimuat.
- Parsing data antrean menggunakan JSON.
- Efek progress bar dengan gradient cyan dan biru.

Placeholder utama:

```text
{{songTitle}}
{{songArtist}}
{{formattedElapsed}}
{{formattedDuration}}
{{progressPercent}}
{{songCoverArtUrl}}
{{requesterName}}
{{requesterPicture}}
{{requesterBadges}}
{{isRequesterVerified}}
{{isPlaying}}
{{isPaused}}
{{isInGap}}
{{gapText}}
{{error}}
{{queue}}
```

### 6. Soundboard Overlay

File: [`DBangkongSNewTakoID/Soundboard.html`](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Soundboard.html)

Menampilkan informasi sound effect yang dipicu oleh supporter atau aktivitas tertentu selama live stream.

Fitur yang tersedia:

- Menampilkan nama sound effect.
- Menampilkan nama pengirim.
- Menampilkan status verified.
- Menampilkan badge pengirim.
- Fallback nama sound menjadi `Sound Effect`.
- Ikon musik berbasis SVG.
- Efek partikel neon.
- Efek cahaya berjalan pada kartu.
- Tampilan transparan untuk kebutuhan overlay streaming.
- Fallback badge menjadi text tag jika ikon gagal dimuat.

Placeholder utama:

```text
{{soundName}}
{{gifterName}}
{{isGifterVerified}}
{{gifterBadges}}
```

## Tech Stack

### HTML5

Seluruh komponen dibuat menggunakan HTML5 dengan struktur dokumen standar:

```html
<!doctype html>
<html lang="en">
```

HTML digunakan sebagai fondasi setiap template overlay dan menjadi wadah untuk struktur visual, placeholder data, serta script interaktif.

### Tailwind CSS Browser CDN

Proyek menggunakan Tailwind CSS melalui browser CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Tailwind digunakan untuk:

- Layout flexbox.
- Spacing dan padding.
- Warna background.
- Border dan rounded corner.
- Typography.
- Ukuran elemen.
- Positioning.
- Responsivitas dasar.
- Utility class untuk membangun komponen secara cepat.

Proyek tidak menggunakan file konfigurasi Tailwind atau proses build lokal. Styling dilakukan secara langsung menggunakan utility class Tailwind dan CSS custom di dalam setiap file HTML.

### Vanilla JavaScript

Interaktivitas dibuat menggunakan JavaScript tanpa framework tambahan.

JavaScript digunakan untuk:

- Membaca placeholder dinamis.
- Mengatur fallback ketika data kosong.
- Membuat elemen HTML secara dinamis.
- Membaca data JSON.
- Menghitung persentase polling.
- Membuat ranking leaderboard.
- Membuat daftar antrean lagu.
- Mengatur visibility elemen.
- Menangani error pada gambar eksternal.
- Menampilkan badge dan avatar.
- Membuat partikel visual secara random.

Contoh pola yang digunakan:

```javascript
window.addEventListener("load", () => {
  // Inisialisasi overlay setelah seluruh halaman dimuat
});
```

### Custom CSS Animations

Selain Tailwind CSS, setiap overlay menggunakan CSS custom untuk membangun identitas visual dan animasinya.

Animasi yang digunakan meliputi:

- `shine` untuk efek cahaya yang melintasi kartu.
- `rise` untuk partikel neon yang bergerak naik.
- `logoFloat` untuk efek mengambang pada logo.
- `moneyGlow` untuk nominal donasi.
- `decorFloat` untuk dekorasi gambar.
- Transisi perubahan lebar progress bar.

### JSON Data Parsing

Beberapa overlay membaca data kompleks dari placeholder JSON, seperti:

```html
<script id="rankings-data" type="application/json">
  {{rankings}}
</script>
```

Pendekatan ini digunakan pada:

- Leaderboard.
- Polling.
- Song Share queue.

Data kemudian diproses menggunakan:

```javascript
JSON.parse(...)
```

### External Assets

Proyek menggunakan beberapa aset eksternal, antara lain:

- Asset Tako ID.
- Badge supporter dari `tako.id`.
- Sticker dari `assets.tako.id`.
- Gambar dekorasi dari GitHub CDN.
- Logo dan gambar pendukung dari repository eksternal.

Contoh sumber eksternal yang digunakan:

```text
https://tako.id/images/badges/
https://assets.tako.id/
https://cdn.jsdelivr.net/
https://cdn.jsdelivr.net/gh/
https://raw.githubusercontent.com/
```

## Struktur Repository

```text
takoidoverlay/
├── README.md
└── DBangkongSNewTakoID/
    ├── Alert.html
    ├── Leaderboard.html
    ├── Milestone.html
    ├── Polling.html
    ├── SongShare.html
    └── Soundboard.html
```

### Penjelasan Struktur

#### `README.md`

README saat ini berisi judul repository dan deskripsi singkat:

```text
# takoidoverlay
ada deh
```

#### `DBangkongSNewTakoID/`

Direktori utama yang berisi seluruh template overlay HTML.

| File | Fungsi |
|---|---|
| `Alert.html` | Notifikasi donasi dan pesan supporter |
| `Leaderboard.html` | Peringkat supporter berdasarkan kontribusi |
| `Milestone.html` | Progress target atau milestone donasi |
| `Polling.html` | Hasil polling komunitas |
| `SongShare.html` | Pemutar lagu dan antrean request |
| `Soundboard.html` | Notifikasi sound effect |

## Alur Kerja Sistem

Secara umum, setiap overlay bekerja dengan alur berikut:

1. Platform streaming atau sistem Tako menyediakan nilai untuk placeholder.
2. File HTML menerima data tersebut melalui template variable seperti `{{gifterName}}`.
3. Browser memuat Tailwind CSS dari CDN.
4. JavaScript dijalankan setelah event `load`.
5. Placeholder diperiksa untuk menentukan apakah data tersedia.
6. Elemen tertentu ditampilkan, disembunyikan, atau diisi secara dinamis.
7. Data JSON seperti ranking, polling options, dan queue diproses dengan `JSON.parse`.
8. Overlay menampilkan hasil akhir dalam bentuk kartu transparan dengan animasi.

Contoh alur data pada `Polling.html`:

```text
{{pollingOptions}}
        ↓
JSON.parse(...)
        ↓
Perhitungan total kontribusi
        ↓
Perhitungan persentase setiap pilihan
        ↓
Pembuatan progress bar
        ↓
Overlay polling ditampilkan
```

## Karakteristik Visual

Identitas visual proyek menggunakan gaya cyber/neon dengan beberapa elemen konsisten:

- Background gelap berbasis slate.
- Border cyan transparan.
- Gradient cyan dan biru.
- Highlight kuning untuk nominal donasi.
- Rounded card dengan radius besar.
- Drop shadow dan glow.
- Partikel bercahaya.
- Efek shine horizontal.
- Animasi floating pada logo dan dekorasi.
- Latar belakang transparan untuk integrasi dengan live stream.

Palet warna yang dominan:

```text
Slate / dark background : #0f172a
Cyan                    : #22d3ee
Blue                    : #60a5fa
Yellow donation glow    : #facc15
Muted text              : #94a3b8
```

## Cara Penggunaan

Repository ini tidak memiliki `package.json`, build system, backend, atau server lokal. Setiap file HTML dapat digunakan sebagai template overlay secara langsung pada platform yang mendukung custom HTML overlay.

Cara umum penggunaan:

1. Buka salah satu file overlay.
2. Salin isi HTML ke sistem overlay yang digunakan.
3. Pastikan platform menyediakan placeholder yang sesuai.
4. Sesuaikan URL asset, ukuran, dan warna jika diperlukan.
5. Hubungkan overlay dengan event donasi, polling, musik, atau sound effect.
6. Uji setiap placeholder menggunakan data simulasi.
7. Tempatkan overlay pada scene live streaming.

Untuk sekadar melihat tampilan dasar secara lokal:

```bash
git clone https://github.com/himang-dg/takoidoverlay.git
cd takoidoverlay
```

Kemudian buka salah satu file berikut menggunakan browser:

```text
DBangkongSNewTakoID/Alert.html
DBangkongSNewTakoID/Leaderboard.html
DBangkongSNewTakoID/Milestone.html
DBangkongSNewTakoID/Polling.html
DBangkongSNewTakoID/SongShare.html
DBangkongSNewTakoID/Soundboard.html
```

Sebagian data tidak akan tampil secara penuh jika file dibuka secara standalone karena placeholder seperti `{{gifterName}}`, `{{rankings}}`, atau `{{queue}}` hanya akan memiliki nilai ketika diproses oleh platform overlay yang sesuai.

## Nilai Teknis Proyek

Proyek ini menunjukkan beberapa kemampuan teknis:

- Membangun UI overlay khusus untuk kebutuhan live streaming.
- Mengembangkan komponen visual dengan HTML dan CSS.
- Menggunakan Tailwind CSS melalui CDN.
- Membuat animasi custom menggunakan CSS keyframes.
- Memproses data dinamis menggunakan Vanilla JavaScript.
- Mengolah data JSON dari template variable.
- Membuat fallback untuk data yang kosong atau tidak valid.
- Menangani kegagalan pemuatan gambar eksternal.
- Membangun komponen reusable untuk berbagai event live streaming.
- Menggabungkan data real-time dengan tampilan visual yang menarik.
- Mendesain UI transparan yang dapat berintegrasi dengan software streaming.

## Keterbatasan yang Teridentifikasi

Berdasarkan isi repository saat ini:

- Belum terdapat dokumentasi penggunaan yang lengkap.
- Belum terdapat screenshot atau demo preview resmi.
- Belum terdapat konfigurasi build.
- Belum terdapat test otomatis.
- Belum terdapat backend atau API internal.
- Data sangat bergantung pada placeholder dari platform eksternal.
- Sebagian asset diambil dari URL eksternal.
- Belum terdapat license file.
- Belum terdapat konfigurasi GitHub Actions.
- Belum dapat dipastikan apakah GitHub Pages sudah aktif sebagai live preview.
- Fallback JSON pada beberapa file masih bergantung pada data yang valid dari sistem pemanggil.

## Link Proyek

- **Repository:** [https://github.com/himang-dg/takoidoverlay](https://github.com/himang-dg/takoidoverlay)
- **Folder overlay:** [DBangkongSNewTakoID](https://github.com/himang-dg/takoidoverlay/tree/main/DBangkongSNewTakoID)
- **Donation Alert:** [Alert.html](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Alert.html)
- **Leaderboard:** [Leaderboard.html](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Leaderboard.html)
- **Milestone:** [Milestone.html](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Milestone.html)
- **Polling:** [Polling.html](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Polling.html)
- **Song Share:** [SongShare.html](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/SongShare.html)
- **Soundboard:** [Soundboard.html](https://github.com/himang-dg/takoidoverlay/blob/main/DBangkongSNewTakoID/Soundboard.html)



## Deskripsi Singkat untuk Kartu Portfolio

### Versi Bahasa Indonesia

**Tako ID Streaming Overlay** adalah kumpulan overlay HTML interaktif untuk live streaming yang menampilkan donation alert, leaderboard supporter, milestone progress, polling, music request, dan sound effect. Proyek ini menggunakan HTML5, Tailwind CSS melalui CDN, Vanilla JavaScript, custom CSS animations, serta JSON parsing untuk memproses data dinamis dari platform Tako ID.

### Versi Bahasa Inggris

**Tako ID Streaming Overlay** is a collection of interactive HTML overlays for live streaming. It provides donation alerts, supporter leaderboards, milestone progress, polls, music requests, and sound effect notifications. The project uses HTML5, Tailwind CSS via CDN, Vanilla JavaScript, custom CSS animations, and JSON parsing to render dynamic data from the Tako ID platform.

## Tech Stack Singkat

```text
HTML5
Tailwind CSS v4 Browser CDN
Vanilla JavaScript
Custom CSS Animations
JSON Parsing
External CDN Assets
Tako ID Overlay Template Variables
```

## Status Proyek

Proyek ini berfungsi sebagai kumpulan template overlay visual untuk kebutuhan live streaming. Fokus utama pengembangan berada pada desain antarmuka, animasi, integrasi placeholder dinamis, serta visualisasi data interaksi penonton.

Pengembangan lanjutan yang dapat dilakukan:

- Menambahkan dokumentasi instalasi dan konfigurasi.
- Menambahkan screenshot untuk setiap overlay.
- Membuat demo preview dengan data dummy.
- Menambahkan validasi JSON yang lebih aman.
- Menambahkan fallback untuk data yang tidak valid.
- Memisahkan CSS dan JavaScript ke dalam file terstruktur.
- Menambahkan konfigurasi tema.
- Menambahkan mode responsive untuk berbagai resolusi streaming.
- Menambahkan license file.
- Menyediakan halaman demo menggunakan GitHub Pages.

<!-- EN -->
## Short English Description for Portfolio Card

**Tako ID Streaming Overlay** is a collection of interactive HTML overlay templates designed to enhance live streaming visuals. It provides real‑time donation alerts, supporter leaderboards, music player integration, poll results, milestone progress bars, and sound‑effect notifications. The overlays are built with a cyber‑neon aesthetic using Tailwind CSS via CDN and vanilla JavaScript, and they rely on dynamic placeholders (e.g., `{{gifterName}}`, `{{rankings}}`) supplied by the Tako ID platform.

The project focuses on front‑end presentation rather than back‑end processing; data is assumed to be injected by the streaming platform. It is publicly available on GitHub and can be deployed through GitHub Pages.
