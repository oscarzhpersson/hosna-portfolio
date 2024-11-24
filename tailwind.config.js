/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-in forwards',
      },
      fontSize: {
        display: ['2.5rem', '3rem'],
        h1: ['1.5rem', '2rem'],
        title: ['0.875rem', '1.25rem'],
        subtitle: ['0.75rem', '1.125rem'],
        body: ['0.75rem', '1rem'],
        '10xl': ['10rem', '1'],
        '11xl': ['12rem', '1'],
        '12xl': ['14rem', '1'],
      },
      colors: {
        white: '#ffffff',
        offWhite: '#fafafa',
        black: '#000000',
        primary: '#ECDFCC',
        secondary: '#697565',
        tertiary: '#3C3D37',
        quartary: '#181C14',
        quinary: '#B4BAB2',
        senary: '#EBEBEB',
      },
    },
  },
  plugins: [],
}
