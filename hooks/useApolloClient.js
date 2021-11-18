import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { useMemo } from "react"

const uri = "https://commerce-int.adobe.io/api/runtime/graphql?api_key=adobeio_onboarding"

export const createClient = () =>
	new ApolloClient({
		cache: new InMemoryCache().restore(globalThis.apollo || {}),
		link: new HttpLink({ fetch, uri }),
		ssrMode: !globalThis.document
	})

export const useApolloClient = (initialClient) =>
	useMemo(() => initialClient || createClient(), [initialClient])

export default useApolloClient
