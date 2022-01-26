import { NextResponse } from "next/server"

// const PUBLIC_FILE = /\.(?!html$).*$/

export default async function middleware(req) {
	const { pathname } = req.nextUrl
	const query = getQuery(pathname)
	const uri = `${process.env.gql}&query=${query}`

	const res = await fetch(uri)
	const json = await res.json()
	const isProduct = json?.data?.route?.type === "PRODUCT"
	// console.log({ pathname, isProduct })

	return isProduct
		? NextResponse.rewrite(`/pdp${pathname}`)
		: NextResponse.next()
}

const getQuery = (pathname) =>
	encodeURIComponent(`{
	route(url: "${pathname}") {
		__typename
		relative_url
		redirect_code
		type
	}
}`)
