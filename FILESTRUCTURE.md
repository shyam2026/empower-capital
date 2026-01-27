# 📂 COMPLETE FILE STRUCTURE GUIDE

## Visual Directory Tree

```
empower-capital/                     ← Your main project folder
│
├── 📁 app/                          ← All your website pages live here
│   │
│   ├── 📁 about/                    ← About Us page folder
│   │   ├── 📄 page.tsx              ← About page content (React/TypeScript)
│   │   └── 🎨 about.module.css      ← About page specific styles
│   │
│   ├── 📁 contact/                  ← Contact page folder
│   │   ├── 📄 page.tsx              ← Contact form & info (React/TypeScript)
│   │   └── 🎨 contact.module.css    ← Contact page specific styles
│   │
│   ├── 📁 home/                     ← Home redirect folder
│   │   └── 📄 page.tsx              ← Redirects /home to / (root)
│   │
│   ├── 📁 privacy/                  ← Privacy Policy folder
│   │   ├── 📄 page.tsx              ← Privacy policy content
│   │   └── 🎨 legal.module.css      ← Legal pages styles (shared)
│   │
│   ├── 📁 services/                 ← Services page folder
│   │   ├── 📄 page.tsx              ← All services detailed
│   │   └── 🎨 services.module.css   ← Services page specific styles
│   │
│   ├── 📁 terms/                    ← Terms & Conditions folder
│   │   ├── 📄 page.tsx              ← Terms & conditions content
│   │   └── 🎨 legal.module.css      ← Legal pages styles (shared)
│   │
│   ├── 🎨 globals.css               ← MAIN STYLES FILE
│   │                                   • Colors, fonts, animations
│   │                                   • Change colors here!
│   │
│   ├── 📄 layout.tsx                ← MAIN LAYOUT FILE
│   │                                   • Includes Header on all pages
│   │                                   • Includes Footer on all pages
│   │                                   • Wraps all pages
│   │
│   ├── 📄 page.tsx                  ← HOMEPAGE CONTENT
│   │                                   • Hero section
│   │                                   • Services overview
│   │                                   • Statistics
│   │                                   • Why choose us
│   │
│   └── 🎨 page.module.css           ← Homepage specific styles
│
├── 📁 components/                   ← Reusable website components
│   │
│   ├── 📄 Header.tsx                ← NAVIGATION BAR
│   │                                   • Logo
│   │                                   • Menu links (Home, About, etc.)
│   │                                   • Mobile menu
│   │
│   ├── 🎨 Header.module.css         ← Header styles
│   │
│   ├── 📄 Footer.tsx                ← FOOTER SECTION
│   │                                   • Company info
│   │                                   • Quick links
│   │                                   • Contact details
│   │                                   • Copyright
│   │
│   └── 🎨 Footer.module.css         ← Footer styles
│
├── 📁 public/                       ← Static files (images, fonts, etc.)
│   │
│   └── 🖼️ LOGO.png                  ← YOUR COMPANY LOGO
│                                       ⚠️ PUT YOUR LOGO HERE!
│
├── 📄 package.json                  ← Project dependencies & scripts
│                                       • Lists all packages needed
│                                       • npm install reads this
│
├── 📄 tsconfig.json                 ← TypeScript configuration
│                                       • Don't need to edit this
│
├── 📄 next.config.js                ← Next.js configuration
│                                       • Image domains
│                                       • Build settings
│
├── 📄 README.md                     ← FULL DOCUMENTATION
│                                       • Complete guide
│                                       • Customization tips
│                                       • Troubleshooting
│
├── 📄 QUICKSTART.md                 ← THIS FILE
│                                       • Quick setup guide
│                                       • Step-by-step instructions
│
└── 📄 FILESTRUCTURE.md              ← File structure reference
                                        • Directory explanation
                                        • What each file does

```

## 🗺️ Page Routes Explained

Your website will have these URLs:

| URL | File Location | Page |
|-----|--------------|------|
| `/` | `app/page.tsx` | Homepage |
| `/home` | `app/home/page.tsx` | Redirects to `/` |
| `/about` | `app/about/page.tsx` | About Us |
| `/services` | `app/services/page.tsx` | Services |
| `/contact` | `app/contact/page.tsx` | Contact Us |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy |
| `/terms` | `app/terms/page.tsx` | Terms & Conditions |

## 📝 File Types Explained

### `.tsx` files (TypeScript + JSX)
- These contain your page content and logic
- Mix of TypeScript and HTML-like JSX
- Example: `page.tsx`, `Header.tsx`

### `.css` files (Stylesheets)
- These make your website look beautiful
- Colors, spacing, animations
- Two types:
  - `globals.css` - affects entire website
  - `.module.css` - affects specific component/page only

### `.json` files (Configuration)
- `package.json` - lists all packages your project needs
- `tsconfig.json` - TypeScript settings

### `.js` files (JavaScript)
- `next.config.js` - Next.js framework settings

### `.md` files (Documentation)
- Markdown files for documentation
- You're reading one right now!

## 🎯 Which Files to Edit?

### To Change Colors:
```
📁 app/
   └── 🎨 globals.css       ← Edit lines 11-17
```

### To Update Homepage:
```
📁 app/
   └── 📄 page.tsx          ← Edit the content here
```

### To Modify Header/Footer:
```
📁 components/
   ├── 📄 Header.tsx        ← Edit navigation
   └── 📄 Footer.tsx        ← Edit footer content
```

### To Update Contact Info:
```
📁 components/
   └── 📄 Footer.tsx        ← Lines 45-65

📁 app/contact/
   └── 📄 page.tsx          ← Contact page details
```

### To Change Services:
```
📁 app/services/
   └── 📄 page.tsx          ← All service descriptions
```

### To Edit About Page:
```
📁 app/about/
   └── 📄 page.tsx          ← Company story, team info
```

## 🚫 Files You DON'T Need to Touch

These work automatically:
- ✅ `tsconfig.json` - TypeScript is already configured
- ✅ `next.config.js` - Next.js is already configured
- ✅ Any `.module.css` files - unless changing specific component styles

## 📦 After Running `npm install`

You'll also see these folders (auto-generated, ignore them):

```
├── 📁 node_modules/         ← All installed packages (HUGE folder)
│                              • Never edit this
│                              • Don't upload to Git
│
├── 📁 .next/                ← Build output folder
│                              • Auto-generated
│                              • Gets recreated on each build
│
└── 📄 package-lock.json     ← Locks package versions
                               • Auto-generated
                               • Ensures everyone gets same packages
```

## 💡 Pro Tips

1. **Backup Before Editing**: Copy files before making major changes
2. **Edit One File at a Time**: Easier to track what changed
3. **Use VS Code Search**: Press `Ctrl + Shift + F` to find text across all files
4. **Save Often**: Press `Ctrl + S` frequently
5. **Check Browser**: Changes appear automatically when you save

## 🎨 Customization Priority

### Start Here (Easiest):
1. Colors: `app/globals.css`
2. Contact info: `components/Footer.tsx`
3. Homepage text: `app/page.tsx`

### Then Move To (Medium):
4. About page: `app/about/page.tsx`
5. Services: `app/services/page.tsx`
6. Images: Replace Unsplash URLs with your own

### Finally (Advanced):
7. Custom styling: Various `.module.css` files
8. New pages: Create new folders in `app/`
9. Add features: Modify component files

## ❓ Quick Reference

**Q: Where do I put my logo?**
A: `public/LOGO.png`

**Q: How do I change the main color?**
A: `app/globals.css` line 11-12

**Q: Where is the contact form?**
A: `app/contact/page.tsx`

**Q: How do I edit the menu?**
A: `components/Header.tsx`

**Q: Where are page styles?**
A: Each page folder has a `.module.css` file

**Q: How do I add a new page?**
A: Create new folder in `app/` with `page.tsx` file

## 🎯 Your Action Plan

1. ✅ Understand this file structure
2. ✅ Run `npm install` to get all packages
3. ✅ Add your logo to `public/`
4. ✅ Run `npm run dev` to start
5. ✅ Open `app/globals.css` and change colors
6. ✅ Edit `components/Footer.tsx` for contact info
7. ✅ Customize content in each page file
8. ✅ Test everything works
9. ✅ Deploy to internet!

---

**Remember**: Each folder in `app/` becomes a page on your website!

- `app/about/page.tsx` → `yoursite.com/about`
- `app/services/page.tsx` → `yoursite.com/services`
- `app/contact/page.tsx` → `yoursite.com/contact`

**Good luck! 🚀**
