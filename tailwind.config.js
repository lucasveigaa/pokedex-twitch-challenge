/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                sun: {
                    50: '#f4e285',
                    100: '#ffd60a',
                    200: '#ffc300',
                    300: '#003566',
                    400: '#001d3d',
                    500: '#000814',
                },
            },
            fontFamily: {
                pressStart: ['"Press Start 2P"', 'cursive'],
            },
        },
    },
    plugins: [],
}
