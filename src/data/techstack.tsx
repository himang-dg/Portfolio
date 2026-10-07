import { FaReact, FaGithub, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMysql, SiLaravel, SiTailwindcss, SiPrisma, SiLua, SiRobloxstudio, SiFigma } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiVisualstudio, DiPhotoshop } from "react-icons/di";

const CanvaIcon = () => <img src="/iconLocal/canva-icon.webp" alt="Canva" style={{ width: '1em', height: '1em', display: 'inline-block' }} className="object-contain" />;

export const techStackData = [
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: TbBrandJavascript, name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: FaReact, name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-neutral-100", bg: "bg-neutral-100/10" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400", bg: "bg-sky-400/10" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: SiPrisma, name: "Prisma", color: "text-blue-300", bg: "bg-blue-300/10" },
  { icon: FaPhp, name: "PHP", color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-300", bg: "bg-blue-300/10" },
  { icon: SiLaravel, name: "Laravel", color: "text-red-500", bg: "bg-red-500/10" },
  { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: SiLua, name: "Lua", color: "text-blue-600", bg: "bg-blue-600/10" },
  { icon: SiRobloxstudio, name: "Roblox Studio", color: "text-red-500", bg: "bg-red-500/10" },
  { icon: CanvaIcon, name: "Canva", color: "", bg: "bg-cyan-500/10" },
  { icon: DiPhotoshop, name: "Photoshop", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: SiFigma, name: "Figma", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: FaGithub, name: "GitHub", color: "text-neutral-300", bg: "bg-neutral-300/10" },
  { icon: DiVisualstudio, name: "VS Code", color: "text-blue-500", bg: "bg-blue-500/10" },
];
