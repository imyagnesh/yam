import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';

const renderDatePicker = ({ input: { value, onChange }, meta: { touched, error }, ...custom }) => (
	<DatePicker
		errorText={touched && error}
		value={value}
		onChange={(event, value) => onChange(value)}
		{...custom}
	/>
);

renderDatePicker.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	custom: PropTypes.array,
};

export default renderDatePicker;