#!/bin/bash
set -e

APP_DIR=~/portfolio

cd "$APP_DIR"

echo "Pulling latest changes..."
git pull origin main

echo "Installing dependencies..."
npm ci

echo "Running database migrations..."
npx prisma db push

echo "Seeding database..."
npm run db:seed

echo "Building application..."
npm run build

echo "Copying static assets for standalone mode..."
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

echo "Restarting application..."
pm2 restart portfolio

echo "Deploy complete!"
