import classes from "./productConfig.module.css"

export default function ProductConfig(props) {
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
				id={uid}
				readOnly
				type="radio"
				value={uid}
				className={classes.radioInput}
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
				id={uid}
				readOnly
				type="radio"
				value={uid}
				className={classes.colorInput}
			/>
		</label>
	)
}
