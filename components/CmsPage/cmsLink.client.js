import Link from "next/link"

export default function CmsLink(props) {
	const { href, ...rest } = props

	return (
		<Link href={href}>
			<a {...rest} />
		</Link>
	)
}
