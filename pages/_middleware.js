import { NextResponse } from "next/server"

export default async function middleware(req) {
	const query = getQuery(req.nextUrl.pathname)
	const uri = `${process.env.gql}&query=${query}`
	const res = await fetch(uri)
	const json = await res.json()

	const isProduct = json?.data?.route?.type === "PRODUCT"

	return isProduct ? NextResponse.rewrite("/pdp.server") : NextResponse.next()
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
