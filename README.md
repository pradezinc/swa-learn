# SWA Learn 🌍

Your personal multi-language learning academy.

**Live app:** <https://pradezinc.github.io/swa-learn/>

-----

## Files in this repo

```
swa-learn/
├── login.html        ← Sign in page
├── dashboard.html    ← Progress & stats
├── index.html        ← Main learning app
├── manifest.json     ← PWA (installable)
├── sw.js             ← Offline support
├── icon-192.png      ← App icon (add your own)
├── icon-512.png      ← App icon large
└── README.md
```

-----

## How to upload files from iPhone

### Method 1 — GitHub website (easiest on iPhone)

1. Go to **github.com/pradezinc/swa-learn**
1. Tap **“Add file”** → **“Upload files”**
1. Tap **“choose your files”**
1. Select the HTML files from Files app
1. Scroll down → tap **“Commit changes”**
1. Wait 2 minutes → your site is live!

### Method 2 — Edit files directly on GitHub

1. Go to **github.com/pradezinc/swa-learn**
1. Tap any file (e.g. login.html)
1. Tap the **pencil ✏️** icon (Edit)
1. Make changes
1. Tap **“Commit changes”**

-----

## How to install on iPhone (PWA)

1. Open Safari → go to your app URL
1. Tap the **Share** button (box with arrow)
1. Scroll down → tap **“Add to Home Screen”**
1. Tap **“Add”**
1. App icon appears on your home screen! 🎉

-----

## How to add more languages

Drop a new JSON file into the `data/` folder following this format:

```json
{
  "meta": {
    "code": "fr",
    "name": "Français",
    "nameEn": "French",
    "flag": "🇫🇷",
    "direction": "ltr",
    "levels": ["A1","A2","B1","B2"],
    "color": "#378ADD"
  },
  "vocab": [...],
  "verbs": [...],
  "chunks": [...],
  "freq": [...],
  "conv": [...]
}
```

-----

## Firebase Security (important!)

After testing, update Firestore rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

Also restrict your API key to only work from:
`https://pradezinc.github.io`

-----

## Built with

- Firebase Auth (Google sign-in)
- Firebase Firestore (progress sync)
- GitHub Pages (hosting)
- PWA (installable on iPhone)
- Vanilla HTML/CSS/JS (no frameworks)