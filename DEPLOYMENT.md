# 🚀 Deployment Guide

This guide will help you deploy your portfolio to the web so others can see it!

---

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Prerequisites
- GitHub account
- Git installed on your computer

### Steps

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `portfolio` or `yourusername.github.io`
   - Make it public
   - Don't initialize with README

2. **Initialize Git in your project**
   ```bash
   cd /Users/yuvrajmohana/Documents/portfolio2
   git init
   git add .
   git commit -m "Initial commit: Premium portfolio website"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

5. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/portfolio`
   - Or if named `yourusername.github.io`: `https://yourusername.github.io`

**Deployment time**: ~2-5 minutes

---

## Option 2: Netlify (Fastest & Feature-Rich)

### Prerequisites
- GitHub account (or drag-and-drop)

### Method A: Drag & Drop (Quickest)

1. **Go to Netlify**
   - Visit https://app.netlify.com/drop

2. **Drag your folder**
   - Drag the entire `portfolio2` folder onto the page
   - Wait for upload to complete

3. **Get your URL**
   - Netlify will give you a URL like: `random-name-123.netlify.app`
   - You can customize this in Site Settings

**Deployment time**: ~30 seconds

### Method B: Connect to Git (Recommended)

1. **Push to GitHub** (see Option 1, steps 1-3)

2. **Connect Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

3. **Automatic deployments**
   - Every time you push to GitHub, Netlify auto-deploys
   - No manual updates needed!

**Features**:
- Custom domain support
- Automatic HTTPS
- Instant rollbacks
- Form handling
- Analytics

---

## Option 3: Vercel (Great for Next.js, works for static too)

### Prerequisites
- GitHub account

### Steps

1. **Push to GitHub** (see Option 1, steps 1-3)

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Get your URL**
   - Vercel provides: `your-project.vercel.app`
   - Custom domains available

**Features**:
- Lightning-fast CDN
- Automatic HTTPS
- Preview deployments
- Analytics
- Edge functions

---

## Option 4: Custom Domain Setup

Once deployed, you can add a custom domain (e.g., `yuvrajmohana.com`)

### Buy a Domain
- **Namecheap**: https://www.namecheap.com (~$10/year)
- **Google Domains**: https://domains.google
- **Cloudflare**: https://www.cloudflare.com/products/registrar/

### Connect Domain to Hosting

#### For GitHub Pages:
1. In your repository, create a file named `CNAME`
2. Add your domain: `yuvrajmohana.com`
3. In your domain registrar, add DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

#### For Netlify:
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow the DNS instructions provided

#### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

---

## 📊 Add Analytics

### Google Analytics

1. **Create account**
   - Go to https://analytics.google.com
   - Create a new property

2. **Get tracking code**
   - Copy the tracking ID (e.g., `G-XXXXXXXXXX`)

3. **Add to your site**
   - Open `index.html`
   - Add before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Plausible Analytics (Privacy-friendly alternative)

1. Sign up at https://plausible.io
2. Add this before `</head>`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

---

## 🔍 SEO Optimization

### Add Open Graph Tags

Open `index.html` and add these in the `<head>` section:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yuvrajmohana.com/">
<meta property="og:title" content="Yuvraj Mohana - Creative Developer & Designer">
<meta property="og:description" content="Crafting beautiful digital experiences with modern web technologies.">
<meta property="og:image" content="https://yuvrajmohana.com/assets/social-preview.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yuvrajmohana.com/">
<meta property="twitter:title" content="Yuvraj Mohana - Creative Developer & Designer">
<meta property="twitter:description" content="Crafting beautiful digital experiences with modern web technologies.">
<meta property="twitter:image" content="https://yuvrajmohana.com/assets/social-preview.jpg">
```

### Create Social Preview Image

1. Create a 1200x630px image showcasing your portfolio
2. Save as `assets/social-preview.jpg`
3. Update the `og:image` and `twitter:image` URLs above

### Submit to Search Engines

1. **Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your property
   - Submit your sitemap

2. **Bing Webmaster Tools**
   - Go to https://www.bing.com/webmasters
   - Add your site

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All personal information is updated
- [ ] Contact links work correctly
- [ ] No placeholder text remains
- [ ] Images are optimized (compressed)
- [ ] No console errors
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Meta descriptions are compelling
- [ ] Favicon is added (optional)
- [ ] Analytics code is added (optional)

---

## 🎨 Add a Favicon

1. **Create favicon**
   - Use https://favicon.io to generate
   - Or create a 32x32px PNG

2. **Add to project**
   - Save as `favicon.ico` in root folder
   - Add to `<head>` in `index.html`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico">
   ```

---

## 🔄 Updating Your Site

### GitHub Pages
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Wait 1-2 minutes for changes to appear.

### Netlify (with Git)
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Deploys automatically in ~30 seconds.

### Netlify (Drag & Drop)
- Drag updated folder to Netlify dashboard
- Overwrites previous version

---

## 💡 Pro Tips

1. **Use a CDN**: Netlify and Vercel include this automatically
2. **Enable HTTPS**: All platforms provide free SSL certificates
3. **Compress images**: Use https://tinypng.com before uploading
4. **Test performance**: Run Lighthouse audits regularly
5. **Monitor uptime**: Use https://uptimerobot.com (free)
6. **Backup regularly**: Keep Git repository updated

---

## 🆘 Troubleshooting

### Site not loading
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours for DNS changes
- Clear browser cache

### Images not showing
- Check file paths are correct
- Ensure images are in `assets/` folder
- Verify image files were uploaded

### Styles not applying
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check `style.css` is in root folder
- Verify no typos in `<link>` tag

### 404 errors
- Ensure `index.html` is in root folder
- Check hosting platform settings
- Verify repository is public (for GitHub Pages)

---

## 📞 Need Help?

- **GitHub Pages**: https://docs.github.com/en/pages
- **Netlify**: https://docs.netlify.com
- **Vercel**: https://vercel.com/docs

---

**Ready to go live? Choose a platform and follow the steps above! 🚀**
