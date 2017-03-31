import React from 'react';
import TextField from 'material-ui/TextField';

const renderTextField = ({ input, meta: { touched, error }, ...custom }) => (
	<TextField
		errorText={touched && error}
		{...input}
		{...custom}
	/>
)

export default renderTextField;