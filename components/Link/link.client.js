import NextLink from "next/link"

export default function Link(props) {
	const { children, ...rest } = props

	return (
		<NextLink {...rest}>
			<a>{children}</a>
		</NextLink>
	)
}
