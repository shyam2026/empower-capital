# Empower Capital - Startup Growth Partner Website

A modern, professional website for Empower Capital built with Next.js 14, React, and TypeScript.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Contact Form**: Interactive enquiry form with validation
- **Multiple Pages**: Home, About, Services, Contact, Privacy Policy, Terms & Conditions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

### Step 1: Navigate to Your Project Directory

Open VS Code and navigate to your project directory:
```bash
cd empower-capital
```

### Step 2: Install Dependencies

Run the following command to install all required packages:
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- All other dependencies

### Step 3: Add Your Logo

1. Copy your `LOGO.png` file
2. Paste it into the `public` folder in your project
3. The logo will be automatically used throughout the website

## 📁 Project Structure

```
empower-capital/
├── app/
│   ├── about/
│   │   ├── page.tsx          # About page
│   │   └── about.module.css  # About page styles
│   ├── contact/
│   │   ├── page.tsx          # Contact page with form
│   │   └── contact.module.css
│   ├── home/
│   │   └── page.tsx          # Redirects /home to /
│   ├── privacy/
│   │   ├── page.tsx          # Privacy policy
│   │   └── legal.module.css
│   ├── services/
│   │   ├── page.tsx          # Services page
│   │   └── services.module.css
│   ├── terms/
│   │   ├── page.tsx          # Terms & conditions
│   │   └── legal.module.css
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with header/footer
│   ├── page.tsx              # Home page
│   └── page.module.css       # Home page styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Header.module.css
│   ├── Footer.tsx            # Footer with links
│   └── Footer.module.css
├── public/
│   └── LOGO.png              # Your company logo
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization Guide

### 1. Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #0d5c63;        /* Main teal color */
  --primary-light: #0f7580;  /* Lighter teal */
  --primary-dark: #083d42;   /* Darker teal */
  --accent: #ff6b35;         /* Orange accent */
  /* Change these values to match your brand */
}
```

### 2. Company Information

Update contact information in:
- `components/Footer.tsx` - Footer contact details
- `app/contact/page.tsx` - Contact page information

### 3. Content

Each page content can be edited in their respective files:
- Home: `app/page.tsx`
- About: `app/about/page.tsx`
- Services: `app/services/page.tsx`
- Contact: `app/contact/page.tsx`

### 4. Images

Replace placeholder images with your own:
- Current images use Unsplash URLs
- Replace URLs in the respective page files with your image paths
- Store images in the `public` folder

## 🚀 Running the Website

### Development Mode

To run the website in development mode with hot reload:

```bash
npm run dev
```

Then open your browser and go to:
```
http://localhost:3000
```

### Production Build

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## 📄 Page Routes

The website includes the following routes:

- `/` or `/home` - Home page (both redirect to same page)
- `/about` - About Us page
- `/services` - Services page
- `/contact` - Contact Us page
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions

## 🎯 Key Features Explained

### Header
- Fixed navigation that stays visible when scrolling
- Mobile-responsive hamburger menu
- Active link highlighting
- Company logo and tagline

### Home Page
- Hero section with call-to-action buttons
- Statistics showcase
- Services overview with 6 detailed service cards
- "Why Choose Us" section
- Final call-to-action

### Services Page
- Detailed breakdown of all services:
  - Company Registration
  - GST Registration
  - Trademark Registration
  - Incubation Support
  - Funding Support
- Pricing packages (Starter, Growth, Enterprise)
- Features and benefits for each service

### Contact Page
- Contact information cards:
  - Address
  - Email
  - Phone
  - Response time
- Interactive enquiry form with:
  - Name, email, phone validation
  - Service selection dropdown
  - Message textarea
  - Success notification on submission
- Embedded Google Maps

### Footer
- Company information
- Quick links to all pages
- Contact details with icons
- Copyright notice
- Privacy Policy and Terms links

## 🔧 Troubleshooting

### Issue: Website won't start
**Solution**: Make sure all dependencies are installed:
```bash
npm install
```

### Issue: Styles not loading
**Solution**: Clear Next.js cache and rebuild:
```bash
rm -rf .next
npm run dev
```

### Issue: Images not showing
**Solution**: Make sure images are in the `public` folder and paths are correct

### Issue: Port 3000 already in use
**Solution**: Use a different port:
```bash
npm run dev -- -p 3001
```

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🎨 Design Highlights

- **Color Scheme**: Professional teal and orange palette
- **Typography**: Poppins for body text, Playfair Display for headings
- **Animations**: Smooth fade-in and slide animations
- **Cards**: Hover effects with elevation
- **Buttons**: Gradient backgrounds with shadow effects
- **Forms**: Clean design with focus states

## 📝 Making Your First Changes

1. **Change the tagline**: Edit `components/Header.tsx` and `components/Footer.tsx`

2. **Update services**: Edit the services array in `app/services/page.tsx`

3. **Modify contact details**: Update in `components/Footer.tsx` and `app/contact/page.tsx`

4. **Add new pages**: Create a new folder in `app/` with a `page.tsx` file

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 📞 Support

If you need help with the website:
- Check the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- React documentation: [react.dev](https://react.dev)

## 📄 License

This project is proprietary and confidential.

## 🎉 You're All Set!

Your Empower Capital website is ready to go! Run `npm run dev` and start building your startup empire! 🚀
