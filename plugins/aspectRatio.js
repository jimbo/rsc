const plugin = require("tailwindcss/plugin")

const VALUES = new Map()
	.set("8/3", "8 / 3")
	.set("16/9", "16 / 9")
	.set("3/2", "4 / 3")
	.set("4/3", "4 / 3")
	.set("1", "1")
	.set("3/4", "3 / 4")
	.set("2/3", "2 / 3")

function AspectRatio({ addComponents, e }) {
	const rulesets = {}

	for (const [key, value] of VALUES) {
		rulesets[`.ratio-${e(key)}`] = {
			"aspect-ratio": value
		}
	}

	addComponents(rulesets)
}

module.exports = plugin(AspectRatio)
