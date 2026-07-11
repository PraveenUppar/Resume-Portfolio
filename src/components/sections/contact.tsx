"use client";

import { useState } from "react";
import { Section } from "@/components/common/section";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Download,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { personalInfo } from "@/constants/data";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only form — no backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  }

  const contactLinks = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "PraveenUppar",
      href: personalInfo.github,
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: "Praveen Uppar",
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "Portfolio",
      value: "pavicodes.in",
      href: personalInfo.website,
      icon: ExternalLink,
    },
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's build something great together."
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I&apos;m always open to discussing new projects, engineering challenges,
            or opportunities. Feel free to reach out through any of the channels below.
          </p>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card
                  hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0
                  group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{link.label}</div>
                  <div className="text-sm font-medium">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border
                text-sm font-medium hover:bg-accent transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy Email"}
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground
                text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Contact Form (frontend only) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl border border-border bg-card space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background
                  text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background
                  text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background
                  text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
            {submitted && (
              <p className="text-xs text-center text-emerald-500">
                This is a frontend-only form. Connect a backend to make it functional.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
