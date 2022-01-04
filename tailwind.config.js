const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');
  
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            colors: {
                'gray-background': 'f7f8fc',
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#evebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
                gray: colors.gray,
                'blue': '#328af1',
                'blue-hover': '#2879bd',
                'yellow': '#ffc73c',
                'red': '#ec454f',
                'green': '#1aab8b',
                'purple': '#8b60ed',
            },
            spacing:{
                22: '5.5rem',
                44: '11rem',
                70: '17.5rem',
                175: '43.75rem',
            },
            maxWidth: {
                custom: '68.5rem',
            },
            fontFamily: {
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
            fontSize:{
                xxs: ['0.625rem', {lineHeight:'1rem'}],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"),
            require('@tailwindcss/line-clamp'),
        ],
    
};
