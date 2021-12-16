import Image from "next/image"
import classes from "./productImages.module.css"

export default function ProductImages(props) {
	const { images } = props
	const thumbnailElements = []
	let mainImageElement

	for (const image of images || thumbnailElements) {
		const { label, position, url } = image
		const index = -1 + position
		const key = `${position}_${url}`
		const altText = `Product image #${position}: ${label}`

		if (position === 1) {
			const sizes = "(min-width: 480px) 2160px, 384px"

			mainImageElement = (
				<Image
					alt={altText}
					layout="fill"
					objectFit="cover"
					priority
					sizes={sizes}
					src={url}
				/>
			)
		}

		// TODO: wrap with a client component, if that ever decides to work
		thumbnailElements[index] = (
			<div key={key} className={classes.thumbnail} />
		)
	}

	return (
		<div id="product-images" className={classes.root}>
			<div className={classes.mainImage}>{mainImageElement}</div>
			<div className={classes.thumbnailList}>{thumbnailElements}</div>
		</div>
	)
}
