import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';

const FileInput = props => {
	const { name, input, meta, ...custom } = props;
	const { value, onChange } = input;
	const { touched, error } = meta;
	return (
		<div>
			<Dropzone
				name={name}
				onDrop={(files) => {
					onChange(files[0]);
				}}
				{...custom}
			>
				<div>Try dropping some files here, or click to select files to upload.</div>
			</Dropzone>
			{touched &&
				error &&
				<span className="error">{error}</span>}
			{value && (
				<ul>
					{value.fileName}
				</ul>
			)}
		</div>
	);
};

FileInput.propTypes = {
	name: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object,
	custom: PropTypes.array,
};

export default FileInput;