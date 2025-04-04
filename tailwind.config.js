/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Big Shoulders Stencil", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        hand_writing: ["Edu AU VIC WA NT Arrows", "cursive"],
        merienda:["Merienda", "cursive"]
      },
  },
},
plugins: [require("daisyui")],
}

