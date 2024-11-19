/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(10, 79%, 65%)',
        'pale-orange': 'hsl(27, 66%, 92%)',
        'brown': 'hsl(28, 10%, 53%)',
      },
      fontFamily: {
        sans: ["DM Sans"],
        cos: ["Edu AU VIC WA NT Pre"],
      }
    },
  },
  plugins: [],
}

