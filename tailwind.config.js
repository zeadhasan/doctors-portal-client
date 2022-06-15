module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  themes: [
    {
      doctortheme: {
        primary: "red",
        secondary: "green",
        accent: "#3A4256",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
  ],
  plugins: [require("daisyui")],
}
