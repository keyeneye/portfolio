import { Icon } from "../ui/Icon";

interface FooterProps {
  name: string;
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
}

export default function Footer({ name, github, linkedin, twitter }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { url: github, icon: "github" as const, label: "GitHub" },
    { url: linkedin, icon: "linkedin" as const, label: "LinkedIn" },
    { url: twitter, icon: "twitter" as const, label: "Twitter" },
  ].filter((link) => link.url);

  return (
    <footer className="relative border-t border-stroke" role="contentinfo">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent font-mono text-xs font-bold">
              {"</>"}
            </span>
            <p className="text-sm text-light-subtle">
              © {currentYear} {name}
            </p>
          </div>

          {socialLinks.length > 0 && (
            <nav aria-label="Social links" className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-light-subtle hover:text-accent hover:bg-accent-muted transition-all duration-200"
                  aria-label={`${link.label} profile`}
                >
                  <Icon name={link.icon} size="sm" />
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
