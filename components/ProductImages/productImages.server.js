import Image from "next/image"
import { cloneElement } from "react"
import Placeholder from "../Placeholder/placeholder.server"
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
			mainImageElement = (
				<Image
					alt={altText}
					layout="fill"
					objectFit="cover"
					priority
					unoptimized
					src={url}
				/>
			)
		}

		// const imageElement = (
		// 	<Image
		// 		alt={altText}
		// 		layout="fill"
		// 		objectFit="cover"
		// 		priority
		// 		unoptimized
		// 		src={url}
		// 	/>
		// )

		// TODO: wrap with a client component, if that ever decides to work
		thumbnailElements[index] = (
			<div key={key} className={classes.thumbnail} />
		)
	}

	// if (!mainImageElement) {
	// 	mainImageElement = <Placeholder orientation="portrait" />
	// }

	return (
		<div id="product-images" className={classes.root}>
			<div className={classes.mainImage}>{mainImageElement}</div>
			<div className={classes.thumbnailList}>{thumbnailElements}</div>
		</div>
	)
}
