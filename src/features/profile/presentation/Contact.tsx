import { Icon } from "@/shared/components/ui/Icon";

interface ContactProps {
  email: string;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
}

export default function Contact({ email, github, linkedin, twitter }: ContactProps) {
  const socialLinks = [
    { url: github, icon: "github" as const, label: "GitHub", color: "hover:text-light hover:bg-surface-bright" },
    { url: linkedin, icon: "linkedin" as const, label: "LinkedIn", color: "hover:text-syntax-cyan hover:bg-accent-muted" },
    { url: twitter, icon: "twitter" as const, label: "Twitter", color: "hover:text-syntax-cyan hover:bg-accent-muted" },
  ].filter((link) => link.url);

  return (
    <section id="contact" className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stroke to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-header justify-center animate-fadeInUp">
            <h2 className="section-title">
              Let&apos;s <span className="accent">Connect</span>
            </h2>
          </div>

          <p className="text-light-muted mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Email CTA */}
          <div className="mb-12 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-surface border border-stroke transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              aria-label={`Send email to ${email}`}
            >
              <div className="p-2 rounded-lg bg-accent-muted text-accent group-hover:bg-accent group-hover:text-void transition-all duration-300">
                <Icon name="mail" size="md" />
              </div>
              <div className="text-left">
                <p className="text-sm text-light-subtle">Drop me a line at</p>
                <p className="text-light font-medium group-hover:text-accent transition-colors duration-200">
                  {email}
                </p>
              </div>
              <Icon name="arrowUpRight" size="sm" className="text-light-subtle group-hover:text-accent transition-colors duration-200 ml-2" />
            </a>
          </div>

          {/* Social links */}
          {socialLinks.length > 0 && (
            <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <p className="text-sm text-light-subtle mb-4 uppercase tracking-wider">
                Find me on
              </p>
              <nav aria-label="Social links" className="flex justify-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-stroke text-light-muted transition-all duration-300 hover:border-stroke-glow hover:-translate-y-1 ${link.color}`}
                    aria-label={`${link.label} profile`}
                  >
                    <Icon name={link.icon} size="md" />
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Decorative element */}
          <div className="mt-16 flex items-center justify-center gap-2 text-light-subtle animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-stroke" />
            <Icon name="terminal" size="sm" />
            <span className="font-mono text-xs">Built with Next.js & Tailwind</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-stroke" />
          </div>
        </div>
      </div>
    </section>
  );
}
