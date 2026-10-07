import { FaGlobe, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTiktok } from "react-icons/fa";

export const personalData = {
  name: "Benidiktus Himang", // Full name
  title: "Web Developer & Digital Creator",
  profilePicture: "/himme.webp",
  resumeUrl: "/Las-Benidiktus Himang-CV.pdf",
  // Roles for typing animation
  roles: [
    "Web Developer",
    "Roblox Developer",
    "Graphic Designer",
    "Content Creator",
  ],
  roles_id: [
    "Web Developer",
    "Roblox Developer",
    "Desainer Grafis",
    "Content Creator",
  ],
  bio: [
    "Halo! Saya Benidiktus Himang, mahasiswa Teknik Informatika di STMIK Widya Cipta Dharma yang bergerak di persimpangan antara logika pemrograman dan kreativitas visual.",
    "Sebagai Web Developer, Roblox Developer, dan Desainer Grafis, saya terbiasa membangun antarmuka web modern berbasis Next.js dan Tailwind CSS, merancang dunia interaktif di Roblox Studio, serta memproduksi beragam aset visual digital - baik untuk media sosial maupun kebutuhan promosi.",
    "Saat ini, saya juga aktif mendalami Kecerdasan Buatan (AI) untuk menghadirkan pengalaman digital yang interaktif, fungsional, dan bernilai estetika tinggi.",
  ],
  bio_en: [
    "Hello! I am Benidiktus Himang, an Informatics Engineering student at STMIK Widya Cipta Dharma, working at the intersection of programming logic and visual creativity.",
    "As a Web Developer, Roblox Developer, and Graphic Designer, I am accustomed to building modern web interfaces based on Next.js and Tailwind CSS, designing interactive worlds in Roblox Studio, and producing a variety of digital visual assets - both for social media and promotional needs.",
    "Currently, I am also actively exploring Artificial Intelligence (AI) to deliver digital experiences that are interactive, functional, and of high aesthetic value.",
  ],
  socials: [
    { name: "Personal Website", url: "https://s.id/himang", icon: FaGlobe, color: "text-blue-400", bg: "bg-blue-400/10 hover:bg-blue-400/20" },
    { name: "Instagram", url: "https://instagram.com/himang_dg", icon: FaInstagram, color: "text-pink-400", bg: "bg-pink-400/10 hover:bg-pink-400/20" },
    { name: "LinkedIn", url: "https://s.id/linkedin-himang", icon: FaLinkedin, color: "text-blue-500", bg: "bg-blue-500/10 hover:bg-blue-500/20" },
    { name: "TikTok", url: "https://tiktok.com/@himang_dg", icon: FaTiktok, color: "text-neutral-300", bg: "bg-neutral-500/10 hover:bg-neutral-500/20" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCX8aSUkYR0tAW3md1JFmhnQ?sub_confirmation=1", icon: FaYoutube, color: "text-red-500", bg: "bg-red-500/10 hover:bg-red-500/20" },
    { name: "GitHub", url: "https://github.com/himang-dg", icon: FaGithub, color: "text-neutral-200", bg: "bg-neutral-400/10 hover:bg-neutral-400/20" },
  ]
};

export interface WorkExperience {
  role: string;
  role_en: string;
  company: string;
  type: string;
  type_en: string;
  year: string;
  location: string;
  description: string[];
  description_en: string[];
  tags: string[];
}

export const workExperienceData: WorkExperience[] = [
  {
    role: "Community Moderator",
    role_en: "Community Moderator",
    company: "Roblox Podcast Discord Community",
    type: "Part-time",
    type_en: "Part-time",
    year: "Mei 2026 - Sekarang",
    location: "Remote, Indonesia",
    description: [
      "Mengelola dan memoderasi komunitas Discord seputar podcast dan game Roblox",
      "Bertanggung jawab menjaga kenyamanan dan ketertiban interaksi member",
      "Menyusun tata tertib server, mengelola alur tiket bantuan/laporan, serta memfasilitasi diskusi yang positif antar-komunitas"
    ],
    description_en: [
      "Managed and moderated a Discord community centered around Roblox podcasts and games",
      "Responsible for maintaining member comfort and orderly interactions",
      "Drafted server rules, managed support ticket pipelines, and facilitated positive inter-community discussions"
    ],
    tags: ["Discord Moderation", "Community Management", "Communication", "Conflict Resolution"],
  },
  {
    role: "Roblox Map Developer",
    role_en: "Roblox Map Developer",
    company: "Roblox Studio",
    type: "Freelance",
    type_en: "Freelance",
    year: "2026",
    location: "Remote",
    description: [
      "Membuat map Roblox berjudul MangObby dengan tema pulau terbang",
      "Mendesain level 8 checkpoint beserta 2 opsi jalur penyelesaian: Summit x20 (Obby Klasik) dan Summit x40 (Labirin)",
      "Membangun lingkungan 3D interaktif dan mengoptimalkan performa (Parts & Mesh) agar ringan dimainkan",
    ],
    description_en: [
      "Created a Roblox map titled MangObby featuring a flying island theme",
      "Designed an 8-checkpoint level with 2 completion routes: Summit x20 (Classic Obby) and Summit x40 (Maze)",
      "Built interactive 3D environments and optimized performance (Parts & Mesh) for lightweight gameplay",
    ],
    tags: ["Roblox Studio", "Lua", "3D Environment"],
  },
  {
    role: "Overlay Designer",
    role_en: "Overlay Designer",
    company: "Streamer DBangkongS",
    type: "Freelance",
    type_en: "Freelance",
    year: "2026",
    location: "Remote",
    description: [
      "Mendesain stream overlay untuk OBS khusus bagi streamer DBangkongS",
      "Membuat custom alert donasi dan komponen interaktif lainnya yang terintegrasi dengan data Tako.id",
      "Menggunakan HTML, CSS, dan Tailwind CSS untuk rendering overlay secara langsung di browser",
    ],
    description_en: [
      "Designed stream overlays for OBS specifically for streamer DBangkongS",
      "Created custom donation alerts and other interactive components integrated with Tako.id data",
      "Used HTML, CSS, and Tailwind CSS for direct overlay rendering in the browser",
    ],
    tags: ["HTML", "CSS", "Tailwind CSS", "OBS Overlay"],
  },
  {
    role: "Web Developer",
    role_en: "Web Developer",
    company: "Party Neraka",
    type: "Freelance",
    type_en: "Freelance",
    year: "2026",
    location: "Remote",
    description: [
      "Membangun website direktori komunitas dari awal menggunakan Next.js 16 dan React 19",
      "Mengembangkan UI interaktif dengan TypeScript, Tailwind CSS v4, dan Framer Motion",
      "Mendesain tampilan dengan tema horor/neraka yang responsif untuk desktop dan mobile",
    ],
    description_en: [
      "Built a community directory website from scratch using Next.js 16 and React 19",
      "Developed interactive UI with TypeScript, Tailwind CSS v4, and Framer Motion",
      "Designed a horror/hell-themed interface responsive across desktop and mobile devices",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Desainer Grafis (Magang)",
    role_en: "Graphic Designer (Internship)",
    company: "Dinas Kependudukan Pemberdayaan Perempuan dan Perlindungan Anak Prov. Kaltim",
    type: "Magang",
    type_en: "Internship",
    year: "Okt 2023 - Des 2023",
    location: "Samarinda, Indonesia",
    description: [
      "Mengemban tugas sebagai Desain Grafis menggunakan Canva Pro & Photoshop",
      "Mendesain poster, banner acara, dan sampul buku",
      "Mengurus data IKD dan mengupdate artikel website",
    ],
    description_en: [
      "Served as Graphic Designer using Canva Pro & Photoshop",
      "Designed posters, event banners, and book covers",
      "Managed IKD data and updated website articles",
    ],
    tags: ["Canva", "Photoshop", "Graphic Design"],
  },
  {
    role: "Brand Ambassador",
    role_en: "Brand Ambassador",
    company: "Grab Kampus",
    type: "Freelance",
    type_en: "Freelance",
    year: "2023",
    location: "Samarinda, Indonesia",
    description: [
      "Mempromosikan layanan Grab di lingkungan kampus",
      "Melakukan pengenalan dan sosialisasi produk Grab kepada mahasiswa",
    ],
    description_en: [
      "Promoted Grab services within the campus environment",
      "Conducted product introduction and socialization to students",
    ],
    tags: ["Marketing", "Brand Ambassador"],
  },
  {
    role: "Penulis Artikel",
    role_en: "Article Writer",
    company: "Kompasiana",
    type: "Freelance",
    type_en: "Freelance",
    year: "2022 - 2023",
    location: "Remote",
    description: [
      "Menulis artikel di platform Kompasiana",
      "Membuat konten tulisan di berbagai topik",
    ],
    description_en: [
      "Wrote articles on the Kompasiana platform",
      "Created written content across various topics",
    ],
    tags: ["Writing", "Content Creation"],
  },
  {
    role: "Desainer Media Sosial",
    role_en: "Social Media Designer",
    company: "PMM2 UNPAM APEM",
    type: "Freelance",
    type_en: "Freelance",
    year: "2022",
    location: "Remote",
    description: [
      "Mendesain konten Instagram untuk profil kelompok PMM2 UNPAM",
      "Membuat desain feeds, story, dan highlight covers",
    ],
    description_en: [
      "Designed Instagram content for PMM2 UNPAM group profile",
      "Created feed designs, stories, and highlight covers",
    ],
    tags: ["Canva", "Instagram", "Social Media Design"],
  }
];

export interface Education {
  school: string;
  description: string;
  description_en?: string;
  year: string;
  year_en?: string;
  location: string;
}

export const educationData: Education[] = [
  {
    school: "STMIK Widya Cipta Dharma",
    description: "Jurusan Teknik Informatika",
    description_en: "Majoring in Informatics Engineering",
    year: "2020 - Sekarang",
    year_en: "2020 - Present",
    location: "Samarinda, Indonesia"
  },
  {
    school: "SMKS Pemuda Samarinda",
    description: "Jurusan Otomatisasi Tata Kelola Perkantoran",
    description_en: "Department of Office Automation & Governance",
    year: "2018 - 2020",
    location: "Samarinda, Indonesia"
  },
  {
    school: "SMK-SPP Negeri Samarinda",
    description: "Satu Semester Jurusan Hortikultura",
    description_en: "One Semester Horticulture Department",
    year: "2017 - 2018",
    location: "Samarinda, Indonesia"
  }
];
