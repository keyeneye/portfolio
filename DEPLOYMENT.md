# Deployment Guide — DigitalOcean + GitHub Actions

This guide walks you through deploying this portfolio to a DigitalOcean droplet with automatic deployments via GitHub Actions. Every push to `main` will run tests and deploy automatically.

---

## Step 1: Buy a Domain

1. Go to [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) or [Namecheap](https://www.namecheap.com/)
2. Search for a domain name (e.g., `yourname.dev`)
3. Purchase it (~$10-15/year for a `.com`)

---

## Step 2: Push Code to GitHub

1. Create a GitHub account at [github.com](https://github.com) if you don't have one
2. Create a new repository named `portfolio` (don't check any init options)
3. Run locally:

```bash
cd ~/prueba/portfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## Step 3: Create a DigitalOcean Droplet

1. Sign up at [digitalocean.com](https://digitalocean.com) (look for $200 free credit for new accounts)
2. Click **Create > Droplets**
3. Choose:
   - **Image**: Ubuntu 24.04 LTS
   - **Plan**: Basic, $4-6/month (1 CPU, 1GB RAM is enough)
   - **Region**: closest to your audience
   - **Authentication**: Password
4. Click **Create Droplet**
5. Write down the **IP address** (e.g., `143.198.xx.xx`) — you'll need it throughout this guide

---

## Step 4: Set Up the Server

Connect to your server:

```bash
ssh root@YOUR_SERVER_IP
```

Enter the password you set when creating the droplet.

### 4a. Update the system

```bash
apt update && apt upgrade -y
```

### 4b. Create a non-root user

```bash
adduser deploy
```

Set a password when prompted, then give it sudo access:

```bash
usermod -aG sudo deploy
```

### 4c. Install Node.js and Git

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs git
```

Verify with `node -v` (should show v20.x).

### 4d. Install PM2 (process manager)

```bash
npm install -g pm2
```

### 4e. Install Caddy (web server with automatic HTTPS)

```bash
apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudflare.com/public-keys/pkgs/gpg/caddy-stable.gpg' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudflare.com/public-keys/pkgs/deb/debian-caddy-archive-keyring.list' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install caddy
```

### 4f. Switch to the deploy user and clone the project

```bash
su - deploy
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd ~/portfolio
```

### 4g. Build and start the app

```bash
npm ci
npx prisma db push
npm run db:seed
npm run build
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
pm2 start .next/standalone/server.js --name portfolio
pm2 startup
```

The `pm2 startup` command will print a command starting with `sudo env PATH=...`. **Copy and run that exact command.** Then save:

```bash
pm2 save
```

### 4h. Configure Caddy

Switch back to root:

```bash
exit
```

Edit the Caddy configuration:

```bash
nano /etc/caddy/Caddyfile
```

Delete everything and replace with (use your actual domain):

```
yourdomain.com {
    reverse_proxy localhost:3000
}
```

Save with `Ctrl+O` → `Enter` → `Ctrl+X`, then restart Caddy:

```bash
systemctl restart caddy
```

---

## Step 5: Point Your Domain to the Server

1. Go to your domain registrar's DNS settings
2. Add these records:

| Type | Name  | Value           |
|------|-------|-----------------|
| A    | `@`   | YOUR_SERVER_IP  |
| A    | `www` | YOUR_SERVER_IP  |

> If using Cloudflare, set the proxy toggle to "DNS only" (gray cloud) until everything works.

3. Wait a few minutes for DNS to propagate
4. Visit your domain — you should see your portfolio with HTTPS

---

## Step 6: Create a Deploy Key

On your **local machine** (not the server), generate a dedicated SSH key for deployments:

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/deploy_key
```

Press Enter twice to skip the passphrase.

Add the public key to your server:

```bash
ssh-copy-id -i ~/.ssh/deploy_key.pub deploy@YOUR_SERVER_IP
```

Enter the `deploy` user's password when prompted.

---

## Step 7: Add GitHub Secrets

1. Go to your GitHub repo
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **"New repository secret"** and add these three:

| Name              | Value                                                              |
|-------------------|--------------------------------------------------------------------|
| `SERVER_HOST`     | Your droplet IP (e.g., `143.198.xx.xx`)                            |
| `SERVER_USER`     | `deploy`                                                           |
| `SERVER_SSH_KEY`  | Contents of `~/.ssh/deploy_key` (run `cat ~/.ssh/deploy_key` locally) |

---

## Step 8: Push and Deploy

Commit the pipeline files and push:

```bash
cd ~/prueba/portfolio
git add .github/workflows/deploy.yml scripts/deploy.sh DEPLOYMENT.md
git commit -m "Add CI/CD pipeline for DigitalOcean deployment"
git push origin main
```

Watch the pipeline run:
- Go to your GitHub repo > **Actions** tab
- You'll see: **Lint & Test** > **Deploy to DigitalOcean**

---

## From Now On

Your workflow is just:

```
1. Edit code locally
2. git add → git commit → git push
3. GitHub Actions automatically runs tests and deploys
4. Your site updates at yourdomain.com
```

No need to SSH into the server for deployments anymore.

---

## Troubleshooting

### Pipeline fails at the test step
- Check the Actions tab on GitHub for error details
- Fix the failing tests locally, commit, and push again

### Pipeline fails at the deploy step
- Verify your three GitHub secrets are correct
- Test SSH manually: `ssh -i ~/.ssh/deploy_key deploy@YOUR_SERVER_IP`
- Make sure the deploy script is executable: `chmod +x ~/portfolio/scripts/deploy.sh`

### Site not loading after DNS change
- DNS propagation can take up to 48 hours (usually under 30 minutes)
- Verify DNS with: `dig yourdomain.com` (should show your server IP)
- Check Caddy logs: `sudo journalctl -u caddy --no-pager -n 50`

### App crashes or won't start
- Check logs: `pm2 logs portfolio`
- Restart manually: `pm2 restart portfolio`
- Rebuild: `cd ~/portfolio && npm run build && cp -r public .next/standalone/public && cp -r .next/static .next/standalone/.next/static && pm2 restart portfolio`
