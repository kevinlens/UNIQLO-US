/** @type {import('tailwindcss').Config} */
module.exports = {
  //just in time mode makes build time much faster
  mode: 'jit',
  content: ['./src/**/*.{js,jsx}', './main.html'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      fontFamily: {
        uniqloBold: ['UniqloProBold', 'sans-serif'],
        uniqloLight: ['UniqloProLight', 'sans-serif'],
      },
      spacing: {
        17: '4.5rem',
      },
      borderWidth: {
        0: '0',
        1: '1px',
      },
      colors: {
        iGrey: '#dadada',
      },
      height: {
        98: '26.0625rem',
        100: '28rem',
        102: '30rem',
        104: '32rem',
        108: '36rem',
        112: '40rem',
        116: '44rem',
      },
      backgroundImage: {
        '1': "url('/src/assets/images/1.jpg')",
        '2':"url('/src/assets/images/2.jpg')",
        '3':"url('/src/assets/images/3.jpg')",
        '4':"url('/src/assets/images/4.jpg')",
        '5':"url('/src/assets/images/5.jpg')",
        '6':"url('/src/assets/images/6.jpg')",
        '7':"url('/src/assets/images/7.jpg')",
        '8':"url('/src/assets/images/8.jpg')",
        '9':"url('/src/assets/images/9.jpg')",
        '10':"url('/src/assets/images/10.jpg')",
        '11':"url('/src/assets/images/11.jpg')",
        '12':"url('/src/assets/images/12.jpg')",
        '13':"url('/src/assets/images/13.jpg')",
        '14':"url('/src/assets/images/14.jpg')",
        '15':"url('/src/assets/images/15.jpg')",
        '16':"url('/src/assets/images/16.jpg')",
        '17':"url('/src/assets/images/17.jpg')",
        '18':"url('/src/assets/images/18.jpg')",
        '19':"url('/src/assets/images/19.jpg')",
        '20':"url('/src/assets/images/20.jpg')",
        '21':"url('/src/assets/images/21.jpg')",
        '22':"url('/src/assets/images/22.jpg')",
        '23':"url('/src/assets/images/23.jpg')",
        '24':"url('/src/assets/images/24.jpg')",
        '25':"url('/src/assets/images/25.jpg')",
        '26':"url('/src/assets/images/26.jpg')",
        '27':"url('/src/assets/images/27.jpg')",
        '28':"url('/src/assets/images/28.jpg')",
        '29':"url('/src/assets/images/29.jpg')",
        '30':"url('/src/assets/images/30.jpg')",
        '31':"url('/src/assets/images/31.jpg')",
        '32':"url('/src/assets/images/32.jpg')",
        '33':"url('/src/assets/images/33.jpg')",
        '34':"url('/src/assets/images/34.jpg')",
        '35':"url('/src/assets/images/35.jpg')",
        '36':"url('/src/assets/images/36.jpg')",
        '37':"url('/src/assets/images/37.jpg')",
        '38':"url('/src/assets/images/38.jpg')",
        '39':"url('/src/assets/images/39.jpg')",
        '40':"url('/src/assets/images/40.jpg')",
        '41':"url('/src/assets/images/41.jpg')",
        '42':"url('/src/assets/images/42.jpg')",
        '43':"url('/src/assets/images/43.jpg')",
        '44':"url('/src/assets/images/44.jpg')",
        '45':"url('/src/assets/images/45.jpg')",
        '46':"url('/src/assets/images/46.jpg')",
        '47':"url('/src/assets/images/47.jpg')",
        '48':"url('/src/assets/images/48.jpg')",
        '49':"url('/src/assets/images/49.jpg')",
        '51':"url('/src/assets/images/50.jpg')",
        '52':"url('/src/assets/images/51.jpg')",
        '53':"url('/src/assets/images/52.jpg')",
        '50':"url('/src/assets/images/53.jpg')",
        '54':"url('/src/assets/images/54.jpg')",
        '55':"url('/src/assets/images/55.jpg')",
        '56':"url('/src/assets/images/56.jpg')",
        '57':"url('/src/assets/images/57.jpg')",
        '58':"url('/src/assets/images/58.jpg')",
        '59':"url('/src/assets/images/59.jpg')",
        '60':"url('/src/assets/images/60.jpg')",
        '61':"url('/src/assets/images/61.jpg')",
        '62':"url('/src/assets/images/62.jpg')",
        '63':"url('/src/assets/images/63.jpg')",
        '64':"url('/src/assets/images/64.jpg')",
      },
      screens: {
        '-2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        '-xl': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        '-lg': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        '-md': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        '-sm': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
