"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "@/data/personal";
import { Mail, Copy, Check, ExternalLink, MessageSquare } from "lucide-react";

export default function Contact() {
  const { t, locale } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const email = "himangbd181021@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
          >
            {t.contact.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 p-5 sm:p-7 rounded-2xl glass border border-border flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                {locale === "id" ? "Mari Memulai Sesuatu Bersama" : "Let's Start Something Together"}
              </h3>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                {locale === "id"
                  ? "Tertarik untuk berkolaborasi dalam proyek web, map Roblox, desain visual, atau ingin bertukar pikiran seputar teknologi? Pintu komunikasi selalu terbuka."
                  : "Interested in collaborating on web projects, Roblox maps, visual designs, or just discussing tech ideas? My inbox is always open."}
              </p>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-bg-secondary/90 border border-border mb-6">
                <span className="text-xs text-text-tertiary block mb-1.5 font-mono">
                  {t.contact.email_label}
                </span>
                <span className="text-base sm:text-lg font-mono font-semibold text-text-primary break-all">
                  {email}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-soft text-slate-950 font-semibold text-sm shadow-md shadow-accent/20"
              >
                <Mail className="w-4 h-4" />
                <span>{t.contact.send_button}</span>
              </motion.a>

              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bg-secondary hover:bg-bg-tertiary border border-border hover:border-accent/40 text-text-primary text-sm font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">{locale === "id" ? "Tersalin!" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent" />
                    <span>{locale === "id" ? "Salin Alamat" : "Copy Email"}</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Social Channels Matrix */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            <div className="mb-3 px-1">
              <p className="text-xs text-text-tertiary font-mono uppercase tracking-wider">
                {t.contact.social_title}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalData.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center justify-between p-4 rounded-xl glass border border-border hover:border-accent/40 hover:bg-bg-tertiary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xl ${social.color} transition-transform group-hover:scale-110 duration-200`}>
                        <Icon />
                      </span>
                      <span className="text-sm font-medium text-text-primary">
                        {social.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
