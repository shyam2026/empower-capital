# 🚀 QUICK START GUIDE - Empower Capital Website

## What You Just Received

A complete, professional website for Empower Capital with:
- ✅ Home page with hero section and services overview
- ✅ About page with team and company story
- ✅ Services page with detailed service information
- ✅ Contact page with enquiry form
- ✅ Privacy Policy page
- ✅ Terms & Conditions page
- ✅ Responsive design (works on all devices)
- ✅ Modern animations and effects

## 📂 Where to Put These Files in VS Code

You currently see this structure in your VS Code:

```
empower-capital/
├── app/
├── components/
├── public/
└── ... (other folders)
```

**Follow these steps:**

### Option A: If you already have the `empower-capital` folder in VS Code

1. **Copy all folders** from the files I've created:
   - Copy the `app` folder → Paste into your project (replace if asked)
   - Copy the `components` folder → Paste into your project (replace if asked)
   - Copy the `public` folder → Paste into your project (create if it doesn't exist)
   - Copy `package.json`, `tsconfig.json`, `next.config.js`, `README.md` → Paste into root

2. **Add your logo**:
   - Take your `LOGO.png` file
   - Put it in the `public` folder

### Option B: Starting Fresh

1. Open VS Code
2. File → Open Folder
3. Select your `empower-capital` folder
4. Copy all the files I provided into this folder

## 💻 How to Run the Website

### Step 1: Open Terminal in VS Code
- Press `` Ctrl + ` `` (backtick) or View → Terminal

### Step 2: Install Packages
```bash
npm install
```
Wait for it to complete (might take 2-3 minutes)

### Step 3: Start the Website
```bash
npm run dev
```

### Step 4: View Your Website
- Open your browser
- Go to: `http://localhost:3000`
- 🎉 Your website is live!

## 📁 File Locations Reference

Here's exactly where each file goes in your VS Code project:

```
YOUR VS CODE PROJECT/
│
├── app/                          ← Main pages folder
│   ├── about/
│   │   ├── page.tsx             ← About page content
│   │   └── about.module.css     ← About page styles
│   │
│   ├── contact/
│   │   ├── page.tsx             ← Contact page with form
│   │   └── contact.module.css   ← Contact page styles
│   │
│   ├── home/
│   │   └── page.tsx             ← Redirects /home to homepage
│   │
│   ├── privacy/
│   │   ├── page.tsx             ← Privacy policy
│   │   └── legal.module.css     ← Legal page styles
│   │
│   ├── services/
│   │   ├── page.tsx             ← Services page
│   │   └── services.module.css  ← Services page styles
│   │
│   ├── terms/
│   │   ├── page.tsx             ← Terms & conditions
│   │   └── legal.module.css     ← Legal page styles
│   │
│   ├── globals.css              ← Global styles (colors, fonts)
│   ├── layout.tsx               ← Layout with header & footer
│   ├── page.tsx                 ← Homepage content
│   └── page.module.css          ← Homepage styles
│
├── components/                   ← Reusable components
│   ├── Header.tsx               ← Navigation bar
│   ├── Header.module.css        ← Header styles
│   ├── Footer.tsx               ← Footer
│   └── Footer.module.css        ← Footer styles
│
├── public/                       ← Static files
│   └── LOGO.png                 ← YOUR LOGO GOES HERE
│
├── package.json                  ← Project dependencies
├── tsconfig.json                 ← TypeScript config
├── next.config.js                ← Next.js config
└── README.md                     ← Full documentation

```

## 🎨 How to Customize

### 1. Change Colors
Open: `app/globals.css` (line 11-17)
```css
:root {
  --primary: #0d5c63;        /* Change this! */
  --accent: #ff6b35;         /* And this! */
}
```

### 2. Update Contact Info
Open: `components/Footer.tsx` (line 45-65)
Change:
- Address
- Email
- Phone number

### 3. Edit Services
Open: `app/services/page.tsx`
Scroll to service sections and edit text

### 4. Modify About Page
Open: `app/about/page.tsx`
Change company story, mission, team members

## ⚠️ Common Issues & Solutions

### Issue: "npm not recognized"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org)

### Issue: Port 3000 already in use
**Solution**: 
```bash
npm run dev -- -p 3001
```
Then visit: `http://localhost:3001`

### Issue: Changes not showing
**Solution**: 
1. Stop the server (Ctrl + C)
2. Run `npm run dev` again

### Issue: Styling looks broken
**Solution**: Make sure all `.css` files are in the correct folders

## 📝 Making Your First Edit

Let's change the homepage title:

1. Open `app/page.tsx` in VS Code
2. Find line ~12: `<h1 className="animate-fade-in-up">`
3. Change the text: `Empowering Your <span>...</span>`
4. Save the file (Ctrl + S)
5. See the change in your browser automatically!

## 🌐 Next Steps

1. ✅ Get the website running locally
2. ✅ Add your logo to `public/LOGO.png`
3. ✅ Update contact information
4. ✅ Customize colors to match your brand
5. ✅ Replace placeholder images with your own
6. ✅ Edit content to match your services
7. ✅ Test on mobile devices
8. ✅ Deploy to the internet (see README.md)

## 📞 Need Help?

If you get stuck:
1. Check the full README.md file
2. Search the error message on Google
3. Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

## 🎉 You're Ready!

That's it! Run `npm run dev` and start exploring your new website.

Remember:
- All pages are in the `app/` folder
- Header and Footer are in `components/`
- Your logo goes in `public/`
- Colors are in `app/globals.css`

**Happy coding! 🚀**
