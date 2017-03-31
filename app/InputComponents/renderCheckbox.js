import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const renderCheckbox = ({ input, meta, ...custom }) => (
	<Checkbox
		checked={input.value ? true : false}
		onCheck={input.onChange}
		{...custom}
	/>
);
renderCheckbox.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	custom: PropTypes.array,
};

export default renderCheckbox;