/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,htm,js}"],
	theme: {
		container: {
			padding: 'var(--container-gap)',
			center: true,
		},
		spacing: {
			0: '0',
			'4': '.04rem',
			'6': '.06rem',
			'8': '.08rem',
			'10': '.1rem',
			'12': '.12rem',
			'14': '.14rem',
			'16': '.16rem',
			'20': '.2rem',
			'24': '.24rem',
			'32': '.32rem',
		},
		borderWidth: {
			DEFAULT: '1px',
			1: '1px',
		},
		extend: {



			fontSize: {
				's': 'var(--txt-s)',
				'm': 'var(--txt-m)',
				'l': 'var(--txt-l)',
			},
			lineHeight: {

			},
			colors: {
				black: '#111',
				white: 'rgba(255, 255, 255, 1)',
				'soft-white': '#FBFBFB',
				grey: '#7C7C7C',
				green: '#129D55',
				orange: '#F9854C',
				accent: '#FF8A00',
				'br-color': '#EDEDED',
				'grey-txt': '#727272',

			},

			borderRadius: {
				DEFAULT: '50%',
			},
		}
	},
	plugins: [],
}