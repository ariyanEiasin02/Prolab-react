/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth :{
        container : '1100px'
    },
    colors: {
      navbar: '#f7f9ff',
      primary : '#651ED1',
      primaryafter : 'rgba(101,30,209,0.6',
      banner : "#fff7e7",
      bannerText : 'rgba(38, 17, 52, 1)',
      service : "rgba(59, 38, 219, 0.1)",
      bannerpara : 'rgba(77, 77, 77, 1)',
      border_b : '#FFB800',
      textprimary : '#242424',
      border : 'rgba(197, 197, 210, 1)',
      whitergba : 'rgba(255,255,255, 0.6)',
      get : 'linear-gradient(55deg, #0250c5 0%, #d43f8d 100%)',
      footer : 'rgba(47, 46, 65, 1)'
    },
    backgroundImage: {
      'pattern': "url(/src/assets/jhum.jpg)",
      'map': "url(/src/assets/map.png)",
      'acces' : 'linear-gradient(55deg,rgba(2,80,197,0.6) 0%,rgba(212,63,141,0.6) 100%)',
      'get' : 'linear-gradient(55deg, #0250c5 0%, #d43f8d 100%);',
      'prolader' : 'linear-gradient(55deg, #0250c5 0%, #d43f8d 100%)',
    },
    fontFamily: {
      'roboto': ["Roboto", "sans-serif"],
    },
    keyframes: {
      'shadow-border': {
        '0%': {
          transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1)',
          opacity : '0'
        },
        '100%': {
          transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1.3)',
          opacity : '1'
        },
      },
      'shadow-pulse': {
        '0%': {
          boxShadow: '0px 0px 0px 20px rgba(59, 38, 219, 0.1), 0px 0px 0px 40px rgba(59, 38, 219, 0.1), 0px 0px 0px 60px rgba(59, 38, 219, 0.1), 0px 0px 0px 80px rgba(59, 38, 219, 0.1), 0px 0px 0px 100px rgba(59, 38, 219, 0.1)',
        },
        '50%': {
          boxShadow: '0px 0px 0px 50px rgba(59, 38, 219, 0.1), 0px 0px 0px 75px rgba(59, 38, 219, 0.1), 0px 0px 0px 100px rgba(59, 38, 219, 0.1), 0px 0px 0px 125px rgba(59, 38, 219, 0.1), 0px 0px 0px 150px rgba(59, 38, 219, 0.1)',
        },
        '100%': {
          boxShadow: '0px 0px 0px 20px rgba(59, 38, 219, 0.1), 0px 0px 0px 40px rgba(59, 38, 219, 0.1), 0px 0px 0px 60px rgba(59, 38, 219, 0.1), 0px 0px 0px 80px rgba(59, 38, 219, 0.1), 0px 0px 0px 100px rgba(59, 38, 219, 0.1)',
        },
      },
      'border-play': {
        '0%': {
          transform :'rotate(0)',
        },
        '100%': {
          transform :'rotate(360deg)',
        },
      },
      'watch-pulse' :{
        '0%': {
          transform: 'translateY(15px)',
        },
        '50%': {
          transform: 'translateY(-15px)',
        },
        '100%': {
          transform: 'translateY(15px)',
        },
      },
      'loader-pulse' :{
        '0%,10%,100%': {
          width : '80px',
          height : '80px',
        },
        '65%': {
          width : '150px',
          height : '150px',
        },
      },
      'loaderBlock-pulse' :{
        '0%,30%': {
          transform: 'rotate(0)',
        },
        '55%': {
          backgroundColor: '#F37272',
        },
        '100%': {
          transform: 'rotate(90deg)',
        },
      },
      'loaderBlockInverse-pulse' :{
        '0%,30%': {
          transform: 'rotate(0)',
        },
        '55%': {
          backgroundColor: '#F37272',
        },
        '100%': {
          transform: 'rotate(-90deg)',
        },
      },
      'photo-pulse' :{
        '0%': {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(1.2)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      }
    },
    animation: {
      'shadow-pulse': 'shadow-pulse 2s infinite',
      'watch-pulse': 'watch-pulse 2s infinite',
      'shadow-border': 'shadow-border 2s infinite',
      'border-play': 'border-play 2s infinite',
      'photo-pulse': 'photo-pulse 2s infinite',
      'loader-pulse': 'loader-pulse 2s infinite',
      'loaderBlock-pulse': 'loaderBlock-pulse 2s infinite',
      'loaderBlockInverse-pulse': 'loaderBlockInverse-pulse 2s infinite',
    },
    },
  },
  plugins: [],
}