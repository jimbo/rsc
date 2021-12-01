import Link from "next/link"
import { Suspense } from "react"
import useData from "../../../hooks/useData"
import Banner from "../Banner/banner.client"

export default function Home() {
	return (
		<div>
			<Suspense fallback={null}>
				<TopStories />
			</Suspense>
			<Suspense fallback={null}>
				<Banner />
			</Suspense>
			<Link href="/pdp">
				<a>{"Product Detail Page"}</a>
			</Link>
		</div>
	)
}

function TopStories() {
	const data = useData(getTopStories)
	console.log(data)

	return <div>Top Stories</div>
}

const getTopStories = async () =>
	new Promise((res) => setTimeout(res, 3000)).then(() => Date.now())
