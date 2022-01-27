import ProductDetail from "../../components/ProductDetail/productDetail"

export default ProductDetail

export async function getStaticPaths() {
	return {
		fallback: "blocking",
		paths: []
		// paths: [{ params: { url_key: "carina-cardigan.html" } }]
	}
}

export async function getStaticProps({ params }) {
	const { url_key } = params
	const sanitized = url_key.endsWith(".html") ? url_key.slice(0, -5) : url_key
	const query = getQuery(sanitized)
	const uri = `${process.env.gql}&query=${query}`

	const res = await fetch(uri)
	const json = await res.json()
	const items = json?.data?.products?.items || []
	const product = items[0] || {}

	return { props: { product } }
}

const getQuery = (urlKey) =>
	encodeURIComponent(`{
	products(filter: { url_key: { eq: "${urlKey}" } }) {
		items {
			uid
			categories {
				uid
				breadcrumbs {
					category_uid
				}
			}
			description {
				html
			}
			media_gallery {
				disabled
				label
				position
				url
			}
			meta_description
			name
			price_range {
				minimum_price {
					regular_price {
						currency
						value
					}
				}
			}
			sku
			small_image {
				url
			}
			stock_status
			url_key
			... on ConfigurableProduct {
				configurable_options {
					uid
					attribute_code
					attribute_uid
					label
					values {
						uid
						default_label
						label
						store_label
						swatch_data {
							... on ImageSwatchData {
								thumbnail
							}
							value
						}
						use_default_value
					}
				}
				variants {
					attributes {
						uid
						code
					}
					product {
						uid
						media_gallery {
							disabled
							label
							position
							url
						}
						sku
						stock_status
						price_range {
							minimum_price {
								regular_price {
									currency
									value
								}
							}
						}
					}
				}
			}
		}
	}
}`)
