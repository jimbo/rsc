import { Suspense } from "react"
import { createClient } from "../../../hooks/useApolloClient"
import { useData } from "../../../hooks/useData"
import { getProductDetail } from "./productDetail.gql"

export default function ProductDetail() {
	return (
		<div>
			<Suspense fallback={<p>{"Loading..."}</p>}>
				<Foo />
			</Suspense>
		</div>
	)
}

function Foo() {
	const result = useData(FETCHERS.getProductDetail)
	const items = result?.data?.products?.items || []
	const content = items.map(({ uid }) => <li key={uid}>{uid}</li>)

	return <ul>{content}</ul>
}

const DEFAULT_CLIENT = createClient()

const FETCHERS = {
	getProductDetail: async () =>
		DEFAULT_CLIENT.query({
			query: getProductDetail,
			variables: { urlKey: "carina-cardigan" }
		})
}
