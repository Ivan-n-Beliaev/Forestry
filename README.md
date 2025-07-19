# Nikolai Beliaev - Portfolio Website

A modern, responsive portfolio website for Nikolai Beliaev, Global Forestry Strategist and PhD in Technical Sciences, built with React 18 and NextUI components.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic using NextUI design system
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Interactive Components**: NextUI components with hover states and transitions
- **Dark/Light Mode**: Theme switching with NextUI's built-in theming
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance Optimized**: Lazy loading, code splitting, and optimized images

## 🚀 Tech Stack

- **React 18** - Latest React with functional components and hooks
- **NextUI** - Modern React component library
- **Framer Motion** - Animation library for smooth transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nikolai-beliaev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation with NextUI Navbar
│   │   ├── Footer.jsx          # Footer with contact info
│   │   └── Layout.jsx          # Main layout wrapper
│   ├── sections/
│   │   ├── HeroSection.jsx     # Hero section with CTA
│   │   ├── AboutSection.jsx    # About and bio section
│   │   ├── SkillsSection.jsx   # Skills with progress bars
│   │   ├── PortfolioSection.jsx # Project showcase
│   │   └── ContactSection.jsx  # Contact form
│   └── ui/
│       ├── ProjectCard.jsx     # Reusable project card
│       └── SkillCard.jsx       # Reusable skill card
├── hooks/
│   ├── useScrollSpy.js         # Navigation highlighting
│   └── useIntersectionObserver.js # Scroll animations
├── utils/
│   └── constants.js            # Portfolio data and constants
├── App.jsx                     # Main app component
├── main.jsx                    # App entry point
└── index.css                   # Global styles
```

## 🎨 NextUI Components Used

- **Layout**: Navbar, Card, Container, Divider
- **Navigation**: Navbar, NavbarBrand, NavbarContent, Link
- **Content**: Card, CardBody, CardHeader, Avatar, Image
- **Forms**: Input, Textarea, Button, Switch
- **Feedback**: Progress, Chip, Badge, Modal, Spinner
- **Data Display**: Tabs, Tab, Tooltip

## 🎯 Key Sections

### Hero Section
- Professional introduction with avatar
- Call-to-action buttons
- Smooth scroll navigation
- Animated entrance effects

### About Section
- Detailed biography
- Key achievements with icons
- Expertise areas with chips
- Recent experience timeline

### Skills Section
- Categorized skills with progress bars
- Interactive skill cards
- Professional highlights
- Animated progress indicators

### Portfolio Section
- Project showcase with filtering
- Modal detail views
- Technology tags
- External links to projects

### Contact Section
- Contact form with validation
- Contact information cards
- Success/error states
- Professional availability status

## 🔧 Customization

### Theme Configuration
The NextUI theme is configured in `tailwind.config.js`:
- Primary color: Blue (#2563eb)
- Secondary color: Emerald (#10b981)
- Custom gradient utilities
- Dark/light mode support

### Content Updates
Update portfolio content in `src/utils/constants.js`:
- Personal information
- Skills and expertise
- Project portfolio
- Experience timeline

### Styling
- Global styles in `src/index.css`
- Component-specific styles using NextUI classes
- Custom gradient text utility
- Responsive breakpoints

## 📱 Responsive Design

- **Mobile**: Single column layout, hamburger menu
- **Tablet**: Two-column grids, expanded navigation
- **Desktop**: Multi-column layouts, full navigation

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🔍 Performance Optimizations

- Code splitting with React.lazy()
- Image optimization with lazy loading
- Intersection Observer for scroll animations
- Memoized components with React.memo()
- Optimized bundle size with Vite

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions about this portfolio template or Nikolai's professional services:

- **Email**: nikolai.l.beliaev@gmail.com
- **LinkedIn**: [linkedin.com/in/nikolaibeliaev](https://www.linkedin.com/in/nikolaibeliaev/)
- **Location**: St Petersburg, Russia

---

Built with ❤️ using React and NextUI
