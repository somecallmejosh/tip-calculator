module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-gray-cyan': 'hsl(186, 14%, 43%)',
        'dark-gray-cyan-alt': 'hsl(184, 14%, 56%)',
        'light-gray-cyan': 'hsl(185, 41%, 84%)',
        'light-gray-cyan-alt': 'hsl(189, 41%, 97%)',
      },
    },
    fontFamily: {
      sans: ['Space Mono', 'monospace'],
      display: ['Space Mono', 'monospace'],
      serif: ['Space Mono', 'monospace'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
