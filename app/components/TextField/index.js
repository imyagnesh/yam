import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const RenderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
);

RenderTextField.propTypes = {
	label: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object,
	custom: PropTypes.array,
};

export default RenderTextField;