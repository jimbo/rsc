const aspectRatioPlugin = require("@tailwindcss/aspect-ratio")

const config = {
	mode: "jit",
	plugins: [aspectRatioPlugin],
	purge: {
		content: ["./components/**/*.css", "./pages/**/*.css"],
		extractors: [
			{
				extractor: (content) => content.match(matcher) || [],
				extensions: ["css"]
			}
		]
	},
	separator: "_",
	theme: {
		screens: {
			"xs": "480px",
			"sm": "640px",
			"md": "800px",
			"lg": "960px",
			"xl": "1120px",
			"2xl": "1280px",
			"3xl": "1440px"
		}
	}
}

module.exports = config
