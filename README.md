# Fairtrade - Plot Insights Case Study

A professional case study one-pager showcasing Zure's work on the Plot Insights project for Fairtrade. Built with clean HTML, CSS, and JavaScript for easy deployment and maintenance.

## 🎯 Project Overview

**Client:** Fairtrade  
**Project:** Plot Insights  
**Agency:** Zure  
**Purpose:** Sales and marketing showcase demonstrating Zure's capabilities in data analytics and digital transformation

## 📁 Project Structure

```
fairtrade-plot-insights/
├── index.html          # Main HTML structure
├── styles.css          # Zure brand styling and responsive design
├── script.js           # Interactive functionality
├── README.md           # Project documentation
└── assets/             # (To be created) Images and media files
    ├── images/
    └── icons/
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a vanilla HTML/CSS/JS project.

### Local Development

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd fairtrade-plot-insights
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server package)
     npx http-server
     ```

3. **View the site:**
   Navigate to `http://localhost:8000` (or the port specified)

## 🎨 Design System

### Brand Colors (Zure)
- **Primary Black:** `#000000`
- **Secondary Dark:** `#1a1a1a`
- **Accent Blue:** `#00a4e4`
- **Text Color:** `#333333`
- **Light Text:** `#666666`
- **Background:** `#ffffff`
- **Gray Background:** `#f5f5f5`

### Typography
- **Font Family:** Inter (with system fallbacks)
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 3rem (48px)
- XL: 4rem (64px)
- 2XL: 6rem (96px)

## 📝 Content Structure

The case study follows this section order:

1. **Hero Section** - Project title, subtitle, and service tags
2. **Project Overview** - Industry, services, company info, and metrics
3. **The Mission** - Problem statement and approach
4. **Key Features** - 3+ feature sections with descriptions
5. **Expertise & Approach** - Team expertise with quotes
6. **From Idea to Impact** - Reflection and results
7. **Contact Section** - CTA and contact information
8. **Footer** - Links and company information

## 🖼️ Adding Content

### Replace Placeholder Text

All content placeholders are marked with `[...]`. Search for these in `index.html` and replace with actual content:

- `[Industry to be added]`
- `[Services to be added]`
- `[Company description to be added]`
- `[Feature descriptions]`
- `[Customer quotes]`
- `[Team member names and quotes]`

### Adding Images

1. Create an `assets/images/` directory
2. Add your images to this folder
3. Replace image placeholders in HTML:

```html
<!-- Current placeholder -->
<div class="hero-image-placeholder">
    <p>Hero Image Placeholder</p>
</div>

<!-- Replace with -->
<img src="assets/images/hero-image.jpg" alt="Description" class="hero-image">
```

4. Add corresponding CSS for new image classes if needed

### Image Specifications

- **Hero Image:** 1920x1080px (16:9) - High quality JPEG/PNG
- **Feature Images:** 1200x800px - JPEG/PNG
- **Team Photos:** 400x400px - Square, JPEG/PNG
- **Logo/Icons:** SVG preferred for scalability

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main`) and root directory
4. Save and wait for deployment
5. Your site will be available at `https://[username].github.io/fairtrade-plot-insights/`

### Netlify

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts for deployment

### Custom Hosting

Upload all files to your web server's public directory via FTP/SFTP or control panel.

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Intersection Observer for fade-in effects
- ✅ Zure brand styling and color scheme
- ✅ SEO-friendly semantic HTML
- ✅ Accessible design (WCAG considerations)
- ✅ Print-friendly styles
- ✅ No dependencies - vanilla JavaScript
- ✅ Fast loading - minimal assets

## 🔧 Customization

### Modifying Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #000000;
    --color-accent: #00a4e4;
    /* ... other colors */
}
```

### Adding Sections

1. Copy an existing section structure from `index.html`
2. Modify content and classes as needed
3. Style in `styles.css` following the existing pattern

### Mobile Menu (Optional Enhancement)

The current design hides the navigation on mobile. To add a hamburger menu:

1. Add menu toggle button in HTML header
2. Uncomment `initMobileMenu()` in `script.js`
3. Add mobile menu styles in `styles.css`

## 📊 Performance

- **Lighthouse Score Target:** 90+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Total Size:** < 500KB (without images)
- **Image optimization:** Use WebP format with JPEG fallbacks

## 🔍 SEO Considerations

- Meta description included
- Semantic HTML structure
- Alt text for all images (add when replacing placeholders)
- Mobile-friendly design
- Fast loading time

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari 12+
- Android Chrome 8+

## 🤝 Contributing

This is a client project for Zure. For content updates:

1. Contact the project owner
2. Make changes in a feature branch
3. Test thoroughly across devices
4. Submit for review before deploying

## 📄 License

© 2026 Zure. All rights reserved.

This case study is proprietary content created for Fairtrade and Zure.

## 📞 Contact

**Project Lead:** [To be assigned]  
**Design & Development Director:** Jarno Tikka  
**Email:** jarno.tikka@zure.com  
**Phone:** +358 50 432 9540

## 🎯 Next Steps

1. ✅ Base HTML/CSS/JS structure created
2. 📝 Add actual project content and copy
3. 🖼️ Add project images and media
4. 🎨 Fine-tune styling and animations
5. 🧪 Test across devices and browsers
6. 🚀 Deploy to hosting platform
7. 📈 Set up analytics (Google Analytics recommended)

---

**Built with ❤️ by Zure**  
*Roar at Challenge*
