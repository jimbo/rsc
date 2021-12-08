import classes from "./productImages.module.css"

export default function ProductImages(props) {
	const { images } = props
	const thumbnailElements = []
	let mainImageElement

	for (const image of images || thumbnailElements) {
		const { position, url } = image
		const index = -1 + position
		const key = `${position}_${url}`
		const imageElement = <img key={key} src={url} />

		if (position === 1) mainImageElement = imageElement

		// TODO: wrap with a client component, if that ever decides to work
		thumbnailElements[index] = imageElement
	}

	return (
		<div id="product-images" className={classes.root}>
			<div className={classes.mainImage}>{mainImageElement}</div>
			<div className={classes.thumbnailList}>{thumbnailElements}</div>
		</div>
	)
}
