import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';

const IconButtonInput = props => {
	const { child, onToggle, inlineStyle, active } = props;
	return (
		<IconButton
			style={active ? { background: '#ddd' } : {}}
			onTouchTap={() => onToggle(inlineStyle)}
		>
			{child}
		</IconButton>
	);
};

IconButtonInput.propTypes = {
	child: PropTypes.element.isRequired,
	onToggle: PropTypes.func.isRequired,
	inlineStyle: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
};

export default IconButtonInput;