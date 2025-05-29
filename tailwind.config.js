/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
            },
            transitionProperty: {
                colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
            },
            animation: {
                'spin-slow': 'spin 2s linear infinite',
                'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                shimmer: 'shimmer 1.5s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animationDelay: {
                75: '75ms',
                150: '150ms',
                300: '300ms',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.animation-delay-75': {
                    'animation-delay': '75ms',
                },
                '.animation-delay-150': {
                    'animation-delay': '150ms',
                },
                '.animation-delay-300': {
                    'animation-delay': '300ms',
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
