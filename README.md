# My Monorepo – Full-Stack SaaS Boilerplate

This repository is a modern full-stack monorepo built using **pnpm + Turborepo**.  
It contains a **Next.js frontend**, a **Node.js backend**, and **shared packages** for UI, types, and utilities.

This architecture follows the same pattern used by real-world SaaS companies like **Vercel, Stripe, and Notion**.

## What’s Inside

```bash
my-monorepo/
│
├── apps/
│   ├── web/        → Next.js (React, Tailwind, shadcn)
│   └── api/        → Node.js (Express, TypeScript)
│
├── packages/
│   ├── ui/         → Shared UI components (shadcn)
│   ├── types/      → Shared TypeScript types
│   └── utils/      → Shared helper functions
│
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- Tailwind CSS
- shadcn/ui
- TypeScript

### Backend
- Node.js
- Express
- TypeScript
- tsx (TypeScript runtime)
- nodemon

### Monorepo Tooling
- pnpm workspaces
- Turborepo

### Testing
- Vitest

---

## Shared Packages

All shared code lives inside the `packages/` folder.

| Package       | Purpose                  |
| ------------- | ------------------------ |
| `@repo/ui`    | Reusable UI components   |
| `@repo/types` | Shared TypeScript types  |
| `@repo/utils` | Shared helper functions  |

Usage example:

```ts
import { User } from "@repo/types";
import { Button } from "@repo/ui";
```

## Running the Project

### Install dependencies

```bash
pnpm install
```

### Start all apps (frontend + backend)

```bash
pnpm dev
```

This will start:

| Service            | URL                                            |
| ------------------ | ---------------------------------------------- |
| Frontend (Next.js) | [http://localhost:3000](http://localhost:3000) |
| Backend API        | [http://localhost:4000](http://localhost:4000) |

## API Health Check

Open in browser:

```bash
http://localhost:4000/health
```

Response:

```json
{
  "status": "ok"
}
```

## Turborepo Commands

| Command                 | Description                |
| ----------------------- | -------------------------- |
| `pnpm dev`              | Start all apps in parallel |
| `pnpm build`            | Build all apps & packages  |
| `pnpm test`             | Run Vitest across monorepo |
| `pnpm turbo run start`  | Start all apps in parallel |

## Why this architecture?

This setup gives you:

* Shared UI across apps
* Shared types between frontend & backend
* One install, one build, one test
* Fast builds with Turborepo
* Enterprise-grade scalability

This is how modern SaaS teams build full-stack products.

## Ready for

This boilerplate is ready to integrate:

* PostgreSQL + Prisma
* Authentication (JWT, Clerk, NextAuth)
* Docker
* CI/CD pipelines
* Cloud deployment

Feel free to customize and extend it to fit your project needs!
