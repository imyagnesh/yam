import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
// import ActionDelete from 'material-ui/svg-icons/action/delete';

const InnerDiv = styled.div`
    display: flex;
		justify-content: center;
		align-items: center;
		height: 100%
`;

const ImgDiv = styled.div`
		flex-direction: column;
    display: flex;
		width: 100px;
		align-items: center;
		margin: 10px;
`;

const Image = styled.img`
    height: 60px;
		width: 60px;
		border-radius: 10px;
`;

const TextWrap = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
		font-size: small;
    color: gray;
`;

const DropzoneWraper = styled(Dropzone) `
    width: 100%;
    height: 150px;
    border-width: 2px;
    border-color: rgb(102, 102, 102);
    border-style: dashed;
    border-radius: 5px;
    margin: 10px 0;
`;

const FileInput = props => {
	const { name, input, meta, multiple, ...custom } = props;
	const { value, onChange } = input;
	const { touched, error } = meta;
	return (
		<DropzoneWraper
			name={name}
			onDrop={(files) => {
				onChange(multiple ? files : files[0]);
			}}
			multiple={multiple}
			{...custom}
		>
			{({ isDragActive, isDragReject, acceptedFiles }) => {
				console.log(acceptedFiles);
				if (isDragActive) {
					return "This file is authorized";
				}
				if (isDragReject) {
					return "This file is not authorized";
				}
				return (<InnerDiv>{acceptedFiles.length
					? acceptedFiles.map((item, i) => <ImgDiv key={i}>
					<Image src={item.preview} />
					<TextWrap>{item.name}</TextWrap></ImgDiv>)
					: <div>Try dropping some files.</div>
				}</InnerDiv>);
			}}
		</DropzoneWraper>
	);
};

FileInput.propTypes = {
	name: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object,
	multiple: PropTypes.bool,
	custom: PropTypes.array,
};

export default FileInput;