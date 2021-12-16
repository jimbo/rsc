import { useCallback } from "react"
import classes from "./thumbnail.module.css"

export default function Thumbnail(props) {
	const handleClick = useCallback(() => {
		console.log("clicked")
	}, [])

	return (
		<div className={classes.root} onClick={handleClick}>
			{props.children}
		</div>
	)
}
