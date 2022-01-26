import { createElement } from "react"
import Slider from "./cmsSlider"

export default function CmsDiv(props) {
	const contentType = props["data-pb"]
	const elementType = COMPONENTS[contentType] || "div"

	return createElement(elementType, props)
}

const COMPONENTS = {
	Slider
}
