import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaPhp, FaBootstrap, FaGamepad, FaInstagram, FaPaintBrush, FaPen, FaBullhorn, FaGlobe, FaUserTie, FaShareAlt, FaLayerGroup, FaVideo } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiLaravel, SiMysql, SiPrisma, SiLua, SiRobloxstudio, SiCanvas, SiFigma } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { HiHashtag } from "react-icons/hi";

export function getTagIcon(tag: string) {
  const t = tag.toLowerCase();
  
  // Tech stack
  if (t.includes('react')) return <FaReact className="text-cyan-400" />;
  if (t.includes('next')) return <SiNextdotjs className="text-white" />;
  if (t.includes('tailwind')) return <SiTailwindcss className="text-sky-400" />;
  if (t.includes('html')) return <FaHtml5 className="text-orange-500" />;
  if (t.includes('css') && !t.includes('tailwind')) return <FaCss3Alt className="text-blue-500" />;
  if (t.includes('typescript') || t === 'ts') return <SiTypescript className="text-blue-400" />;
  if (t.includes('javascript') || t === 'js') return <SiJavascript className="text-yellow-400" />;
  if (t.includes('node')) return <FaNodeJs className="text-green-500" />;
  if (t.includes('python')) return <FaPython className="text-blue-500" />;
  if (t.includes('php')) return <FaPhp className="text-indigo-400" />;
  if (t.includes('laravel')) return <SiLaravel className="text-red-500" />;
  if (t.includes('mysql')) return <SiMysql className="text-blue-300" />;
  if (t.includes('prisma')) return <SiPrisma className="text-blue-300" />;
  if (t.includes('bootstrap')) return <FaBootstrap className="text-purple-400" />;
  if (t.includes('lua')) return <SiLua className="text-blue-600" />;
  if (t.includes('roblox')) return <SiRobloxstudio className="text-red-500" />;

  // Design tools
  if (t.includes('canva')) return <img src="/iconLocal/canva-icon.webp" alt="Canva" className="w-3.5 h-3.5 object-contain" />;
  if (t.includes('figma')) return <SiFigma className="text-purple-400" />;
  if (t.includes('photoshop')) return <DiPhotoshop className="text-blue-400" />;

  // Design & creative
  if (t.includes('graphic design') || t.includes('desain grafis')) return <FaPaintBrush className="text-purple-400" />;
  if (t.includes('overlay')) return <FaLayerGroup className="text-sky-400" />;
  if (t.includes('ui/ux') || t.includes('ui design')) return <FaPaintBrush className="text-pink-400" />;
  if (t.includes('social media')) return <FaShareAlt className="text-pink-400" />;
  if (t.includes('instagram')) return <FaInstagram className="text-pink-500" />;
  if (t.includes('branding')) return <FaPaintBrush className="text-orange-400" />;

  // Content & writing
  if (t.includes('writing') || t.includes('storytelling')) return <FaPen className="text-amber-400" />;
  if (t.includes('content creation') || t.includes('content')) return <FaVideo className="text-red-400" />;
  if (t.includes('video')) return <FaVideo className="text-red-400" />;

  // Marketing & business
  if (t.includes('marketing')) return <FaBullhorn className="text-green-400" />;
  if (t.includes('brand ambassador')) return <FaUserTie className="text-emerald-400" />;

  // Web & game
  if (t.includes('web development') || t.includes('web dev')) return <FaGlobe className="text-blue-400" />;
  if (t.includes('game')) return <FaGamepad className="text-green-400" />;

  // Fallback — generic tag icon
  return <HiHashtag className="text-text-tertiary" />;
}
