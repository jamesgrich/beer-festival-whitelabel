# Beer Festival White-Label App

A fully white-label beer festival platform with a public attendee app, staff back-office portal, and live TV display board — all driven from a single Firebase backend and configurable per-festival with no code changes.

## Live URLs

| App | URL | Audience |
|-----|-----|----------|
| Attendee App | `/index.html` | Festival-goers (mobile) |
| Staff Portal | `/admin.html` | Admin & vendor staff |
| TV Display | `/display.html` | Wall screen / projector |
| Setup Guide | `/setup.html` | Deployer reference |

## Stack

- **Vanilla HTML / CSS / JS** — zero build step, deployable anywhere static
- **Firebase Firestore** — real-time database (stock updates propagate instantly across all three apps)
- **Firebase Authentication** — email/password, role-based access
- **Claude API (Anthropic)** — AI-powered beer list extraction from photos/images
- **Google Fonts** — Inter + Bebas Neue

## Features

### Attendee App (`index.html`)
- Themed from Firestore — festival name, logo and colour scheme applied automatically
- Browse all beers with search and brewery filter chips
- Real-time stock badges: 🟢 Available · 🟡 Low Stock · 🔴 Sold Out
- Save a personal tasting list and mark beers as tried (localStorage)
- Mobile-first PWA — no app download required

### Staff Portal (`admin.html`)
- **Admin role** — full access: configure festival look & feel, import beers, manage vendors, edit all beers
- **Vendor role** — restricted access: only sees their assigned brewery's beers, stock status dropdown only
- Import beers three ways: CSV upload, image/photo (Claude AI extraction), or paste text
- Live colour pickers with instant preview before saving
- Logo upload, festival name and tagline

### TV Display (`display.html`)
- Large-format grid designed for TVs and projectors
- Beers sorted: available first, low stock second, sold out (dimmed/struck through) last
- Real-time stats bar: available / low stock / sold out counts + live clock
- Auto-scrolls slowly through long lists, pauses on hover
- Brewery filter chips for multi-stage festivals
- Double-click to enter fullscreen

## User Roles

| Permission | Admin | Vendor |
|-----------|-------|--------|
| Configure festival name, colours, logo | ✓ | ✗ |
| Import beers (CSV / Image / Paste) | ✓ | ✗ |
| Add, edit, delete any beer | ✓ | ✗ |
| Create and manage vendor accounts | ✓ | ✗ |
| Update stock status — all beers | ✓ | ✗ |
| Update stock status — assigned brewery only | ✓ | ✓ |

## CSV Import Format

```
brewery,name,style,abv,description,tags,vendor_email
Duration,Coastal Highway,West Coast IPA,7.0,"Bright and citrusy",gf,vendor@duration.com
Burnt Mill,Rivers Edge,Hazy Pale,4.4,,vegan,
```

Supported tags: `gf` (gluten free), `vegan`, `lo` (low ABV). `vendor_email` is optional — if provided, the beer is automatically assigned to that vendor.

## Setup

See [`setup.html`](setup.html) for the full step-by-step deployment guide. Summary:

1. Create a Firebase project, enable Firestore and Email/Password Auth
2. Paste your Firebase config into `config.js`
3. Copy the Firestore security rules from the comment at the top of `admin.html` into Firebase Console → Rules
4. Create the first admin user in Firebase Auth console, then create their `/users/{uid}` doc in Firestore with `{ role: "admin" }`
5. Deploy to Netlify — drag and drop the folder

## Deployment

Any static host works. Netlify recommended for simplicity (free tier, custom domain support, instant drag-and-drop deploy).

---

Built by [James Richardson](https://jamesrichardson.dev)
