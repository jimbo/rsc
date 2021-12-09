import Placeholder from "../Placeholder/placeholder.server.js"
import classes from "./banner.module.css"

export default function Banner(props) {
	const actionElements = []

	for (const action of DEFAULT_DATA.actions) {
		const { text } = action

		actionElements.push(
			<div key={text} className={classes.action}>
				{text}
			</div>
		)
	}

	return (
		<div className={classes.root}>
			<div className={classes.image}>
				<Placeholder />
			</div>
			<div className={classes.content}>
				<div className={classes.title}>{DEFAULT_DATA.title}</div>
				<div className={classes.subtitle}>{DEFAULT_DATA.subtitle}</div>
				<div className={classes.actions}>{actionElements}</div>
			</div>
		</div>
	)
}

const DEFAULT_DATA = {
	title: "Headline goes here",
	subtitle:
		"Optional metadata for subtitle should be kept to one or two lines",
	actions: [{ destination: "/", text: "Action" }]
}
