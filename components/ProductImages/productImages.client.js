import Image from "next/image"
import { useState } from "react"
import Thumbnail from "./thumbnail.client"
import classes from "./productImages.module.css"

export default function ProductImages(props) {
	const { images } = props
	const [activeImage, setActiveImage] = useState(1)
	const thumbnailElements = []
	let mainImageElement

	for (const image of images || thumbnailElements) {
		const { label, position, url } = image
		const index = -1 + position
		const key = `${position}_${url}`
		const altText = `Product image #${position}: ${label}`

		if (position === activeImage) {
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

		thumbnailElements[index] = (
			<div key={key} className={classes.thumbnail}>
				<Thumbnail image={image} setActiveImage={setActiveImage}>
					<Image
						alt={altText}
						layout="fill"
						objectFit="cover"
						sizes="(min-width: 1440px) 384px, 40px"
						src={url}
					/>
				</Thumbnail>
			</div>
		)
	}

	return (
		<div id="product-images" className={classes.root}>
			<div className={classes.mainImage}>{mainImageElement}</div>
			<div className={classes.thumbnailList}>{thumbnailElements}</div>
		</div>
	)
}
