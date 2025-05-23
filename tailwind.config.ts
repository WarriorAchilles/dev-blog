import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class', // enable dark mode via class strategy
    theme: {
        extend: {
            colors: {
                midnight: {
                    background: '#121212',
                    surface: '#1F1F1F',
                    border: '#2A2A2A',
                    textHeading: '#E7DFD1', // Brighter beige for emphasis
                    textBody: '#CFC5B8', // Warm rice beige for body
                    matcha: '#90A955', // Calm matcha green
                    koi: '#CE5A57', // Koi red
                    cedar: '#6C584C', // Earthy brown
                    sky: '#6AB0F3', // Sky blue highligt
                },
                // Optional light theme support (if needed)
                light: {
                    background: '#FDFCF8',
                    surface: '#F9F6F1',
                    border: '#DCDCDC',
                    textHeading: '#1C1C1C',
                    textBody: '#3C3C3C',
                },
            },
        },
    },
    plugins: [],
};

export default config;
