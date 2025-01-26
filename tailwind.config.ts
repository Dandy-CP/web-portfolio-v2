import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import theme from "daisyui/src/theming/themes"

export default {
  content: [
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './components/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      phone: { min: "50px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px", max: "1279px" },
      large: { min: "1280px", max: "1535px" },
      xtraLarge: { min: "1536px" },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customNavy: '#0a192f',
        customSlate: '#8892b0',
        customWhite: '#e6f1ff',
        customGreen: '#64ffda',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        night: {
          ...theme.night,
          "background-color": "#0f172a",
          "color": 'white'
        }
      }
    ],
  },
} satisfies Config;
