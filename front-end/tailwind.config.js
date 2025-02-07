/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sd: "485px",
        xlg: "1300px",
      },
      spacing: {
        "gap-1": "28rem",
      },
      colors: {
        "custom-gray": "#2A3132",
        "custom-green": "#6AB187",
        "custom-black": "#272A2B",
      },
      rounded: {
        51: "51px",
      },
      borderColor: {
        "custom-green": "#6AB187",
      },
      height: {
        506: "506px",
        447: "447px",
      },
      width: {
        263: "263px",
        1280: "1280px",
      },
      objectFit: {
        cover: "cover",
      },
      rotate: {
        "-45": "-45deg",
      },
    },
  },
  plugins: [],
};
