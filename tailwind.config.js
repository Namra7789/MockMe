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
        // Primary set
        primary: {
          100: "#A1C4FD",
          200: "#4F8EF7",
        },

        // Success set
        success: {
          100: "#28C76F",
          200: "#20A85A",
        },

        // Destructive (error) set
        destructive: {
          100: "#EA5455",
          200: "#D13438",
        },

        // Dark colors (used heavily in your UI)
        dark: {
          100: "#0D0D0D",
          200: "#1A1A1A",
        },

        // Light colors
        light: {
          100: "#F5F5F5",
        },

        input: "#2E2E2E", // border-input in your CSS
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
  ],
};
