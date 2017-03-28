import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';

const renderSelectField = props => {
	const { input, label, meta: { touched, error }, children, ...custom } = props;
	return (
		<SelectField
			floatingLabelText={label}
			errorText={touched && error}
			{...input}
			onChange={(event, index, value) => input.onChange(value)}
			children={children}
			{...custom} />
	);
};

renderSelectField.propTypes = {
	input: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired,
	children: PropTypes.array.isRequired,
	custom: PropTypes.array,
};

export default renderSelectField;