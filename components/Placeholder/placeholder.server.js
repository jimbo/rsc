import classes from "./placeholder.module.css"

export default function Placeholder(props) {
	return (
		<div className={classes.root}>
			<div className={classes.layout}>
				<span className={classes.tl} />
				<span className={classes.tr} />
				<span className={classes.bl} />
				<span className={classes.br} />
			</div>
		</div>
	)
}
