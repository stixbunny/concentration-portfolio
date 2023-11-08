/** @type {import('tailwindcss').Config} */
import * as colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: colors.cyan['500'],
        'primary-dark': colors.lime['600'],
        'primary-hover': colors.cyan['700'],
        'primary-hover-dark': colors.lime['800'],
        secondary: colors.cyan['700'],
        'secondary-dark': colors.rose['700'],
        cardback: colors.orange['400'],
        'cardback-dark': colors.emerald['800'],
        background: colors.amber['50'],
        'background-dark': colors.stone['900'],
        form: colors.gray['700'],
        'form-dark': colors.slate['300'],
        main: colors.black,
        'main-dark': colors.white,
      },
      height: {
        'dscreen': '100dvh',
      },
      fontFamily: {
        score: 'Oswald, ui-serif',
        dialog: 'Roboto, sans-serif',
      },
      keyframes: {
        'quick-bounce': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg) translateY(-1rem)' },
        },
      },
      animation: {
        'quick-bounce': 'quick-bounce 0.5s ease-in-out',
      },
    },
  },
};
