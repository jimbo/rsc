import { Fragment, Suspense } from "react"
import { DEFAULT_CLIENT } from "../../hooks/useApolloClient"
import { useData } from "../../hooks/useData"
import Banner from "../Banner/banner.server"
import ProductConfig from "../ProductConfig/productConfig.client"
import ProductEssentials from "../ProductEssentials/productEssentials.server"
import ProductImages from "../ProductImages/productImages.client"
import { getProductDetail } from "./productDetail.gql"
import classes from "./productDetail.module.css"

const FALLBACK = <ProductDetailContent />

export default function ProductDetail() {
	return (
		<div id="product-detail" className={classes.root}>
			<Suspense fallback={FALLBACK}>
				<ProductDetailData />
			</Suspense>
		</div>
	)
}

function ProductDetailData() {
	const data = useData(FETCHERS.getProductDetail)

	return <ProductDetailContent data={data} />
}

function ProductDetailContent(props) {
	const { data } = props
	const items = data?.data?.products?.items
	const product = items ? items[0] : {}
	const { configurable_options, media_gallery, name, price_range } = product
	const price = price_range?.minimum_price?.regular_price

	return (
		<Fragment>
			<section className={classes.aboveFold}>
				<ProductEssentials name={name} price={price} />
				<ProductImages images={media_gallery} />
				<ProductConfig options={configurable_options} />
			</section>
			<section className={classes.belowFold}>
				<Suspense fallback={null}>
					<Banner />
				</Suspense>
			</section>
		</Fragment>
	)
}

const FETCHERS = {
	getProductDetail: async () =>
		DEFAULT_CLIENT.query({
			query: getProductDetail,
			variables: { urlKey: "carina-cardigan" }
		})
}
