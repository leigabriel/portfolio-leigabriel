// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // move half width (since we duplicated text)
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite", // adjust duration for speed
      },
    }
  },
  plugins: [],
}
