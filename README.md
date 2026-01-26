# 🎨 Yuvraj Mohana - Premium Portfolio Website

A stunning, modern portfolio website featuring 3D depth effects, smooth animations, and premium design aesthetics inspired by top-tier portfolios.

## 📁 Project Structure

```
portfolio2/
├── index.html          # Main HTML structure
├── style.css           # Complete design system
├── script.js           # Interactive functionality
├── assets/
│   └── yuvraj.png      # Professional photo
└── README.md           # This file
```

## ✨ Key Features

### 1. **Hero Section with 3D Depth Effect**
- **Large Background Typography**: "YUVRAJ MOHANA" text positioned behind content with subtle stroke effect
- **3D Parallax Image**: Professional photo responds to mouse movement with realistic depth
- **Smooth Animations**: Fade-in effects on page load with staggered timing
- **Gradient Text**: Title uses vibrant purple-to-pink gradient
- **Technical**: CSS `transform: translate3d()`, `perspective`, and mouse tracking

### 2. **Premium Design System**
- **Dark Theme**: Deep black (#0a0a0a) background with layered grays
- **Vibrant Gradients**: Purple-to-blue primary gradient, pink accent gradient
- **Modern Typography**:
  - Space Grotesk for headings (bold, geometric)
  - Inter for body text (clean, readable)
- **Fluid Sizing**: `clamp()` functions ensure perfect scaling across devices
- **Custom Properties**: 40+ CSS variables for consistent theming

### 3. **Interactive Sections**

#### About Section
- Three feature cards with hover effects
- Skills grid with staggered fade-in animations
- Glassmorphic card design with subtle borders

#### Projects Section
- Grid layout with responsive columns
- 3D tilt effect on hover (cards rotate based on mouse position)
- Emoji placeholders (ready for real project images)
- Tag system for technologies

#### Contact Section
- Social link cards with hover animations
- Icon + text layout
- Smooth scale and glow effects

### 4. **Smooth Animations**
- **Scroll Animations**: Intersection Observer triggers fade-ins as you scroll
- **Parallax Effects**: Background text moves slower than foreground
- **Hover States**: All interactive elements have polished micro-interactions
- **Page Load**: Smooth fade-in on initial load

### 5. **Responsive Design**
Breakpoints implemented:
- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768px-1024px (stacked hero, adjusted spacing)
- **Mobile**: <768px (vertical layout, optimized typography)

## 🚀 Getting Started

### Running Locally

The portfolio is currently running at:
```
http://localhost:5174
```

If you need to restart the server:
```bash
cd /Users/yuvrajmohana/Documents/portfolio2
python3 -m http.server 5174
```

Then open your browser to `http://localhost:5174`

## 🧪 Testing Instructions

### Visual Verification

1. **Open the portfolio** in your browser at `http://localhost:5174`

2. **Hero Section Test**:
   - ✅ Verify "YUVRAJ MOHANA" appears as large background text
   - ✅ Move your mouse around the hero image - it should tilt and rotate smoothly
   - ✅ Check that the gradient text displays correctly
   - ✅ Verify CTA buttons have hover effects

3. **Scroll Test**:
   - ✅ Scroll down slowly
   - ✅ Watch for fade-in animations on About cards
   - ✅ Background text should move at different speed (parallax)
   - ✅ Navigation bar should get darker background after scrolling

4. **Navigation Test**:
   - ✅ Click each nav link (Home, About, Projects, Contact)
   - ✅ Page should smoothly scroll to each section
   - ✅ Active section should be visible with proper offset

5. **Interactive Elements**:
   - ✅ Hover over project cards - they should lift and tilt
   - ✅ Hover over skill items - they should scale and glow
   - ✅ Hover over contact links - smooth transitions
   - ✅ All buttons should have press/hover states

6. **Responsive Test**:
   - Open DevTools (F12 or Cmd+Option+I)
   - Toggle device toolbar (Cmd+Shift+M)
   - Test these viewports:
     - iPhone SE (375px)
     - iPad (768px)
     - Desktop (1440px)
   - ✅ Verify layout adapts properly

### Performance Check

Open Chrome DevTools → Performance tab:
- Record while scrolling
- Check for 60fps animations (green bars)
- Verify no layout thrashing

## 🎨 Design Highlights

### Color Palette
```css
Primary Background:   #0a0a0a (Deep Black)
Secondary Background: #1a1a1a (Dark Gray)
Primary Text:         #ffffff (White)
Secondary Text:       #a0a0a0 (Light Gray)
Accent Blue:          #3b82f6
Accent Purple:        #8b5cf6
Gradient:             Purple → Blue → Pink
```

### Typography Scale
```css
Hero Title:    clamp(3rem, 8vw, 8rem)
Section Title: clamp(2rem, 5vw, 4rem)
Subsection:    clamp(1.5rem, 3vw, 2.5rem)
Body Text:     clamp(1rem, 1.5vw, 1.125rem)
```

### Spacing System
```css
XS:  0.5rem (8px)
SM:  1rem   (16px)
MD:  2rem   (32px)
LG:  4rem   (64px)
XL:  6rem   (96px)
2XL: 8rem   (128px)
```

## 🔧 Customization Guide

### Update Personal Information

1. **Contact Links** (`index.html` lines 177-192):
```html
<a href="mailto:your-email@example.com" class="contact-link">
<a href="https://linkedin.com/in/yourprofile" ...>
<a href="https://github.com/yourusername" ...>
```

2. **Bio Text** (`index.html` lines 48-52): Update the hero description to match your background.

3. **Projects** (`index.html` lines 135-175): Replace placeholder emojis with real project images and update project details.

4. **Skills** (`index.html` lines 95-106): Add or remove skills based on your expertise.

### Replace Project Placeholders

To add real project images:
1. Add images to the `assets/` folder
2. Replace the `.project-placeholder` div with:
```html
<img src="assets/project-name.jpg" alt="Project Name">
```

### Color Scheme

To change the color scheme, update CSS variables in `style.css`:
```css
:root {
    --color-accent-blue: #3b82f6;
    --color-accent-purple: #8b5cf6;
    --color-accent-pink: #ec4899;
}
```

## 📝 Technical Details

### Technologies Used
- **HTML5**: Semantic markup with proper SEO tags
- **CSS3**: Custom properties, Grid, Flexbox, 3D transforms
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **Google Fonts**: Space Grotesk & Inter

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Hardware-accelerated animations (`transform`, `opacity`)
- Intersection Observer for efficient scroll animations
- Debounced/throttled event handlers
- Optimized repaints and reflows

## 🎯 Next Steps

### Recommended Enhancements
1. **Add Real Project Images**: Replace emoji placeholders
2. **Blog Section**: Add a blog/articles section
3. **Dark/Light Mode Toggle**: Add theme switcher
4. **Contact Form**: Integrate email service (EmailJS, Formspree)
5. **Analytics**: Add Google Analytics or similar
6. **SEO**: Add Open Graph tags for social sharing

### Deployment Options
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Automatic deployments from Git
- **Vercel**: Fast global CDN
- **Custom Domain**: Connect your own domain

## 📄 License

This portfolio template is free to use and customize for your own portfolio.

---

**Built with ❤️ by Yuvraj Mohana**
