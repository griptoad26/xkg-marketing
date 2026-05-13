# XKG Marketing Site — Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Link repo: `cd xkg-marketing && vercel`
3. Configure environment variables in Vercel dashboard:
   - `STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### Option 2: Cloudflare Pages (Free)
1. Go to cloudflare.com/pages
2. Connect GitHub repo
3. Set build command: `npm run build`
4. Set output directory: `.next`

### Option 3: Railway ($5/mo starter)
1. Connect GitHub repo at railway.app
2. Auto-detects Next.js

## Pre-Launch Checklist

- [ ] Set real Stripe publishable key in Vercel dashboard
- [ ] Update pricing page with real Stripe checkout URLs
- [ ] Set up Stripe webhook pointing to `/api/webhook`
- [ ] Update GitHub links in footer/nav
- [ ] Add Google Analytics or Plausible
- [ ] Configure custom domain (xkg.ai)

## Post-Deploy

1. Set webhook URL in Stripe: `https://xkg.ai/api/webhook`
2. Test checkout flow (use test mode first)
3. Verify analytics tracking
