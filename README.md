# Vincitore Aqua Dimore Landing Page

Standalone landing page for Vincitore Aqua Dimore at Dubai Science Park.

## Deployment to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server
```

## Editing Content

All content is in `index.html`. Main sections:
- Hero section (lines ~400-650)  
- About section (lines ~650-900)
- Gallery (lines ~900-1200)
- Floor plans (lines ~1200-1600)
- Apartments (lines ~1600-2500)
- Infrastructure (lines ~2500-3500)
- Decorations (lines ~3500-4000)
- Footer (lines ~5500-6000)

## Assets

- **CSS**: `/css/build/complex/styles.css`
- **JavaScript**: `/js/build/complex/footer.js`
- **Images**: `/storage/uploads/` and `/images/`
- **Fonts**: `/fonts/`

## Forms

Forms are currently set up with basic HTML. To enable form submissions on Vercel:

### Option 1: Vercel Forms (Free tier: 100 submissions/month)
Add to form tag:
```html
<form data-static-form-name="contact">
```

### Option 2: Formspree (Free tier: 50 submissions/month)
Change form action to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## License

Proprietary - All rights reserved
