const createPlugin = require("tailwindcss/plugin")

function addCmsRulesets({ addComponents }) {
	addComponents({
		".cms-row": {
			width: "100%"
		}
	})
}

module.exports = createPlugin(addCmsRulesets)
