import { Fragment, Suspense } from "react"
import { DEFAULT_CLIENT } from "../../hooks/useApolloClient"
import { useData } from "../../hooks/useData"
import { getProductDetail } from "./productDetail.gql"

const FALLBACK = <p>{"Loading..."}</p>

export default function ProductDetail() {
	return (
		<div id="product-detail">
			<Suspense fallback={FALLBACK}>
				<ProductDetailData />
			</Suspense>
		</div>
	)
}

function ProductDetailData() {
	const result = useData(FETCHERS.getProductDetail)
	console.log(`Hook returned: ${result}`)

	return <Child bg={result ? "0 0 255" : "0 255 0"} />
}

function Child(props) {
	const style = {
		"--bg": props.bg || "255 0 0",
		"backgroundColor": "rgb(var(--bg))",
		"height": "80px",
		"width": "80px"
	}

	return <div id="child" style={style} />
}

const FETCHERS = {
	getProductDetail: async () =>
		DEFAULT_CLIENT.query({
			query: getProductDetail,
			variables: { urlKey: "carina-cardigan" }
		})
}
