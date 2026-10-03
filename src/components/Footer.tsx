"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { personalData } from "@/data/personal";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const quickLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const footerT = t.footer;
  const navT = t.nav as Record<string, string>;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-bg-secondary/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12 sm:py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNavClick("#hero")}
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity mb-4 block"
            >
              <span className="gradient-text">HIMANG</span>
            </button>
            <p className="text-sm text-text-tertiary leading-relaxed max-w-xs">
              {footerT.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {footerT.quick_links}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-text-tertiary hover:text-accent transition-colors duration-200"
                  >
                    {navT[link.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {footerT.connect}
            </h4>
            <div className="flex flex-wrap gap-2">
              {personalData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg border border-border transition-all duration-200 hover:border-border-hover ${social.bg}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className={`w-4 h-4 ${social.color}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1.5 text-sm text-text-tertiary">
              <span>© {currentYear} HIMANG.</span>
              <span>{footerT.rights}</span>
            </div>

            {/* Made with love */}
            <motion.div
              className="flex items-center gap-1.5 text-sm text-text-tertiary"
              whileHover={{ scale: 1.05 }}
            >
              <span>{footerT.made_with}</span>
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
              <span>{footerT.by} HIMANG</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
