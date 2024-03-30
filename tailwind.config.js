/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

import tailwindcss_inner_border from "tailwindcss-inner-border";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ultraXl: "2400px",
      },
      boxShadow: {
        'card-news': '0 0 20px 0 #3A5199',
      },
      colors: {
        "base-gray": "#D5D6D2",
        "base-zinc": "#3A5199",
      },
      fontFamily: {
        thin: ["gteestiThin"],
        ultraBold: ["gteestiUltraBold"],
        bold: ["gteestiBold"],
        light: ["gteestiLight"],
        medium: ["gteestiMedium"],
        regular: ["gteestiRegular"],
      },
      backgroundImage: {
        radialGrad:
          "radial-gradient(closest-side, rgba(255, 255, 255, 0.09) 2.5947827845811844%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [ tailwindcss_inner_border,],
});
