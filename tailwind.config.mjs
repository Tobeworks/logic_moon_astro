/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			'white': '#FFFFFF',
			'accent': {
				DEFAULT: '#f97316',
				50: '#fff7f6',
				100: '#fef2ef',
				200: '#fde3dd',
				300: '#fcd1c6',
				400: '#fbb09a',
				500: '#f97316',
				600: '#da6510',
				700: '#b45309',
				800: '#954409',
				900: '#703208',
				dark: '#b45309'
			},
			'primary': {
				DEFAULT: '#0f0b08',
				50: '#ebe5dc',
				100: '#d9d3cb',
				200: '#bdb8b0',
				300: '#9b9690',
				400: '#726f6a',
				500: '#0f0b08',
				600: '#0e0a07',
				700: '#0c0907',
				800: '#0a0706',
				900: '#080605',
				950: '#070604'
			},
			'secondary': {
				DEFAULT: '#f2e9dc',
				50: '#fef8f1',
				100: '#fcf6ee',
				200: '#f9f3e9',
				300: '#f7efe4',
				400: '#f4ece0',
				500: '#f2e9dc',
				600: '#e6dccf',
				700: '#d9cfc1',
				800: '#c5b9aa',
				900: '#b3a594',
				950: '#a99a87'
			},
			'grey': {
				DEFAULT: '#9e8d79',
				50: '#e0d8cb',
				100: '#d7cec1',
				200: '#cabfb1',
				300: '#bbafa0',
				400: '#aea08f',
				500: '#9e8d79',
				600: '#91816f',
				700: '#837564',
				800: '#6a5e50',
				900: '#50463b',
				950: '#3d352d'
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
