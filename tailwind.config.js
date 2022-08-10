/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'hsl(180, 29%, 50%)',
        secondary: 'hsl(180, 14%, 20%)',
        tertiary: 'hsl(180, 8%, 52%)',
        background: 'hsl(180, 52%, 96%)',
        'filter-tables': 'hsl(180, 31%, 95%)'
      },
      backgroundColor: {
        primary: 'hsl(180, 29%, 50%)',
        secondary: 'hsl(180, 14%, 20%)',
        tertiary: 'hsl(180, 8%, 52%)',
        background: 'hsl(180, 52%, 96%)',
        'filter-tables': 'hsl(180, 31%, 95%)'
      },
      fontFamily: {
        'League Spartan': ['League Spartan', 'sans-serif']
      },
      fontSize: {
        base: '0.9375rem'
      },
      backgroundImage: {
        'header-desktop': "url('../images/bg-header-desktop.svg')",
        'header-mobile': "url('../images/bg-header-mobile.svg')"
      }
    }
  },
  plugins: []
}
