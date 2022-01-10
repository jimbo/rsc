import { Children, cloneElement, useCallback, useMemo, useState } from "react"
import classes from "./cmsSlider.module.css"

export default function CmsSlider(props) {
	const { children, ...rest } = props
	const [activeSlide, setActiveSlide] = useState(0)
	const style = { "--slide": `${activeSlide}` }

	const { controls, slides } = useMemo(() => {
		const controls = []
		const slides = []
		let index = 0

		Children.forEach(children, (child) => {
			const childProps = child?.props || {}
			const isSlide = childProps["data-pb"] === "Slide"

			if (!isSlide) return

			slides.push(
				cloneElement(child, {
					key: index,
					style: { transform: `translate3d(${index * 100}%, 0, 0)` }
				})
			)

			controls.push(
				<Control
					key={index}
					index={index}
					setActiveSlide={setActiveSlide}
				/>
			)

			index += 1
		})

		return { controls, slides }
	}, [children])

	return (
		<div {...rest} style={style}>
			<div className="cms-slides">{slides}</div>
			<div className={classes.controls}>{controls}</div>
		</div>
	)
}

function Control(props) {
	const { index, setActiveSlide } = props

	const handleClick = useCallback(() => {
		setActiveSlide(index)
	}, [index, setActiveSlide])

	return (
		<a className={classes.control} onClick={handleClick}>
			<svg
				height={16}
				viewBox="0 0 16 16"
				width={16}
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx={8} cy={8} r={8} />
			</svg>
		</a>
	)
}
