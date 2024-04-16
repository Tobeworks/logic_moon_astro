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
				DEFAULT: '#B7B199',
				50: '#FFFFFF',
				100: '#FBFAF9',
				200: '#EAE8E1',
				300: '#D9D6C9',
				400: '#C8C3B1',
				500: '#B7B199',
				600: '#A09878',
				700: '#837B5D',
				800: '#625D45',
				900: '#413E2E',
				950: '#312E23'
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
		}
	},
	plugins: [],
}