const yaml = require("js-yaml")

module.exports = function(source) {
	source = yaml.load(source)

	return `export default ${JSON.stringify(source)}`
}
