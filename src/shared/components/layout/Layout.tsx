import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  profile?: {
    name: string;
    github?: string | null;
    linkedin?: string | null;
    twitter?: string | null;
  } | null;
}

export default function Layout({ children, profile }: LayoutProps) {
  return (
    <>
      <Navbar name={profile?.name || "Your name"}/>
      <main id="main-content" className="min-h-screen" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer
        name={profile?.name || "Portfolio"}
        github={profile?.github}
        linkedin={profile?.linkedin}
        twitter={profile?.twitter}
      />
    </>
  );
}
