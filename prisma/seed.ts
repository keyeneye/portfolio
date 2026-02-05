import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Limpiar datos existentes
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: "David Ricardo Mendoza Perez",
      title: "Frontend Senior Developer",
      bio: "Senior Frontend Developer with over 6 years of experience building robust and optimized web applications. Specialized in React, Next.js, Angular, and Node.js, with strong knowledge in TypeScript, automated testing, and performance optimization. Proven experience leading technical teams and contributing to high-impact projects across industries such as banking, digital payments, and telecommunications. Passionate about innovation and continuous improvement, with strong skills in project management and team mentoring.\n\nLocation: Mexico City, Mexico | Phone: (+52) 5538978000",
      email: "david02ing@gmail.com",
      linkedin: "https://www.linkedin.com/in/davidricardomendoza",
    },
  });

  await prisma.skill.createMany({
    data: [
      // Frontend Frameworks
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Angular", category: "Frontend" },
      // Languages
      { name: "JavaScript (ES6+)", category: "Languages" },
      { name: "TypeScript", category: "Languages" },
      { name: "Python", category: "Languages" },
      { name: "HTML5", category: "Languages" },
      { name: "CSS3", category: "Languages" },
      // Styling
      { name: "Tailwind CSS", category: "Styling" },
      { name: "SASS", category: "Styling" },
      { name: "LESS", category: "Styling" },
      // Optimization
      { name: "Web Performance", category: "Optimization" },
      { name: "SEO", category: "Optimization" },
      { name: "Lazy Loading", category: "Optimization" },
      { name: "Caching", category: "Optimization" },
      { name: "Lighthouse Audits", category: "Optimization" },
      // Testing
      { name: "Jest", category: "Testing" },
      { name: "Cypress", category: "Testing" },
      { name: "Enzyme", category: "Testing" },
      // Tools
      { name: "Webpack", category: "Tools" },
      { name: "Vite", category: "Tools" },
      { name: "Git", category: "Tools" },
      { name: "Docker", category: "Tools" },
      // Backend
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "REST API", category: "Backend" },
      { name: "Microservices", category: "Backend" },
      // Cloud & DevOps
      { name: "AWS", category: "Cloud" },
      { name: "Azure", category: "Cloud" },
      { name: "CI/CD", category: "DevOps" },
      { name: "Azure Pipelines", category: "DevOps" },
      { name: "GitHub Actions", category: "DevOps" },
      { name: "DigitalOcean", category: "DevOps" },
      // Databases
      { name: "MongoDB", category: "Databases" },
      { name: "PostgreSQL", category: "Databases" },
      { name: "MySQL", category: "Databases" },
      //AI
      { name: "ChatGPT", category: "AI" },
      { name: "Claude code", category: "AI" },
      {name: "Cursor", category: "AI" }
    ],
  });

  await prisma.project.createMany({
    data: [
      {
        title: "Recruitment Platform (Brive)",
        description: "Led development of critical frontend interfaces and components for a SaaS recruitment platform, improving UX by 25%, optimizing performance by 30%, implementing CI/CD pipelines that reduced deployment time by 40%, and collaborating cross-functionally to define technical strategy across candidate and recruiter platforms.",
        techStack: "React, TypeScript, Tailwind CSS, Webpack, CI/CD, Docker, Azure, Claude code, Jest, Cursor",
        demoUrl: "https://brivesoluciones.com/",
        featured: true,
      },
      {
        title: "SAT Appointment System Migration",
        description: "Led migration from ColdFusion to JavaScript, improving efficiency by 50%. Complete overhaul of the appointment scheduling system for the Mexican tax authority.",
        techStack: "Angular, TypeScript, Node.js, REST API, ",
        featured: true,
      },
      {
        title: "Cinemex Payment Gateway (Smart Payment Solutions)",
        description: "Developed and optimized payment gateway, fixing critical bugs and improving stability by 15%. Enhanced performance and reliability for cinema ticket purchases.",
        techStack: "React, Node.js, Express, Microservices, AWS, CI/CD",
        featured: true,
      },
      {
        title: "GNP Corporate Client Portal",
        description: "Designed and built a new corporate client portal for one of Mexico's largest insurance companies, increasing adoption by 35%. Defined frontend architecture and ensured seamless backend integration.",
        techStack: "Next.js, TypeScript, Tailwind CSS, Node.js",
        featured: true,
      },
    ],
  });

  await prisma.experience.createMany({
    data: [
      {
        company: "Brive",
        position: "Senior Frontend Developer",
        description: "Led development of new interfaces and critical components for the e-learning platform, improving UX by 25%. Defined and implemented CI/CD pipelines, reducing deployment time by 40%. Optimized initial load performance by 30% using lazy loading and code splitting. Collaborated with cross-functional teams to define technical strategies and prioritize tasks.",
        startDate: new Date("2022-02-01"),
        current: true,
      },
      {
        company: "Smart Payment Solutions",
        position: "Senior Frontend Developer",
        description: "Developed and optimized payment gateway, fixing critical bugs and improving stability by 15%. Led a team of 5 frontend developers, establishing best practices. Reduced API response time by 20% through code optimization.",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2022-02-28"),
        current: false,
      },
      {
        company: "GNP (Grupo Nacional Provincial)",
        position: "Senior Frontend Developer",
        description: "Designed and built a new corporate client portal, increasing adoption by 35%. Defined frontend architecture and ensured seamless backend integration.",
        startDate: new Date("2021-11-01"),
        endDate: new Date("2021-12-31"),
        current: false,
      },
    ],
  });

  console.log("Database seeded successfully with CV data!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
