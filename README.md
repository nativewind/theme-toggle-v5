# Nativewind v5 Theme Toggle

A minimal example of light/dark theme switching with [Nativewind v5](https://www.nativewind.dev/v5) and Tailwind CSS v4.

## How it works

Nativewind v5 uses `prefers-color-scheme` media queries under the hood. Toggle the theme by calling `Appearance.setColorScheme()` from React Native, and all `dark:` variants update automatically.

No custom ThemeProvider or context needed.

### Dark mode styles

Use Tailwind's `dark:` variant for dark mode styles:

```tsx
<View className="bg-white dark:bg-gray-900">
  <Text className="text-gray-900 dark:text-white">
    Adapts to system theme
  </Text>
</View>
```

### Safe area insets

Use `pt-safe` and `pb-safe` utilities from `nativewind/theme` instead of `SafeAreaView`:

```tsx
<View className="flex-1 pt-safe pb-safe bg-white dark:bg-gray-900">
  {/* content */}
</View>
```

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
npx expo run:ios
```

## Stack

- Expo SDK 55
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
| CSS variables in `:root` / `.dark` classes | Standard Tailwind `dark:` variants |
| Tailwind CSS v3 | Tailwind CSS v4 |
