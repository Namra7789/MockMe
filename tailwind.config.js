/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // because you use <html class="dark">
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        mona: "var(--font-mona-sans)", // allows usage via className="font-mona"
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        // Custom colors added from your CSS variables
        success100: "var(--success-100)",
        success200: "var(--success-200)",
        destructive100: "var(--destructive-100)",
        destructive200: "var(--destructive-200)",
        primary100: "var(--primary-100)",
        primary200: "var(--primary-200)",
        light100: "var(--light-100)",
        light400: "var(--light-400)",
        light600: "var(--light-600)",
        light800: "var(--light-800)",
        dark100: "var(--dark-100)",
        dark200: "var(--dark-200)",
        dark300: "var(--dark-300)",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
  ],
};
