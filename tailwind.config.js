/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        patterns: {
            opacities: {
                100: '1',
                80: '.80',
                60: '.60',
                40: '.40',
                20: '.20',
                10: '.10',
                5: '.05',
            },
            sizes: {
                1: '0.25rem',
                2: '0.5rem',
                4: '1rem',
                6: '1.5rem',
                8: '2rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                32: '8rem',
            },
        },
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
            keyframes: {
                infinityParallax: {
                    '0%, 100%': { backgroundPosition: '0px 0px' },
                    '100%': { backgroundPosition: '300px 300px' },
                },
                blurIn: {
                    '0%, 100%': { backdropFilter: 'blur(1px)' },
                    '100%': { backdropFilter: 'blur(5px)' },
                },
                fadeIn: {
                    '0%, 100%': {
                        transform: 'translateY(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                        opacity: 1,
                    },
                },
                downSlide: {
                    '0%, 100%': {
                        transform: 'translateY(-20px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                        opacity: 1,
                    },
                },
                upSlide: {
                    '0%, 100%': {
                        transform: 'translateY(20px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                        opacity: 1,
                    },
                },
                leftSlide: {
                    '0%, 100%': {
                        transform: 'translateX(20px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                rightSlide: {
                    '0%': {
                        transform: 'translateX(-20px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                blurIn: 'blurIn 0.45s ease-in-out forwards',
                fadeIn: 'fadeIn 0.4s ease forwards',
                downSlide: 'downSlide 0.25s ease forwards',
                leftSlide: 'leftSlide 0.25s ease forwards',
                rightSlide: 'rightSlide 0.25s ease forwards',
                upSlide: 'upSlide 0.25s ease forwards',
                hide: 'hide 0.25s  ease forwards',
                infinityParallax: 'infinityParallax 18s linear infinite',
            },
        },
    },
    plugins: [require('tailwindcss-bg-patterns')],
}
