// tailwind.config.mjs
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Ensure Flowbite is properly included
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/public/assets/images/homebg.jpg')", // Ensure the image path is correct
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Make sure Flowbite is installed and configured correctly
  ],
};
