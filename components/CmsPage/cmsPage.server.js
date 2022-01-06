import { Fragment, Suspense, createElement } from "react"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import { unified } from "unified"
import MOCK_DATA from "../../data/home"
import { useData } from "../../hooks/useData"
import Link from "./cmsLink.client"
import classes from "./cmsPage.module.css"

const FALLBACK = <CmsPageContent />

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
	const elementProps = {
		children: data
	}

	return (
		<div
			className={classes.content}
			id="cms-page-content"
			{...elementProps}
		/>
	)
}

const FETCHERS = {
	getCmsPage: async () => {
		const components = { a: Link }

		try {
			const file = await unified()
				.use(rehypeParse, { fragment: true })
				.use(rehypeReact, { Fragment, components, createElement })
				.process(MOCK_DATA)

			return file.result
		} catch (error) {
			console.error("ERROR while parsing.")
		}
	}
}
