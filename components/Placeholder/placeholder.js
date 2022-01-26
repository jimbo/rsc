import classes from "./placeholder.module.css"

const DEFAULT_PROPS = {
	graphicProps: {},
	orientation: "landscape"
}

export default function Placeholder(props = DEFAULT_PROPS) {
	const { graphicProps } = props

	return (
		<div className={classes.root}>
			<svg
				className={classes.graphic}
				height={108}
				viewBox="0 0 144 108"
				width={144}
				xmlns="http://www.w3.org/2000/svg"
				{...graphicProps}
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
