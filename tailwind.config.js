/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "16/10": "16/10",
        "16/9": "16/9",
        "16/7": "16/7",
        "11/16": "11/16",
        "9/16": "9/16",
        "9/13": "9/13",
      },
      spacing: {
        '90vh': '90vh',
      },
      colors: {
        "softGreen": "#CDD5C6",
        "softCream": "#FBF2ED",
        "softGray1": "#B7BCBF",
        "softBrown": "#E8D4C6",
        "softYellow": "#FFE2C3",
        "softBlack1": "#3C3D40",
        "softBlack2": "#212226",
        "softBlue": "#DAE4EB",
        "softBlueDark": "#00254E",
      }
    },
  },
  plugins: [],
}

