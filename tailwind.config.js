/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: [
    'index.html',
    'testing.html',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FF6B35',
        secondary: '#C5C3C6',
        dark: '#1A1A1D',
        third: '#1E90FF',
        extend: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        'border-color': {
          '0%': { borderColor: '#FF6B35' },     // blue-500
          '50%': { borderColor: '#1E90FF' },    // emerald-500
          '100%': { borderColor: '#FF6B35' },
        },
      },
      animation: {
        'border-color': 'border-color 3s ease-in-out infinite',
      },
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
  },
}

