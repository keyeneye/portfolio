# Stage 1: Install dependencies
FROM node:22-alpine AS deps

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json package-lock.json* ./
COPY prisma ./prisma/

RUN npm ci

# Stage 2: Build the application
FROM node:22-alpine AS builder

RUN apk add --no-cache openssl

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="file:./build.db"

# Push schema so build can reference Prisma, then build Next.js
RUN npx prisma db push --skip-generate && \
    npm run build

# Pre-compile seed script to JS so runner doesn't need ts-node
RUN npx tsc prisma/seed.ts --esModuleInterop --outDir prisma/compiled

# Stage 3: Production runner
FROM node:22-alpine AS runner

RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="file:/app/data/portfolio.db"
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir -p /app/data && \
    chown -R nextjs:nodejs /app

# Copy standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy Prisma files needed at runtime (schema + generated client + CLI)
COPY --from=builder --chown=nextjs:nodejs /app/prisma/schema.prisma ./prisma/schema.prisma
COPY --from=builder --chown=nextjs:nodejs /app/prisma/compiled/seed.js ./prisma/seed.js
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/prisma ./node_modules/prisma

# Copy entrypoint
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./

USER nextjs

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
