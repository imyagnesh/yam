import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';

const renderSelectField = ({ input: { value, onChange }, meta: { touched, error }, children, ...custom }) => (
	<SelectField
		errorText={touched && error}
		value={value}
		onChange={(event, index, value) => onChange(value)}
		children={children}
		{...custom} />
);

renderSelectField.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	children: PropTypes.array.isRequired,
	custom: PropTypes.array,
};

export default renderSelectField;