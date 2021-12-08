import classes from "./banner.module.css"

export default function Banner(props) {
	return (
		<div className={classes.root}>
			<div className={classes.image} />
			<div className={classes.content}>
				<div className={classes.title}>{DEFAULT_DATA.title}</div>
				<div className={classes.subtitle}>{DEFAULT_DATA.subtitle}</div>
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
