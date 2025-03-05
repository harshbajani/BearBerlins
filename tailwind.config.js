export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        "bears-brown-dark": "#7E3F0F",
        "bears-brown-medium": "#B66613",
        "bears-yellow": "#E5E3D12024",
        "bears-brown-light": "#806557",
        "bears-green-neon": "#D0FC2D",
        "bears-white": "#FFFFFF",
        "bears-black": "#252525",

        // Additional Colors from Gradient Palette
        "bears-gray-light": "#C7C5B1",
        "bears-gray-medium": "#BFC1BA",
        "bears-gray-dark": "#728085",
        "bears-olive": "#2F3A37",
        "bears-deep-brown": "#2E241A",
        "bears-muted-green": "#BED0BA",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
        palatino: ["Palatino", "serif"],
      },
      backgroundImage: {
        "scroll-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
      },
      animation: {
        "scroll-line": "scrollLine 5s linear infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        scrollLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
