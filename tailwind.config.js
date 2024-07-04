/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "offer-banner":
          "linear-gradient(to right, #020043, rgba(2, 0, 67, 0.30)), url('./src/assets/offerBanner.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
