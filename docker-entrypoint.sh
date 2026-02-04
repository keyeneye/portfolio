#!/bin/sh
set -e

echo "Applying database schema..."
node ./node_modules/prisma/build/index.js db push --skip-generate

# Seed if the database is empty (no profiles exist)
PROFILE_COUNT=$(node -e "
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.profile.count().then(c => { console.log(c); p.\$disconnect(); }).catch(() => { console.log(0); p.\$disconnect(); });
")

if [ "$PROFILE_COUNT" = "0" ]; then
  echo "Database is empty, running seed..."
  node prisma/seed.js
fi

echo "Starting Next.js server..."
exec node server.js
