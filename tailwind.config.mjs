/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			'white': '#FFFFFF',
			'primary': {
				DEFAULT: '#13110E',
				50: '#8A7B66',
				100: '#7D705C',
				200: '#625848',
				300: '#484035',
				400: '#2D2921',
				500: '#13110E',
				600: '#100E0C',
				700: '#0D0C0A',
				800: '#0A0908',
				900: '#070605',
				950: '#060504'
			},
			'secondary': {
				DEFAULT: '#949494',
				50: '#FFFFFF',
				100: '#FFFFFF',
				200: '#F0F0F0',
				300: '#D1D1D1',
				400: '#B3B3B3',
				500: '#949494',
				600: '#7D7D7D',
				700: '#666666',
				800: '#4F4F4F',
				900: '#383838',
				950: '#2D2D2D'
			},
			'grey': {
				DEFAULT: '#4B4B4B',
				50: '#A7A7A7',
				100: '#9D9D9D',
				200: '#888888',
				300: '#747474',
				400: '#5F5F5F',
				500: '#4B4B4B',
				600: '#414141',
				700: '#373737',
				800: '#2C2C2C',
				900: '#222222',
				950: '#1D1D1D'
			},
			'red': {
				DEFAULT: '#9F2A2A',
				50: '#F8F0E4',
				100: '#F2DFCC',
				200: '#E5B89C',
				300: '#D8876C',
				400: '#CB4E3B',
				500: '#9F2A2A',
				600: '#83232F',
				700: '#661B2F',
				800: '#4A1429',
				900: '#2E0C1E'
			},
			'green': {
				DEFAULT: '#283519',
				50: '#E7EFDD',
				100: '#DAE7CC',
				200: '#C2D7A9',
				300: '#A9C687',
				400: '#90B664',
				500: '#769D4A',
				600: '#5C7A3A',
				700: '#425829',
				800: '#283519',
				900: '#13190C',
				950: '#090B05'
			},
		}
	},
	plugins: [],
}
