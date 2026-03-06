# Deployment Guide

## 🚀 Vercel Deployment (Recommended)

### Prerequisites
- GitHub account with repository
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-amine.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Configure environment (leave as default)
   - Click "Deploy"

3. **Set Custom Domain** (optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Benefits
✅ Automatic deployments on git push
✅ Free SSL certificate
✅ Optimized for Next.js
✅ Fast CDN worldwide
✅ Analytics included

---

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build & Run
```bash
docker build -t portfolio-amine .
docker run -p 3000:3000 portfolio-amine
```

---

## ☁️ Other Hosting Options

### Netlify
- Connect GitHub repo
- Build command: `npm run build`
- Publish directory: `.next`
- [See Netlify Guide](https://docs.netlify.com/frameworks/next-js/overview/)

### AWS Amplify
- Similar to Netlify
- Good for AWS ecosystem
- Free tier available

### Traditional VPS (DigitalOcean, Linode)
```bash
# On your server
git clone your-repo
cd portfolio-amine
npm install
npm run build
npm start
```

Use PM2 for process management:
```bash
npm install pm2 -g
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

---

## 📋 Pre-Deployment Checklist

- [ ] Updated all personal information in translations
- [ ] Added real social media links
- [ ] Tested on mobile and desktop
- [ ] Updated email address in contact section
- [ ] Added real projects with descriptions
- [ ] Set correct metadata in `app/layout.tsx`
- [ ] Updated OG image if deploying
- [ ] Built locally: `npm run build`
- [ ] No console errors or warnings
- [ ] Performance acceptable (run Lighthouse)

---

## 🔍 Performance Optimization

### Lighthouse Checks
```bash
npm run build
npm start
# Then run Lighthouse in DevTools
```

### Key Metrics
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Tips
1. Images: Use next/image when adding images
2. Fonts: Already set to system fonts (fast loading)
3. CSS: Global CSS is minimal
4. Code splitting: Automatic with Next.js
5. Minification: Automatic in production build

---

## 🔒 Security Considerations

1. **Environment Variables**
   - Keep secrets in `.env.local`
   - Never commit `.env.local` to git
   - Use `.env.example` as template

2. **Headers**
   - Next.js provides default security headers
   - Configure in `next.config.ts` if needed

3. **Content Security Policy**
   - Can add to next.config.ts metadata
   - Recommended for production

4. **Dependencies**
   ```bash
   npm audit
   npm update
   ```

---

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
   ```typescript
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"
     strategy="afterInteractive"
   />
   ```

### Vercel Analytics
- Automatically available on Vercel
- Dashboard shows real-time metrics

---

## 🌍 CDN & Caching

### Vercel CDN (Automatic)
- Static pages cached at edge
- Dynamic content optimized
- Automatic cache invalidation on deploy

### Cache Strategies
Your static portfolio will:
- Cache HTML on CDN (24 hours)
- Cache images/assets (1 year, content-based)
- Instant invalidation on deploy

---

## 📱 Mobile Optimization

Already implemented:
✅ Responsive design
✅ Touch-friendly buttons
✅ Optimized viewport meta tag
✅ Readable font sizes
✅ Fast load times

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

---

## 📞 Support

### Useful Links
- [Next.js Deployment](https://nextjs.org/docs/deployment/vercel)
- [Vercel Documentation](https://vercel.com/docs)
- [Material-UI Docs](https://mui.com/)
- [NextJS Documentation](https://nextjs.org/docs)

---

## ✅ Deployment Checklist

Before going live:

1. **Build Test**
   ```bash
   npm run build
   npm start
   ```

2. **Mobile Test**
   - Test on /en and /fr
   - Check all links work
   - Test navigation on mobile

3. **SEO Check**
   - Title appears correct
   - Meta description visible
   - Open Graph tags set

4. **Performance**
   - Run Lighthouse
   - Check Core Web Vitals
   - Aim for 90+ scores

5. **Security**
   - No console errors
   - No sensitive data exposed
   - HTTPS enabled

6. **Functionality**
   - All links work
   - Language toggle works
   - Smooth scroll works
   - Responsive layout works

---

**Ready to launch? You've got this! 🚀**
