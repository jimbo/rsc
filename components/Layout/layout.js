import Header from "../Header/header.client"
import classes from "./layout.module.css"

export default function Layout(props) {
	const { children } = props

	return (
		<div id="layout" className={classes.root}>
			<header className={classes.header}>
				<Header />
			</header>
			<div className={classes.body}>{children}</div>
			<footer className={classes.footer} />
		</div>
	)
}
