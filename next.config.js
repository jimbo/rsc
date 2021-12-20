const path = require("path")

module.exports = {
	env: {
		gql: "https://commerce-beta.adobe.io/api/MicroconfTenant/graphql?api_key=commerce-graphql-onboarding"
	},
	experimental: {
		concurrentFeatures: true,
		reactRoot: true,
		serverComponents: true
	},
	images: {
		deviceSizes: [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600],
		domains: ["jnz3dtiuj77ca.dummycachetest.com"]
	},
	webpack: (config, helpers) => {
		const { isServer } = helpers

		if (isServer) {
			config.module.rules.push({
				test: /\.yaml$/,
				use: [{ loader: path.resolve(__dirname, "loader.js") }]
			})
		}

		return config
	}
}
