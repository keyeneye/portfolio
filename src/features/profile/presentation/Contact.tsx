import { Icon } from "@/shared/components/ui/Icon";

interface ContactProps {
  email: string;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
}

export default function Contact({ email, github, linkedin, twitter }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title animate-fadeInUp">
          Get In Touch
        </h2>
        <div className="text-center animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <p className="text-[#0F172A]/80 mb-10 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href={`mailto:${email}`}
            className="btn-primary mb-12 inline-flex items-center gap-2"
            aria-label={`Send email to ${email}`}
          >
            Send me an email
            <Icon name="mail" size="md" />
          </a>
          <nav aria-label="Social links" className="flex justify-center gap-3 sm:gap-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0F172A]/80 hover:text-[#2563EB] transition-colors duration-200 group p-2 sm:p-0"
                aria-label="GitHub profile"
              >
                <div className="p-2 bg-[#F8FAFC] rounded-lg group-hover:bg-[#2563EB]/10 transition-colors duration-200">
                  <Icon name="github" size="md" />
                </div>
                <span className="sr-only sm:not-sr-only text-sm font-medium">GitHub</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0F172A]/80 hover:text-[#2563EB] transition-colors duration-200 group p-2 sm:p-0"
                aria-label="LinkedIn profile"
              >
                <div className="p-2 bg-[#F8FAFC] rounded-lg group-hover:bg-[#2563EB]/10 transition-colors duration-200">
                  <Icon name="linkedin" size="md" />
                </div>
                <span className="sr-only sm:not-sr-only text-sm font-medium">LinkedIn</span>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0F172A]/80 hover:text-[#2563EB] transition-colors duration-200 group p-2 sm:p-0"
                aria-label="Twitter profile"
              >
                <div className="p-2 bg-[#F8FAFC] rounded-lg group-hover:bg-[#2563EB]/10 transition-colors duration-200">
                  <Icon name="twitter" size="md" />
                </div>
                <span className="sr-only sm:not-sr-only text-sm font-medium">Twitter</span>
              </a>
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
