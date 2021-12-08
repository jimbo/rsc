import { ApolloProvider } from "@apollo/client"
import Layout from "../components/Layout/layout.server"
import { useApolloClient } from "../hooks/useApolloClient"
import "../styles/globals.css"

export default function App(props) {
	const { Component, pageProps } = props
	const client = useApolloClient()

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}
