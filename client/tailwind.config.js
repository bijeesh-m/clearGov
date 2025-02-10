/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            // keyframes: {
            //     "pulse-border": {
            //         "0%, 100%": { "border-color": "blue" }, // Start and end color
            //         "50%": { "border-color": "red","background-color":"black", "color":"blac" }, // Middle color
            //     },
            // },
            // animation: {
            //     "pulse-border": "pulse-border 2s linear infinite",
            // },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"],
    },
};
