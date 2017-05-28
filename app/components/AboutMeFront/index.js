import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FileDownload from 'material-ui/svg-icons/file/file-download';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
`;

const AboutMeText = styled.div`
	display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  white-space: normal;
  height: 253px;
  overflow: hidden;
  padding: 8px 8px 11px 8px;
	width: 282px;
`;

const H3 = styled.h3`
	margin: 10px;
	color: rgb(255, 82, 82);
`;


class AboutMeFront extends Component {
	render() {
		return (
			<Wrapper>
				<H3>About Me</H3>
				<AboutMeText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</AboutMeText>
				<div style={{ margin: 10 }}>
					<RaisedButton
						href="https://github.com/callemall/material-ui"
						target="_blank"
						label="Download Resume"
						secondary={true}
						icon={<FileDownload />}
					/>
				</div>
			</Wrapper>
		);
	}
}

AboutMeFront.propTypes = {

};

export default AboutMeFront;