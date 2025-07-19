import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          // Primary: blue-700 (matching "expertise" category)
          primary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            DEFAULT: "#1d4ed8",
            foreground: "#ffffff",
          },
          // Secondary: blue-600 (matching "technology" category)
          secondary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            DEFAULT: "#2563eb",
            foreground: "#ffffff",
          },
          // Success: green-700 (matching "business" category)
          success: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            DEFAULT: "#15803d",
            foreground: "#ffffff",
          },
          // Warning: green-600 (matching "academic" category)
          warning: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            DEFAULT: "#16a34a",
            foreground: "#ffffff",
          },
          focus: "#1d4ed8",
        },
      },
      dark: {
        colors: {
          // Primary: blue-700 (matching "expertise" category) - inverted for dark mode
          primary: {
            50: "#1e3a8a",
            100: "#1e40af",
            200: "#1d4ed8",
            300: "#2563eb",
            400: "#3b82f6",
            500: "#60a5fa",
            600: "#93c5fd",
            700: "#bfdbfe",
            800: "#dbeafe",
            900: "#eff6ff",
            DEFAULT: "#60a5fa",
            foreground: "#ffffff",
          },
          // Secondary: blue-600 (matching "technology" category) - inverted for dark mode
          secondary: {
            50: "#1e3a8a",
            100: "#1e40af",
            200: "#1d4ed8",
            300: "#2563eb",
            400: "#3b82f6",
            500: "#60a5fa",
            600: "#93c5fd",
            700: "#bfdbfe",
            800: "#dbeafe",
            900: "#eff6ff",
            DEFAULT: "#93c5fd",
            foreground: "#000000",
          },
          // Success: green-700 (matching "business" category) - inverted for dark mode
          success: {
            50: "#14532d",
            100: "#166534",
            200: "#15803d",
            300: "#16a34a",
            400: "#22c55e",
            500: "#4ade80",
            600: "#86efac",
            700: "#bbf7d0",
            800: "#dcfce7",
            900: "#f0fdf4",
            DEFAULT: "#4ade80",
            foreground: "#000000",
          },
          // Warning: green-600 (matching "academic" category) - inverted for dark mode
          warning: {
            50: "#14532d",
            100: "#166534",
            200: "#15803d",
            300: "#16a34a",
            400: "#22c55e",
            500: "#4ade80",
            600: "#86efac",
            700: "#bbf7d0",
            800: "#dcfce7",
            900: "#f0fdf4",
            DEFAULT: "#86efac",
            foreground: "#000000",
          },
          focus: "#60a5fa",
        },
      },
    },
  })],
}
