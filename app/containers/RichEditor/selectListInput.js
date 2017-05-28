import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectInput = props => {
	const { blockType, handleChange, menuItems } = props;
	return (
		<SelectField
			value={blockType}
			onChange={(event, index, value) => handleChange(value)}
			autoWidth={true}
			underlineStyle={{ display: 'none' }}
			style={{ width: 'auto'}}
		>
			{
				menuItems.map((item, i) => <MenuItem key={i} value={item.style} primaryText={item.label} />)
			}
		</SelectField>
	);
};

SelectInput.propTypes = {
	blockType: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	menuItems: PropTypes.array.isRequired,
};

export default SelectInput;