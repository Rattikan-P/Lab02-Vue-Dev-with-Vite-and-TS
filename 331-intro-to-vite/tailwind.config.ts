import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sp': '0 3px 12px 0 rgba(0, 0, 0, 0.2)', //sp: ชื่อที่กำหนดขึ้นมาใช้เรียกในคลาส (e.g ใช้คลาสใน HTML -> shadow-sp)
      },
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'], 
      },
      animation: {
        fade: 'yellowFade 3s ease-in-out',
      },
      keyframes: {
        yellowFade: {
          '0%': {backgroundColor: 'yellow'},
          '100%': {backgroundColor: 'transparent'},
        },
      },
    },
  },
  plugins: [],
} satisfies Config

