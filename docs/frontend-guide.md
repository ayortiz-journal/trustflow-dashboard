# Frontend Developer Guide

## Tailwind Styling Conventions
TrustFlow is an enterprise SaaS product.
- Use the custom colors defined in `tailwind.config.js` (`trustflow-navy`, `trustflow-blue`).
- Avoid heavy gradients or rounded buttons. Stick to slight rounding (`rounded-md` or `rounded-lg`) and flat, high-contrast borders to maintain a professional B2B aesthetic.

## Adding Components
All reusable UI elements (modals, cards, navigation) must be placed in `src/components`. Pages inside `src/pages` should primarily focus on data fetching (via hooks) and layout assembly.