import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
	fontSize: 48
};

const ResumeHobby = props => {
	return (
		<Paper style={{ margin: 8 }}>
			<div>
				<FontIcon className="material-icons" style={iconStyles}>devices</FontIcon>
				<div>Coding</div>
			</div>
			<div>
				<FontIcon className="material-icons" style={iconStyles}>flight_takeoff</FontIcon>
				<div>Traveling</div>
			</div>
			<div>
				<FontIcon className="material-icons" style={iconStyles}>photo_camera</FontIcon>
				<div>Photography</div>
			</div>
			<div>
				<FontIcon className="material-icons" style={iconStyles}>local_florist</FontIcon>
				<div>Planting</div>
			</div>
		</Paper>
	);
};

ResumeHobby.propTypes = {

};

export default ResumeHobby;