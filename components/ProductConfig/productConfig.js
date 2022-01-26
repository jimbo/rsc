import classes from "./productConfig.module.css"

const DEFAULT_PROPS = {
	options: []
}

export default function ProductConfig(props = DEFAULT_PROPS) {
	const { options } = props
	const attributeElements = []

	for (const option of options || attributeElements) {
		attributeElements.push(
			<fieldset
				key={option?.attribute_uid}
				id={option?.uid}
				className={classes.fieldset}
			>
				<legend className={classes.legend}>{option?.label}</legend>
				<RadioGroup options={option?.values} />
			</fieldset>
		)
	}

	return (
		<form id="product-config" className={classes.root}>
			{attributeElements}
			<fieldset className={classes.fieldset}>
				<legend className={classes.legend}>{"Quantity"}</legend>
				<QuantityField />
			</fieldset>
			<button
				className={classes.addToCart}
				id="add-to-cart"
				type="button"
			>
				{"Add to cart"}
			</button>
		</form>
	)
}

function RadioGroup(props) {
	const { options } = props
	const { uid: selection } = options[0]
	const optionElements = []

	for (const option of options) {
		const { label, swatch_data, uid } = option
		const isChecked = uid === selection
		const isColor = `${swatch_data?.value}`.startsWith("#")
		const Option = isColor ? ColorField : RadioField

		optionElements.push(
			<Option key={uid} isChecked={isChecked} label={label} uid={uid} />
		)
	}

	return <div className={classes.radioGroup}>{optionElements}</div>
}

function RadioField(props) {
	const { isChecked, label, uid } = props

	return (
		<label htmlFor={uid} className={classes.radioField}>
			<span className={classes.radioLabel}>{label}</span>
			<input
				checked={isChecked}
				className={classes.radioInput}
				id={uid}
				readOnly
				type="radio"
				value={uid}
			/>
		</label>
	)
}

function ColorField(props) {
	const { isChecked, label, uid } = props

	return (
		<label htmlFor={uid} className={classes.colorField}>
			<span className={classes.colorLabel}>{label}</span>
			<input
				checked={isChecked}
				className={classes.colorInput}
				id={uid}
				readOnly
				type="radio"
				value={uid}
			/>
		</label>
	)
}

function QuantityField() {
	const optionElements = Array.from({ length: 10 }, (item, index) => {
		const value = `${1 + index}`

		return (
			<option key={value} value={value}>
				{value}
			</option>
		)
	})

	return <select className={classes.selectInput}>{optionElements}</select>
}
