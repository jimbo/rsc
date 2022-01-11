import Link from "next/link"
import classes from "./header.module.css"

export default function Header() {
	return (
		<div className={classes.root}>
			<div className={classes.navActions}>
				<button
					aria-label="Toggle the navigation menu"
					className={classes.navButton}
					type="button"
				>
					{ICON}
				</button>
				<Link href="/">
					<a
						aria-label="Return to the homepage"
						className={classes.homeLink}
					>
						{ICON}
					</a>
				</Link>
			</div>
			<div className={classes.content} />
			<div className={classes.userActions}>
				<button
					aria-label="Toggle the search bar"
					className={classes.searchButton}
					type="button"
				>
					{ICON}
				</button>
				<button
					aria-label="Toggle the mini-cart"
					className={classes.cartButton}
					type="button"
				>
					{ICON}
				</button>
			</div>
		</div>
	)
}

const ICON = (
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
)

// function IconButton(props) {
// 	const { href, ...rest } = props

// 	return (
// 		<Link href={href || "/"}>
// 			<a {...rest}>
// 				<svg
// 					className={classes.graphic}
// 					viewBox="0 0 64 64"
// 					xmlns="http://www.w3.org/2000/svg"
// 				>
// 					<circle
// 						className={classes.path}
// 						cx="50%"
// 						cy="50%"
// 						fill="none"
// 						r="30"
// 						strokeWidth="4"
// 					/>
// 				</svg>
// 			</a>
// 		</Link>
// 	)
// }
