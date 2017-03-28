import React, { PropTypes } from 'react';
import Slider from 'material-ui/Slider';

const renderSlider = props => {
	const { input, meta, ...rest } = props;
	const { value, onChange } = input;
	return (
		<div>
			<Slider
				value={parseInt(value)}
				{...rest}
				onChange={(event, value) => {
					onChange(value);
				}}
			/>
			<span>{value}</span>
		</div>
	);
};

renderSlider.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object,
	rest: PropTypes.array,
};

export default renderSlider;