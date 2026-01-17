import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.create({
    data: {
      name: "John Doe",
      title: "Frontend Developer",
      bio: "Passionate about building beautiful, accessible, and performant web applications. I specialize in React, Next.js, and modern frontend technologies.",
      email: "john.doe@example.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  });

  await prisma.skill.createMany({
    data: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "CSS3", category: "Styling" },
      { name: "Node.js", category: "Backend" },
      { name: "Prisma", category: "Database" },
      { name: "Git", category: "Tools" },
      { name: "Figma", category: "Design" },
    ],
  });

  await prisma.project.createMany({
    data: [
      {
        title: "E-commerce Dashboard",
        description: "A modern dashboard for managing products, orders, and customers with real-time analytics.",
        techStack: "Next.js, TypeScript, Tailwind CSS, Chart.js",
        demoUrl: "https://demo.example.com",
        repoUrl: "https://github.com/johndoe/ecommerce-dashboard",
        featured: true,
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        techStack: "React, Firebase, Tailwind CSS",
        demoUrl: "https://demo.example.com",
        repoUrl: "https://github.com/johndoe/task-app",
        featured: true,
      },
      {
        title: "Weather Forecast",
        description: "A beautiful weather application with location-based forecasts and interactive maps.",
        techStack: "React, OpenWeather API, CSS3",
        demoUrl: "https://demo.example.com",
        repoUrl: "https://github.com/johndoe/weather-app",
        featured: false,
      },
    ],
  });

  await prisma.experience.createMany({
    data: [
      {
        company: "Tech Corp",
        position: "Senior Frontend Developer",
        description: "Leading the frontend team in building scalable web applications. Implemented design system and improved performance by 40%.",
        startDate: new Date("2023-01-01"),
        current: true,
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        description: "Built and maintained multiple client projects using React and Next.js. Collaborated with designers to implement pixel-perfect UIs.",
        startDate: new Date("2021-06-01"),
        endDate: new Date("2022-12-31"),
        current: false,
      },
      {
        company: "Web Agency",
        position: "Junior Developer",
        description: "Developed responsive websites for various clients. Gained experience with modern frontend frameworks and best practices.",
        startDate: new Date("2020-01-01"),
        endDate: new Date("2021-05-31"),
        current: false,
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
