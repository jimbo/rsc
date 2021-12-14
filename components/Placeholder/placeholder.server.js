import classes from "./placeholder.module.css"

const DEFAULT_PROPS = {
	orientation: "landscape"
}

export default function Placeholder(props = DEFAULT_PROPS) {
	const { orientation } = props
	const layoutClass =
		orientation === "portrait" ? classes.portrait : classes.landscape

	return (
		<div className={classes.root}>
			<svg
				className={layoutClass}
				viewBox="0 0 144 108"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={classes.path}
					d="
			M 70,70
			v -35
			a 34.5,34.5 0,1,0 -35,35
			z
		"
				/>
				<path
					className={classes.path}
					d="
			M 74,70
			v -35
			a 34.5,34.5 0,1,1 35,35
			z
		"
				/>
				<path
					className={classes.path}
					d="
			M 74,74
			v 18
			a 16.5,16.5 0,1,0 18,-18
			z
		"
				/>
				<path
					className={classes.path}
					d="
			M 70,74
			v 18
			a 16.5,16.5 0,1,1 -18,-18
			z
		"
				/>
			</svg>
		</div>
	)
}
