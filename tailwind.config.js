/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      // Navy carries the surfaces, orange is reserved for accents.
      colors: {
        night: '#06142A',  // page background
        navy: '#0B3A6B',   // brand navy, photo tint
        paper: '#F2F4F7',  // primary text
        mist: '#A7B8CC',   // secondary text
        orange: '#F26B0F', // brand accent: curves, dots
        ember: '#FF9450',  // accent text on dark
      },
      fontFamily: {
        display: ['"Clash Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
