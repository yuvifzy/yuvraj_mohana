# 🧪 Portfolio Testing Checklist

## Quick Start
**Portfolio URL**: http://localhost:5174

Open this URL in your browser to begin testing.

---

## ✅ Visual Testing Checklist

### 1. Hero Section (First Impression)
- [ ] **Background Text**: Large "YUVRAJ MOHANA" text visible behind content
- [ ] **Gradient Title**: "Creative Developer & Designer" has purple-to-pink gradient
- [ ] **Professional Photo**: Your photo is displayed clearly
- [ ] **3D Parallax**: Move mouse around - photo should tilt smoothly
- [ ] **CTA Buttons**: Two buttons ("View My Work" and "Get In Touch")
- [ ] **Button Hover**: Buttons lift and glow on hover
- [ ] **Scroll Indicator**: Small "Scroll" text with animated line at bottom

**Expected Behavior**:
- Mouse movement creates realistic 3D depth effect on photo
- Smooth fade-in animation on page load
- Gradient text is vibrant and eye-catching

---

### 2. Navigation Bar
- [ ] **Logo**: "YM" logo in gradient on left side
- [ ] **Menu Items**: Home, About, Projects, Contact links
- [ ] **Hover Effect**: Links change color and underline appears
- [ ] **Scroll Effect**: Nav background becomes darker after scrolling 100px
- [ ] **Smooth Scroll**: Clicking links smoothly scrolls to sections

**Expected Behavior**:
- Navigation is always visible (fixed position)
- Backdrop blur effect when scrolled
- Active section is highlighted

---

### 3. About Section
- [ ] **Section Title**: "About Me" in gradient
- [ ] **Three Cards**: Design, Development, Innovation cards
- [ ] **Card Icons**: 🎨, 💻, 🚀 emojis visible
- [ ] **Card Hover**: Cards lift up on hover with glow effect
- [ ] **Skills Grid**: 12 skill items (JavaScript, React, etc.)
- [ ] **Skill Hover**: Skills scale and glow on hover
- [ ] **Fade-in Animation**: Cards appear as you scroll

**Expected Behavior**:
- Cards have glassmorphic effect (semi-transparent background)
- Staggered animation (cards appear one after another)
- Smooth hover transitions

---

### 4. Projects Section
- [ ] **Section Title**: "Featured Projects" in gradient
- [ ] **Four Project Cards**: Grid layout with 4 projects
- [ ] **Project Placeholders**: Emoji icons (🎯, 🎮, 🌐, 📱)
- [ ] **Project Titles**: Clear, readable titles
- [ ] **Technology Tags**: Colored tags for each tech stack
- [ ] **3D Tilt Effect**: Cards tilt based on mouse position
- [ ] **Hover Lift**: Cards lift up on hover

**Expected Behavior**:
- Cards tilt in 3D space when hovering
- Smooth rotation follows mouse movement
- Tags have purple background with border

---

### 5. Contact Section
- [ ] **Section Title**: "Let's Connect" in gradient
- [ ] **Subtitle**: Descriptive text about connecting
- [ ] **Four Contact Cards**: Email, LinkedIn, GitHub, Twitter
- [ ] **Card Icons**: 📧, 💼, 💻, 🐦 emojis
- [ ] **Card Hover**: Cards lift and glow on hover
- [ ] **Links Work**: Clicking opens email/social profiles

**Expected Behavior**:
- Cards are clickable links
- Smooth scale animation on hover
- Purple glow effect

---

### 6. Footer
- [ ] **Copyright Text**: "© 2026 Yuvraj Mohana"
- [ ] **Tagline**: "Crafted with passion and precision"
- [ ] **Border**: Subtle line separating from content

---

## 📱 Responsive Testing

### Desktop (1440px+)
- [ ] **Two-column hero**: Text on left, image on right
- [ ] **Full navigation**: All menu items visible
- [ ] **Grid layouts**: Projects in 2x2 grid
- [ ] **Optimal spacing**: Generous padding and margins

### Tablet (768px - 1024px)
- [ ] **Stacked hero**: Text above image
- [ ] **Centered image**: Photo centered with max-width
- [ ] **Adjusted grids**: Projects in 2 columns
- [ ] **Readable text**: Font sizes scale down appropriately

### Mobile (< 768px)
- [ ] **Single column**: All content stacked vertically
- [ ] **Full-width buttons**: CTA buttons span full width
- [ ] **Compact navigation**: Smaller nav links
- [ ] **Vertical background text**: "YUVRAJ MOHANA" rotated
- [ ] **Touch-friendly**: All interactive elements easily tappable

**How to Test**:
1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon (Cmd+Shift+M)
3. Select different devices from dropdown
4. Test interactions on each viewport

---

## 🎬 Animation Testing

### On Page Load
- [ ] **Fade-in**: Entire page fades in smoothly
- [ ] **Hero animation**: Hero content slides up
- [ ] **Staggered timing**: Elements appear in sequence

### On Scroll
- [ ] **Parallax**: Background text moves slower than content
- [ ] **Fade-in sections**: About cards appear when scrolling
- [ ] **Skill items**: Skills fade in with delay
- [ ] **Project cards**: Projects appear one by one

### On Hover
- [ ] **Hero image**: 3D tilt follows mouse
- [ ] **Project cards**: 3D rotation on hover
- [ ] **Buttons**: Lift and glow effects
- [ ] **Skills**: Scale and glow
- [ ] **Contact cards**: Lift and scale

### Smooth Scrolling
- [ ] **Nav links**: Clicking scrolls smoothly
- [ ] **Offset correct**: Sections appear below fixed nav
- [ ] **No jumps**: Smooth, continuous motion

---

## 🎨 Design Quality Check

### Colors
- [ ] **Dark theme**: Deep black background (#0a0a0a)
- [ ] **Vibrant accents**: Purple, blue, pink gradients
- [ ] **Good contrast**: Text is easily readable
- [ ] **Consistent palette**: Colors match throughout

### Typography
- [ ] **Heading font**: Space Grotesk (bold, geometric)
- [ ] **Body font**: Inter (clean, readable)
- [ ] **Fluid sizing**: Text scales with viewport
- [ ] **Proper hierarchy**: Clear visual hierarchy

### Spacing
- [ ] **Consistent gaps**: Even spacing between elements
- [ ] **Breathing room**: Generous padding in sections
- [ ] **Aligned elements**: Everything lines up properly
- [ ] **No overlap**: No elements overlapping incorrectly

### Visual Effects
- [ ] **Glassmorphism**: Cards have subtle transparency
- [ ] **Gradients**: Smooth, vibrant gradients
- [ ] **Shadows**: Subtle depth with shadows
- [ ] **Glow effects**: Purple glow on hover states

---

## ⚡ Performance Testing

### Chrome DevTools Performance
1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Scroll through entire page
5. Stop recording

**Check for**:
- [ ] **60 FPS**: Green bars in timeline
- [ ] **No layout thrashing**: Minimal red bars
- [ ] **Smooth animations**: No janky movements
- [ ] **Fast load time**: Page loads in < 2 seconds

### Lighthouse Audit
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"

**Target Scores**:
- [ ] **Performance**: 90+
- [ ] **Accessibility**: 90+
- [ ] **Best Practices**: 90+
- [ ] **SEO**: 90+

---

## 🐛 Common Issues & Fixes

### Issue: 3D effect not working
**Fix**: Make sure you're moving mouse over the hero image area

### Issue: Animations not appearing
**Fix**: Scroll slowly to trigger Intersection Observer

### Issue: Navigation not scrolling
**Fix**: Check that section IDs match href values

### Issue: Gradients not showing
**Fix**: Ensure browser supports background-clip: text

### Issue: Images not loading
**Fix**: Verify assets/yuvraj.png exists

---

## 🎯 Final Quality Check

Before considering the portfolio complete:

- [ ] All links work correctly
- [ ] All animations are smooth
- [ ] No console errors (F12 → Console tab)
- [ ] Responsive on all screen sizes
- [ ] Professional photo displays correctly
- [ ] Contact information is accurate
- [ ] Project descriptions are compelling
- [ ] Skills list is up-to-date
- [ ] Typography is consistent
- [ ] Color scheme is cohesive

---

## 📝 Customization Checklist

After testing, customize these elements:

- [ ] Update email in contact section
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Update Twitter URL
- [ ] Replace project placeholders with real images
- [ ] Update project descriptions
- [ ] Customize bio text in hero
- [ ] Add/remove skills based on expertise
- [ ] Update copyright year if needed

---

## 🚀 Ready to Deploy?

Once all tests pass:

1. **Choose hosting**: GitHub Pages, Netlify, or Vercel
2. **Add custom domain** (optional)
3. **Set up analytics** (Google Analytics)
4. **Add meta tags** for social sharing
5. **Submit to search engines**

---

**Happy Testing! 🎉**

If you find any issues, check the browser console (F12) for error messages.
