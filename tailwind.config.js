/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
      fontFamily: {
        primary: "MontSerrat",
      },
      keyframes: {
        transnav: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        transnavout: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "20%": { opacity: 1 },
          "90%": { opacity: 1, backgroundColor: "#071120" },
          "100%": { backgroundColor: "#0B192F" },
        },
        y: {
          "0%": { transform: "translate(-150%, 800px) rotate(180deg)" },
          "100%": { transform: "translate(0,0) rotate(0)" },
        },
        n: {
          "0%": { transform: "translateY(250%)" },
          "15%": { transform: "translateY(0)" },
          "65%": { transform: "translateY(0)" },
          "82%": { transform: "translate(100%,160%) rotate(180deg)" },
          "100%": { transform: "translate(calc(100% + 0.25rem),0) rotate(0)" },
        },
        o: {
          "0%": { transform: "translateY(-250%)" },
          "15%": { transform: "translateY(0)" },
          "65%": { transform: "translateY(0)" },
          "82%": { transform: "translate(-100%,-160%) rotate(180deg)" },
          "100%": {
            transform: "translate(calc(-100% - 0.25rem),0) rotate(-180deg)",
          },
        },
        d: {
          "0%": { transform: "translateY(-125%)" },
          "100%": { transform: "translate(0,0)" },
        },
        e: {
          "0%": { transform: "translateY(-75%)" },
          "100%": { transform: "translate(0,0)" },
        },

        nav1: {
          "0%": { transform: "translateY(-250%)" },
          "100%": { transform: "translate(0,0)" },
        },
        nav2: {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translate(0,0)" },
        },
        nav3: {
          "0%": { transform: "translateY(-150%)" },
          "100%": { transform: "translate(0,0)" },
        },
        nav4: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translate(0,0)" },
        },
        header: {
          "0%": { transform: "translateY(5%)", opacity: 0 },
          "60%": { transform: "translateY(5%)", opacity: 0 },
          "100%": { transform: "translate(0,0)", opacity: 1 },
        },

        exitLoading: {
          "0%": { transform: "scale(1)" },
          "90%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        opacity2: {
          "0%": { opacity: 0 },
          "60%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        copied: {
          "0%": { transform: "translate(-50%,50%)" },
          "100%": { transform: "translate(-50%, 0%)" },
        },
      },
      animation: {},
    },
  },
  plugins: [],
};
