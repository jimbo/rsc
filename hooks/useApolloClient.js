import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { useMemo } from "react"

export const createClient = () =>
	new ApolloClient({
		cache: new InMemoryCache().restore(globalThis.apollo || {}),
		link: new HttpLink({ fetch, uri: process.env.gql }),
		ssrMode: !globalThis.document
	})

export const useApolloClient = (initialClient) =>
	useMemo(() => initialClient || createClient(), [initialClient])

export const DEFAULT_CLIENT = createClient()
