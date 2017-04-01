import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';

const IconButtonInput = props => {
	const { child, onToggle, inlineStyle, currentStyle } = props;
	return (
		<IconButton
			style={currentStyle.has(inlineStyle) ? { background: '#ddd' } : {}}
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
	currentStyle: PropTypes.object.isRequired,
};

export default IconButtonInput;