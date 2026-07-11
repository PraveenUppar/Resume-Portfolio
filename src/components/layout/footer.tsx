import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { personalInfo } from "@/constants/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold tracking-tight">
              {personalInfo.name}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {personalInfo.headline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center
                hover:bg-accent hover:border-primary/40 transition-all duration-200"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center
                hover:bg-accent hover:border-primary/40 transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center
                hover:bg-accent hover:border-primary/40 transition-all duration-200"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by {personalInfo.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
