module.exports = {
  purge: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(100px, 0px)', opacity: '0' },
          '100%': { transform: 'translate(0px, 0px)', opacity: '1' },
        },
        fadein: {
          '0%':{ opacity: '0'},
          '100%':{ opacity: '1'},
        }
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'wiggle-slow-1': 'wiggle 1s ease-in-out',
        'wiggle-slow-2': 'wiggle 1.5s ease-in-out',
        'fade-in': 'fadein 1s ease-in-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
