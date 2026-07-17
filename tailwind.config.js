/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#FAF7F2",
        linen: "#F0E9DE",
        sand: "#D8C9B4",
        espresso: "#1C1815",
        "ink-70": "rgba(28,24,21,0.7)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        label: "0.2em",
        labelTight: "0.15em",
      },
      maxWidth: {
        measure: "60ch",
      },
    },
  },
  plugins: [],
};
