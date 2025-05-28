# SkinPlus Landing Page

## Overview

SkinPlus is a responsive landing page, built with semantic HTML5, CSS (Flexbox), and vanilla JavaScript. The page features a navigation bar, a hero section, a product carousel, and is responsive for both desktop (1024px) and mobile (375px) screens.

---

## Structure

- **HTML5 Semantic Layout:**  
  - `<header>`: Contains the logo, navigation bar, menu toggle, and icons.
  - `<main>`: Contains the hero section and products section (with carousel).
  - `<section>`: Used for logical grouping (hero, products).
  - `<nav>`: Navigation links with ARIA roles for accessibility.

- **CSS (Flexbox & Media Queries):**  
  - Flexbox is used for layout alignment in the header and carousel.
  - Media queries adjust layout and visibility for desktop and mobile.
  - Custom properties and utility classes for spacing and typography.

- **JavaScript (Carousel & Nav Toggle):**  
  - Handles navigation menu toggle for mobile.
  - Implements a basic, accessible carousel for product cards.

- **Font Awesome Icons:**  
  - Font Awesome is included via CDN for navigation and UI icons (e.g., menu, search, user, carousel arrows).
  - Icons improve visual clarity and user experience.

---

## Mobile Responsiveness

- **Approach:**  
  - Mobile-first design with breakpoints for larger screens (`min-width: 1024px`).
  - On small screens, the navigation collapses into a hamburger menu, and the logo is centered.
  - On large screens, the navigation is horizontal and overlays the hero background image.

---

## Carousel Functionality

- **How it Works:**  
  - The carousel uses a horizontal scroll container (`.carousel-track-container`) with product cards inside.
  - Left/right buttons scroll the container by one card width using `scrollBy` with smooth behavior.
  - The carousel is implemented in vanilla JavaScript for simplicity and performance.
  - No external libraries are used.

---

## Key Decisions & Trade-offs

- **No Frameworks/Libraries:**  
  - All functionality is implemented with vanilla JS and CSS for learning and simplicity.
  - No dependencies means faster load and easier customization.

- **Accessibility:**  
  - ARIA roles and labels are used for navigation and buttons.
  - Semantic HTML5 elements improve screen reader support.

- **Simplifications:**  
  - Carousel does not loop infinitely or auto-scroll (for clarity and brevity).
  - Navigation links are non-functional placeholders.

- **Responsiveness:**  
  - Focused on two main breakpoints (mobile and desktop) for clarity.
  - Further refinements can be made for tablets or intermediate sizes.

---

## Code Comments

- **HTML:**  
  - Key sections and elements are annotated for clarity.
- **CSS:**  
  - Media queries and layout decisions are commented.
- **JavaScript:**  
  - Each functional block (nav toggle, carousel) is explained inline.

---

## How to Use

1. Open `index.html` in your browser.
2. Resize the window to see responsive behavior.
3. Use the menu toggle on mobile to open/close navigation.
4. Use the carousel arrows to scroll through products.
