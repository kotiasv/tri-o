/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "header": "990px",
                "about": "940px"
            },
            gridTemplateColumns: {
                "about": "400px 500px"
            }
        },
    },
    plugins: [],
}