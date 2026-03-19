# Nativewind v5 Theme Toggle

A minimal example of light/dark theme switching with [Nativewind v5](https://www.nativewind.dev/v5) and Tailwind CSS v4.

https://github.com/user-attachments/assets/placeholder.mp4

## How it works

Nativewind v5 uses `prefers-color-scheme` media queries under the hood. Toggle the theme by calling `Appearance.setColorScheme()` from React Native, and all `dark:` variants and theme colors update automatically.

No custom ThemeProvider or context needed.

### Theme colors

Semantic colors are defined in `global.css` using CSS custom properties with light and dark variants:

```css
@theme {
  --color-primary: #3b82f6;
  --color-background: #ffffff;
  /* ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #60a5fa;
    --color-background: #111827;
    /* ... */
  }
}
```

Use them in your components as regular Tailwind classes: `bg-primary`, `text-foreground`, `bg-background`, etc.

### Toggling the theme

```tsx
import { Appearance } from "react-native";

// Toggle
Appearance.setColorScheme(
  Appearance.getColorScheme() === "dark" ? "light" : "dark"
);

// Set explicitly
Appearance.setColorScheme("dark");
Appearance.setColorScheme("light");
```

### Reading the current theme

```tsx
import { useColorScheme } from "react-native";

function MyComponent() {
  const colorScheme = useColorScheme(); // "light" | "dark"
}
```

## Getting started

```bash
npx rn-new@next --nativewind
```

Or clone this repo:

```bash
git clone https://github.com/nativewind/theme-toggle-v5.git
cd theme-toggle-v5
npm install
npx expo start
```

## Stack

- Expo SDK 53
- Nativewind v5 (preview)
- Tailwind CSS v4
- react-native-css
- react-native-reanimated

## Key differences from v4

| v4 | v5 |
|----|-----|
| `tailwind.config.js` with `nativewind/preset` | `postcss.config.mjs` with `@tailwindcss/postcss` |
| Custom `ThemeProvider` wrapping nativewind's `colorScheme.set()` | `Appearance.setColorScheme()` directly |
| `useColorScheme()` from `nativewind` | `useColorScheme()` from `react-native` |
| CSS variables in `:root` / `.dark` classes | CSS variables in `@theme` / `@media (prefers-color-scheme: dark)` |
| Tailwind CSS v3 | Tailwind CSS v4 |
