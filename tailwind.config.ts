import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcnPresets";
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [shadcnPreset],
} satisfies Config;

export default config;
