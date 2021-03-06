const aspectRatioPlugin = require("@tailwindcss/aspect-ratio")
const MATCHER = /(?<=composes:.*)(\b\S+\b)(?=.*from global;)/g

const config = {
	content: {
		extract: {
			css: (content) => content.match(MATCHER) || []
		},
		files: ["./{components,pages}/**/*.css"]
	},
	mode: "jit",
	plugins: [aspectRatioPlugin],
	separator: "_",
	theme: {
		extend: {
			gridTemplateColumns: {
				magic: "auto 1fr"
			},
			gridTemplateRows: {
				magic: "auto 1fr"
			}
		},
		fontSize: {
			100: "0.625rem",
			200: "0.75rem",
			300: "0.875rem",
			400: "1rem",
			500: "1.25rem",
			600: "1.5rem",
			700: ["2.125rem", "2.25rem"],
			800: ["3rem", "3.5rem"],
			900: ["3.75rem", "4.5rem"],
			1000: ["6rem", "7rem"],
			DEFAULT: "0.875rem"
		},
		transitionDuration: {
			1: "64ms",
			2: "128ms",
			3: "192ms",
			4: "256ms",
			5: "320ms",
			6: "384ms",
			7: "448ms",
			8: "512ms"
		},
		screens: {
			"min": "320px",
			"xs": "480px",
			"sm": "640px",
			"md": "800px",
			"lg": "960px",
			"xl": "1120px",
			"2xl": "1280px",
			"3xl": "1440px",
			"4xl": "1600px",
			"max": "1920px"
		}
	}
}

module.exports = config
