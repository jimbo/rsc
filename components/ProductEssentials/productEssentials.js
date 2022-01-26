import classes from "./productEssentials.module.css"

export default function ProductEssentials(props) {
	const { name, price } = props
	const formattedName = `${name || "Product Name"}`
	const formattedPrice = `${price ? "$" + price.value : "Price"}`

	return (
		<div className={classes.root}>
			<div className={classes.name}>{formattedName}</div>
			<div className={classes.price}>{formattedPrice}</div>
			<div className={classes.rating} />
		</div>
	)
}
