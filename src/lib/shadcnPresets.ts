import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./shadcnPlugin";
import animatePlugin from "tailwindcss-animate";
export const shadcnPreset = {
  content: [],

  darkMode: ["class"],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
