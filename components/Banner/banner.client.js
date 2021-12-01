import { gql, useQuery } from "@apollo/client"
import Image from "next/image"
import classes from "./banner.module.css"

export default function Banner() {
	const result = useQuery(QUERIES.getRuntime)
	const data = result.data || DEFAULT_DATA
	const bannerText = data?.runtime?.text

	const bannerImage = data?.runtime?.image ? (
		<Image
			alt={"A stock photo"}
			height={660}
			priority={true}
			quality={100}
			src={data.runtime.image}
			width={1440}
		/>
	) : null

	return (
		<div className={classes.root}>
			<div className={classes.image}>{bannerImage}</div>
			<div className={classes.text}>{bannerText}</div>
		</div>
	)
}

const QUERIES = {
	getRuntime: gql`
		{
			runtime
		}
	`
}

const DEFAULT_DATA = {
	runtime: {
		image: "https://jnz3dtiuj77ca.dummycachetest.com/media/venia-hero2.jpg?auto=webp&format=pjpg&quality=85",
		text: "Winter sale"
	}
}
