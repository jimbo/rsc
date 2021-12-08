import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { useMemo } from "react"

const DEFAULT_URI =
	"https://commerce-beta.adobe.io/api/MicroconfTenant/graphql?api_key=commerce-graphql-onboarding"

export const createClient = () =>
	new ApolloClient({
		cache: new InMemoryCache().restore(globalThis.apollo || {}),
		link: new HttpLink({ fetch, uri: DEFAULT_URI }),
		ssrMode: !globalThis.document
	})

export const useApolloClient = (initialClient) =>
	useMemo(() => initialClient || createClient(), [initialClient])

export const DEFAULT_CLIENT = createClient()
