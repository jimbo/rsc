import { ApolloProvider } from "@apollo/client"
import { useApolloClient } from "../hooks/useApolloClient"
import "../styles/globals.css"

export default function App(props) {
	const { Component, pageProps } = props
	const client = useApolloClient()

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}
