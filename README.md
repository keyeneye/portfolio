# Portfolio - Frontend Developer

A modern portfolio website built with Next.js 16, React, Tailwind CSS, and Prisma.

## Features

- **Hero Section** - Introduction with name, title, and bio
- **Projects Section** - Showcase your featured projects with images, descriptions, and links
- **Skills Section** - Display your technical skills organized by category
- **Experience Section** - Professional experience timeline
- **Contact Section** - Easy way to get in touch

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma db push
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Database seeding script
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   │   ├── experience/
│   │   │   ├── profile/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   ├── page.tsx       # Main page
│   │   └── layout.tsx     # Root layout
│   ├── components/        # React components
│   └── lib/
│       └── prisma.ts      # Prisma client instance
├── .env                   # Environment variables
└── package.json
```

## Customization

### Update Profile

Edit the `prisma/seed.ts` file to update the profile information, or modify the data directly in the database.

### Add Projects

You can add projects through the database or create an admin interface.

### Modify Styling

Tailwind CSS is used for styling. Modify the `src/app/globals.css` file for global styles or use Tailwind utility classes in components.

## Database Models

- **Profile**: Personal information (name, title, bio, social links)
- **Project**: Portfolio projects with title, description, tech stack, and links
- **Skill**: Technical skills organized by category
- **Experience**: Work experience with company, position, and dates

## API Endpoints

- `GET /api/profile` - Get profile information
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills
- `GET /api/experience` - Get all experience entries

## License

MIT
