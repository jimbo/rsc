import { gql } from "@apollo/client"

export const getProductDetail = gql`
	query GetProductDetailForProductPage($urlKey: String!) {
		products(filter: { url_key: { eq: $urlKey } }) {
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
	}
`
