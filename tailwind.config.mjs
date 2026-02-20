/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Geist Variable"', '"Assistant Variable"', 'sans-serif'],
				mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
			},
		},
		colors:{
			'white': '#FFFFFF',
			accent: {
				DEFAULT: '#F97316',
				50: '#FEDFC9',
				100: '#FDD3B5',
				200: '#FCBB8D',
				300: '#FBA366',
				400: '#FA8B3E',
				500: '#F97316',
				600: '#D25905',
				700: '#9B4204',
				800: '#642B03',
				900: '#2D1301',
				950: '#120800'
			},
			primary: {
				DEFAULT: '#0F0B08',
				50: '#876348',
				100: '#795941',
				200: '#5F4633',
				300: '#443224',
				400: '#2A1F16',
				500: '#0F0B08',
				600: '#000000',
				700: '#000000',
				800: '#000000',
				900: '#000000',
				950: '#000000'
			},
			secondary: {
				DEFAULT: '#F2E9DC',
				50: '#FFFFFF',
				100: '#FFFFFF',
				200: '#FFFFFF',
				300: '#FFFFFF',
				400: '#FDFCFA',
				500: '#F2E9DC',
				600: '#E3CFB3',
				700: '#D4B68A',
				800: '#C49C61',
				900: '#AD8140',
				950: '#997239'
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
