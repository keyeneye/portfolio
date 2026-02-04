import Link from "next/link";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  email: string;
}

export default function Hero({ name, title, bio, email }: HeroProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeInUp">
          <p className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
            Frontend Developer
          </p>
          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-4">
            Hi, I&apos;m <span className="text-[#2563EB]">{name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-[#0F172A]/80 mb-6 font-medium">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#0F172A]/80 mb-12 leading-relaxed">
            {bio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="btn-primary focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
              aria-label="View my projects"
            >
              View Projects
            </Link>
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 bg-white text-[#0F172A] border-2 border-[#E5E7EB] rounded-lg font-medium transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
              aria-label={`Send email to ${email}`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
