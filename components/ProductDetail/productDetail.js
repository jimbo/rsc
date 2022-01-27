import { Fragment } from "react"
import Banner from "../Banner/banner"
import ProductConfig from "../ProductConfig/productConfig"
import ProductEssentials from "../ProductEssentials/productEssentials"
import ProductImages from "../ProductImages/productImages"
import classes from "./productDetail.module.css"

export default function ProductDetail(props) {
	const { product } = props
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
				<Banner />
			</section>
		</Fragment>
	)
}
