import { Icon } from "../ui/Icon";

interface FooterProps {
  name: string;
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
}

export default function Footer({ name, github, linkedin, twitter }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            © {currentYear} {name}. All rights reserved.
          </p>
          <nav aria-label="Social links" className="flex items-center gap-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#38BDF8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] rounded-md"
                aria-label="GitHub profile"
              >
                <Icon name="github" size="md" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#38BDF8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] rounded-md"
                aria-label="LinkedIn profile"
              >
                <Icon name="linkedin" size="md" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#38BDF8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] rounded-md"
                aria-label="Twitter profile"
              >
                <Icon name="twitter" size="md" />
              </a>
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
