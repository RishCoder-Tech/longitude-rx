# Longitude Rx - Healthcare Technology Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

## 🏥 Project Overview

**Longitude Rx** is a revolutionary healthcare technology platform designed to transform specialty pharmacy operations for health systems. Built by health systems for health systems, we provide innovative solutions that improve patient care, enhance financial performance, and streamline medication access.

### 🌟 Key Features

- **Specialty Pharmacy Revenue Capture** - Optimize prescription capture and revenue generation
- **340B Program Optimization** - Maximize performance and compliance
- **Market Access Expansion** - Secure payer and PBM network inclusion
- **Next-Generation Technology** - AI-powered predictive workflows and data analytics
- **Health System Collaboration** - Built on collaborative innovation principles

### 🏗️ Architecture

- **Frontend**: Next.js 15 with React 19 and TypeScript
- **Styling**: Tailwind CSS with custom healthcare color palette
- **Animations**: Framer Motion for smooth, engaging user experiences
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: React hooks and context for state management
- **Deployment**: Vercel for production hosting

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.17 or later
- **npm**: 9.0 or later, or **pnpm**: 8.0 or later
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd longitude-rx
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following environment variables:
   ```env
   # Contentful CMS
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   
   # Supabase Database
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   
   # Monday.com Integration
   MONDAY_API_TOKEN=your_monday_token
   MONDAY_BOARD_ID=your_board_id
   
   # Sanity CMS (optional)
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
# Development server
npm run dev          # Start development server
pnpm dev            # Start development server (pnpm)

# Build and production
npm run build       # Build for production
npm run start       # Start production server
pnpm build         # Build for production (pnpm)
pnpm start         # Start production server (pnpm)

# Code quality
npm run lint        # Run ESLint
pnpm lint          # Run ESLint (pnpm)

# Package management
npm install         # Install dependencies
npm update          # Update dependencies
pnpm install       # Install dependencies (pnpm)
pnpm update        # Update dependencies (pnpm)
```

## 🚀 Deployment

### Production Deployment

**Deploy to Vercel with one command:**

```bash
npx vercel --prod --yes
```

### Manual Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

3. **Environment Variables**
   Ensure all production environment variables are set in your Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all required environment variables from `.env.local`

### Deployment Configuration

The project includes optimized Next.js configuration for production:

```javascript
// next.config.mjs
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
```

## 🏗️ Project Structure

```
longitude-rx/
├── app/                          # Next.js 13+ App Router
│   ├── about/                   # About page
│   ├── admin/                   # Admin dashboard
│   ├── api/                     # API routes
│   │   ├── applications/        # Job application endpoints
│   │   ├── contact-form/        # Contact form handling
│   │   ├── jobs/                # Job posting management
│   │   ├── newsletter-subscription/ # Newsletter signup
│   │   └── test-*/              # Testing and debug endpoints
│   ├── careers/                 # Careers page (currently in maintenance)
│   ├── case-studies/            # Case studies showcase
│   ├── contact/                 # Contact page
│   ├── newsletter/              # Newsletter page
│   ├── services/                # Services overview
│   ├── technologies/            # Technology stack
│   ├── website/                 # Website services
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components (Radix UI)
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── dialog.tsx          # Modal dialogs
│   │   ├── form.tsx            # Form components
│   │   └── ...                 # Other UI components
│   ├── 3d-background.tsx       # 3D background effects
│   ├── counter-animation.tsx   # Animated counters
│   ├── data-flow-animation.tsx # Data flow animations
│   ├── floating-cube.tsx       # Floating cube effects
│   ├── footer.tsx              # Site footer
│   ├── healthcare-leaders-scroll.tsx # Partner logos carousel
│   ├── job-application-form.tsx # Job application form
│   ├── navbar.tsx              # Navigation bar
│   ├── particle-system.tsx     # Particle effects
│   ├── scroll-animations.tsx   # Scroll-triggered animations
│   ├── services-slider.tsx     # Services showcase slider
│   ├── theme-provider.tsx      # Theme management
│   └── webgl-background.tsx    # WebGL background effects
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/                         # Utility libraries
│   ├── contentful.ts            # Contentful CMS integration
│   ├── sanity.ts                # Sanity CMS integration
│   ├── supabase.ts              # Supabase database client
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   │   ├── healthcare-*.jpg     # Healthcare-related images
│   │   ├── case-study-*.jpg     # Case study images
│   │   └── logos/               # Partner and company logos
│   ├── hero-lottie.json         # Lottie animation file
│   └── *.png                    # Various logo and image files
├── sanity-schemas/              # Sanity CMS schemas
│   ├── blogPost.js              # Blog post schema
│   ├── caseStudy.js             # Case study schema
│   └── job.js                   # Job posting schema
├── styles/                      # Additional styles
├── .env.example                 # Environment variables template
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎨 Design System

### Color Palette

The project uses a custom healthcare-focused color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  gypsum: { 50: "#FAFCFF", 100: "#F3F7FF", ... },    // Light blues
  rhodamine: { 50: "#FDF2F8", 100: "#FCE7F3", ... }, // Pinks/reds
  admiral: { 50: "#F8FAFC", 100: "#F1F5F9", ... },   // Grays/blues
  ocean: { 50: "#F0F9FF", 100: "#E0F2FE", ... },     // Blues
  gulf: { 50: "#F0F9FF", 100: "#E0F2FE", ... },      // Light blues
}
```

### Typography

- **Primary Font**: Inter (via @fontsource/inter)
- **Display Font**: Custom font classes for headings
- **Body Font**: Inter for body text

### Component Library

Built on **Radix UI** primitives with custom styling:
- **Accessibility**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first design approach
- **Interactive**: Hover states, animations, and transitions
- **Consistent**: Unified design language across components

## 🔧 Core Technologies

### Frontend Framework
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Backend & APIs
- **Next.js API Routes**: Serverless API endpoints
- **Contentful**: Headless CMS for content management
- **Supabase**: Database and authentication
- **Sanity**: Alternative CMS option
- **Monday.com**: Project management integration

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **TypeScript**: Static type checking

## 📱 Features & Components

### Homepage
- **Hero Section**: Animated hero with parallax effects
- **Statistics**: Animated counters showing healthcare metrics
- **Services Overview**: Interactive service cards
- **Testimonials**: Customer success stories
- **Partner Showcase**: Scrolling healthcare partner logos
- **Call-to-Action**: Contact and engagement sections

### Navigation
- **Responsive Navbar**: Mobile-optimized navigation
- **Theme Toggle**: Light/dark mode switching
- **Mobile Menu**: Collapsible mobile navigation

### Forms & Interactions
- **Contact Forms**: Multi-step contact forms
- **Job Applications**: Comprehensive job application system
- **Newsletter Signup**: Email subscription management
- **File Uploads**: Document and image upload capabilities

### Animations & Effects
- **Scroll Animations**: Triggered on scroll
- **3D Backgrounds**: WebGL and Three.js effects
- **Particle Systems**: Interactive particle animations
- **Floating Elements**: Animated UI elements
- **Loading States**: Skeleton loaders and spinners

## 🔌 API Endpoints

### Content Management
- `GET /api/jobs` - Fetch job postings from Contentful
- `POST /api/job-application` - Submit job applications
- `POST /api/contact-form` - Handle contact form submissions
- `POST /api/newsletter-subscription` - Newsletter signups

### File Management
- `POST /api/test-upload-debug` - File upload testing
- `POST /api/test-supabase-upload` - Supabase file uploads

### Integration Testing
- `GET /api/test-contentful` - Contentful integration test
- `GET /api/test-monday` - Monday.com integration test
- `GET /api/test-supabase` - Supabase connection test

## 🗄️ Data Management

### Contentful CMS
- **Job Postings**: Career opportunities and requirements
- **Case Studies**: Success stories and testimonials
- **Blog Posts**: Industry insights and updates
- **Rich Text**: Formatted content with embedded media

### Supabase Database
- **User Management**: Authentication and profiles
- **File Storage**: Document and image storage
- **Form Submissions**: Contact and application data
- **Real-time Updates**: Live data synchronization

### Monday.com Integration
- **Project Tracking**: Development and deployment tracking
- **Task Management**: Team collaboration and workflows
- **Automation**: Workflow automation and notifications

## 🚀 Performance Optimization

### Next.js Optimizations
- **App Router**: Latest Next.js routing system
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered static pages

### Frontend Performance
- **Lazy Loading**: Component and image lazy loading
- **Bundle Analysis**: Optimized bundle sizes
- **Tree Shaking**: Unused code elimination
- **Minification**: Compressed production builds

### SEO & Accessibility
- **Meta Tags**: Dynamic meta tag generation
- **Structured Data**: JSON-LD schema markup
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals optimization

## 🧪 Testing & Quality

### Code Quality
- **TypeScript**: Static type checking
- **ESLint**: Code style and quality enforcement
- **Prettier**: Code formatting (if configured)
- **Husky**: Git hooks for quality checks

### Testing Strategy
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: User journey testing
- **Performance Tests**: Lighthouse and Core Web Vitals

## 🔒 Security

### Authentication & Authorization
- **Supabase Auth**: Secure user authentication
- **Role-based Access**: Admin and user permissions
- **API Security**: Rate limiting and validation
- **Data Encryption**: Encrypted data transmission

### Data Protection
- **HIPAA Compliance**: Healthcare data security
- **GDPR Compliance**: European data protection
- **Input Validation**: XSS and injection prevention
- **HTTPS Only**: Secure communication protocols

## 📊 Monitoring & Analytics

### Performance Monitoring
- **Vercel Analytics**: Built-in performance tracking
- **Core Web Vitals**: User experience metrics
- **Error Tracking**: Application error monitoring
- **Uptime Monitoring**: Service availability tracking

### User Analytics
- **Page Views**: Traffic and engagement metrics
- **User Behavior**: Navigation and interaction patterns
- **Conversion Tracking**: Form submissions and goals
- **A/B Testing**: Performance optimization testing

## 🚀 Deployment & DevOps

### Vercel Deployment
- **Automatic Deployments**: Git-based deployment triggers
- **Preview Deployments**: Pull request previews
- **Production Deployments**: Main branch deployments
- **Environment Management**: Staging and production configs

### CI/CD Pipeline
- **Build Automation**: Automatic build on push
- **Testing Integration**: Automated test execution
- **Quality Gates**: Build success requirements
- **Rollback Capability**: Quick deployment rollbacks

### Environment Management
- **Development**: Local development environment
- **Staging**: Pre-production testing environment
- **Production**: Live production environment
- **Environment Variables**: Secure configuration management

## 📚 Documentation & Resources

### Project Documentation
- **API Documentation**: Endpoint specifications
- **Component Library**: UI component documentation
- **Design System**: Color, typography, and spacing guides
- **Architecture**: System design and data flow

### External Resources
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **React Docs**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Radix UI**: [radix-ui.com](https://radix-ui.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)

### Healthcare Resources
- **HIPAA Guidelines**: Healthcare data security standards
- **Healthcare APIs**: Industry-standard integrations
- **Compliance Tools**: Regulatory compliance resources

## 🤝 Contributing

### Development Workflow
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow coding standards and guidelines
4. **Test thoroughly**: Ensure all tests pass
5. **Submit a pull request**: Include detailed description of changes

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Follow project linting rules
- **Prettier**: Consistent code formatting
- **Commit Messages**: Conventional commit format

### Review Process
- **Code Review**: All changes require review
- **Testing**: Automated and manual testing
- **Documentation**: Update relevant documentation
- **Deployment**: Staging deployment before production

## 📄 License

This project is proprietary software owned by Longitude Rx. All rights reserved.

## 🆘 Support & Contact

### Technical Support
- **GitHub Issues**: Report bugs and feature requests
- **Documentation**: Comprehensive project documentation
- **Team Chat**: Internal development team communication

### Business Inquiries
- **Website**: [longituderx.org](https://longituderx.org)
- **Email**: Contact through website contact forms
- **Phone**: Available through business contact channels

### Emergency Contacts
- **Critical Issues**: Immediate escalation procedures
- **Security Issues**: Secure reporting channels
- **Production Issues**: 24/7 support team contacts

---

## 🎯 Quick Reference

### Essential Commands
```bash
# Development
npm run dev                    # Start dev server
pnpm dev                      # Start dev server (pnpm)

# Build & Deploy
npm run build                 # Build for production
npx vercel --prod --yes      # Deploy to production

# Code Quality
npm run lint                  # Run linting
npm run type-check           # TypeScript checking
```

### Key Files
- `app/page.tsx` - Homepage
- `components/` - Reusable components
- `lib/` - Utility functions and clients
- `tailwind.config.ts` - Design system configuration
- `next.config.mjs` - Next.js configuration

### Environment Variables
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Deployment URL
- **Production**: [your-vercel-domain.vercel.app](https://your-vercel-domain.vercel.app)
- **Staging**: [your-vercel-domain-git-staging-branch.vercel.app](https://your-vercel-domain-git-staging-branch.vercel.app)

---

**Built with ❤️ by the Longitude Rx team for the future of healthcare technology.**
