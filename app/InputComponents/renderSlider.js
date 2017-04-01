import React, { PropTypes } from 'react';
import Slider from 'material-ui/Slider';

const renderSlider = props => {
	const { input, meta, ...custom } = props;
	const { value, onChange } = input;
	return (
		<Slider
			value={value}
			onChange={(event, value) => {
				onChange(value);
			}}
			{...custom}
		/>
	);
};

renderSlider.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	custom: PropTypes.array,
};

export default renderSlider;