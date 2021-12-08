import classes from "./thumbnail.module.css"

export default function Thumbnail(props) {
	return (
		<div className={classes.root} onClick={handleClick}>
			{props.children}
		</div>
	)
}
