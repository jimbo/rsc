import Link from "next/link"
import classes from "./header.module.css"

export default function Header() {
	return (
		<div className={classes.root}>
			<div className={classes.navActions}>
				<IconButton className={classes.navButton} />
				<div className={classes.homeButton} />
			</div>
			<div className={classes.content} />
			<div className={classes.userActions}>
				<IconButton className={classes.searchButton} />
				<IconButton className={classes.cartButton} />
			</div>
		</div>
	)
}

function IconButton(props) {
	const { href, ...rest } = props

	return (
		<Link href={href || "/"}>
			<a {...rest}>
				<svg
					className={classes.graphic}
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						className={classes.path}
						cx="50%"
						cy="50%"
						fill="none"
						r="30"
						strokeWidth="4"
					/>
				</svg>
			</a>
		</Link>
	)
}
