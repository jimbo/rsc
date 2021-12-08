import classes from "./productEssentials.module.css"

export default function ProductEssentials(props) {
	const { name, price } = props
	const formattedPrice = `$${price ? price.value : 0}`

	return (
		<div className={classes.root}>
			<div className={classes.name}>{name}</div>
			<div className={classes.price}>{formattedPrice}</div>
			<div className={classes.rating} />
		</div>
	)
}
