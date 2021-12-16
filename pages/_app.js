import { ApolloProvider } from "@apollo/client"
import { useEffect } from "react"
import Layout from "../components/Layout/layout.server"
import { useApolloClient } from "../hooks/useApolloClient"
import "../styles/globals.css"

export default function App(props) {
	const { Component, pageProps } = props
	const client = useApolloClient()

	useEffect(() => {
		if (globalThis.document) {
			const titleElement = document.createElement("title")
			const titleText = document.createTextNode("Carina Cardigan")
			titleElement.appendChild(titleText)

			const metaElement = document.createElement("meta")
			metaElement.setAttribute("name", "description")
			metaElement.setAttribute(
				"content",
				"The Carina Cardigan is the perfect complement to a breezy summer evening. The loose knit, lightweight cotton fabric moves with you and provides just the right amount of breathable warmth. Features: Open front . 3/4 sleeve. Tapered to hip . Specked design"
			)

			document.head.appendChild(titleElement)
			document.head.appendChild(metaElement)
		}
	}, [])

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}
