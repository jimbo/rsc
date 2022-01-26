import { useCallback } from "react"
import classes from "./thumbnail.module.css"

export default function Thumbnail(props) {
	const { children, image, setActiveImage } = props
	const { position } = image

	const handleClick = useCallback(() => {
		setActiveImage(position)
	}, [position, setActiveImage])

	return (
		<button
			aria-label={`View product image #${position}`}
			className={classes.root}
			onClick={handleClick}
			type="button"
		>
			{children}
		</button>
	)
}
