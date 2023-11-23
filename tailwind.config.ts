import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fffefe",
      bgWhite: "#e9e8e9",
      whiteblue: "#EDF3F8",
      purple: "#8a5bf8",
      blue: "#007BFF",
      skyblue: "#28abe0",
      vibrantBlue: "#0185ff",
      darkblue: "#4222fd",
      teal: "#10b1ad",
      yellow: "#f6dc01",
      lightpink: "#ff6ade",
      gray: "#afafac",
      darkgray: "#595858",
      black: "#161713",
    },
    extend: {
      boxShadow: {
        custom: "0 40px 80px rgba(0, 0, 0, .1)",
      },
      backgroundImage: {
        "hero-pattern": "url('./background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
