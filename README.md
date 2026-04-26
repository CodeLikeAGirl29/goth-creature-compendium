# 🦇 **Gothic Creature Compendium**

*A dark aesthetic search experience for discovering winged, fanged, and beautifully haunting creatures.*

![screenshot](https://res.cloudinary.com/dhw9dl4gm/image/upload/v1777214169/Gothic-Creature-Compendium-04-26-2026_09_33_AM_jcbptb.png)

> view project [here](https://goth-creature-compendium.vercel.app/)

---

## 🖤 Overview

**Gothic Creature Compendium** is a stylized image-search application built with **Next.js**, **Tailwind CSS**, and the **Unsplash API**. Users can explore a curated gallery of gothic-themed creatures, filter them by vibe, and enjoy a fully immersive dark UI enhanced with animated sparkles, fairy-dust cursor trails, and gothic loading effects.

This project demonstrates modern frontend development techniques, API integration, animation, theming, and polished UI/UX design — perfect for showing off full-stack frontend capability.

---

## ✨ Features

### 🩸 **Dynamic Creature Search**

* Search by keyword (e.g., “bat”, “wolf”, “ravens”, “gothic cat”)
* Fetches high-quality images from the **Unsplash API**

### 🌑 **Vibe Filtering**

Choose from:

* cute
* spooky
* demonic
* ethereal
* vampire
* all creatures

Each vibe adjusts the API query to return matching gothic aesthetics.

### 🕸 **Custom Gothic UI**

* Gothic color palette using CSS variables
* Dark textured backgrounds
* Subtle shadows and glow effects

### ✨ **Magical Animations**

* **Animated sparkles** behind the header
* **Fairy dust cursor trails** that follow the mouse
* **Cursed “summoning sigil” loader** for fetching results
* Smooth hover animations on creature cards

### 🦇 **Responsive Grid Layout**

* Clean card-based gallery
* Auto-adjusts for mobile, tablet, and desktop

### 🕷 **Footer with Webs & Bloodline**

* Minimal copyright
* Decorative spiderweb SVGs
* Gothic bloodline divider

---

## 🛠️ Tech Stack

### **Frontend**

* **Next.js 14+** (App Router)
* **React**
* **Tailwind CSS**
* **TypeScript**

### **APIs**

* **Unsplash Image API** (search + attribution)

### **Styling Enhancements**

* CSS variables for theme control
* SVG decorations (spiderwebs)
* Pure CSS animations

---

## 📁 Project Structure

```
app/
  api/
    creatures/
      route.ts        # Unsplash API proxy + vibe search logic
  layout.tsx          # Global layout + gothic header, sparkles, fairy dust
  page.tsx            # Main page with search + grid
  globals.css         # Tailwind + gothic theme styles

components/
  CreatureCard.tsx
  CreatureGrid.tsx
  CreatureSearch.tsx
  VibeFilter.tsx

  GothSparkles.tsx     # animated sparkles behind header
  FairyDustLayer.tsx   # cursor-trailing fairy dust particles
  GothLoader.tsx       # gothic "summoning" loading animation

  Footer.tsx           # footer with web + bloodline
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```
UNSPLASH_ACCESS_KEY=your_key_here
```

Get your key at:
[https://unsplash.com/developers](https://unsplash.com/developers)

---

## 🚀 Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🧛 Future Enhancements

Planned or possible improvements:

* AI-generated lore for each creature
* Dedicated creature detail pages
* Infinite scroll / pagination
* Save-to-favorites (localStorage)
* Theme variations (Blood Moon, Eclipse, Midnight Velvet)

---

## 🖤 Credits

* Images provided by **Unsplash**
* Built with **Next.js**, **React**, and **Tailwind CSS**
* Designed and developed by **Lindsey Howard**

