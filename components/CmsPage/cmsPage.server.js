import { Fragment, Suspense, createElement } from "react"
import MOCK_DATA from "../../home.yaml"
import { useData } from "../../hooks/useData"
import classes from "./cmsPage.module.css"

const FALLBACK = <CmsPageContent />
// const MOCK_DATA = {}

export default function CmsPage() {
	return (
		<div id="cms-page" className={classes.root}>
			<Suspense fallback={FALLBACK}>
				<CmsPageData />
			</Suspense>
		</div>
	)
}

function CmsPageData() {
	const data = useData(FETCHERS.getCmsPage)

	return <CmsPageContent data={data} />
}

function CmsPageContent(props) {
	const { data } = props
	const elementProps = {}

	if (data) {
		elementProps.children = mapToReactElements(data)
	}

	return (
		<div
			className={classes.content}
			id="cms-page-content"
			{...elementProps}
		/>
	)
}

function mapToReactElements(nodes) {
	if (!Array.isArray(nodes)) return null

	return Array.from(nodes, (node, index) => {
		if (typeof node === "string") return node

		const key = node?.key || index
		const props = node?.props || {}
		const elementType = node?.tag || Fragment
		const children = mapToReactElements(node?.children)

		return createElement(elementType, { key, ...props, children })
	})
}

const FETCHERS = {
	getCmsPage: async () => MOCK_DATA
}
