import { Suspense } from "react"
import Banner from "../../client/Banner/banner.client"

export default function Home() {
	return (
		<div>
			<Suspense fallback={null}>
				<Banner />
			</Suspense>
		</div>
	)
}
