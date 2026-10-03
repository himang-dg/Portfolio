"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "@/data/personal";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-medium tracking-wider uppercase"
          >
            {t.contact.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mt-3"
          >
            {t.contact.title}
          </motion.h2>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-bg-secondary border border-border text-center"
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-purple-500/5 pointer-events-none" />

          <div className="relative z-10">
            {/* Email */}
            <div className="mb-8">
              <p className="text-sm text-text-tertiary mb-3">
                {t.contact.email_label}
              </p>
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg sm:text-xl font-semibold text-text-primary">
                  himangbd181021@gmail.com
                </p>
                <a
                  href="mailto:himangbd181021@gmail.com"
                  className="px-6 py-2.5 bg-accent hover:bg-accent-soft text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-accent/20"
                >
                  {t.contact.send_button}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider my-8" />

            {/* Social Links */}
            <div>
              <p className="text-sm text-text-tertiary mb-6">
                {t.contact.social_title}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {personalData.socials.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border transition-all duration-200 ${social.bg}`}
                  >
                    <span className={`transition-colors ${social.color}`}>
                      <social.icon className="w-5 h-5" />
                    </span>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
