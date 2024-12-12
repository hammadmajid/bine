import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-body': '#fbfefb',
        'light-text-primary': '#282728',
        'light-text-secondary': '#525152',
        'light-text-tertiary': '#6f6f6f',
        'light-accent': '#1678b3',
        'light-accent-hover': '#0f5f8b',
        'light-border': '#d4d4d4',
      },
    },
  },
  plugins: [],
} satisfies Config;
