import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import MenuItem from 'material-ui/MenuItem';
import FileInput from './../../InputComponents/renderFileInput';
import SelectField from './../../InputComponents/renderSelectField';
import TextField from './../../InputComponents/renderTextField';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
		margin: 10px;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const ProjectForm = props => {
	const { handleSubmit, pristine, technology } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<SendButton>
				<h2>Project</h2>
			</SendButton>
			<Field name="projectName" component={TextField} floatingLabelText="projectName" fullWidth />
			<Field name="Description" component={TextField} floatingLabelText="Description" rows={3} fullWidth multiLine />
			<Field name="website" component={TextField} floatingLabelText="website" fullWidth />
			<Field name="myRole" component={TextField} floatingLabelText="myRole" rows={3} fullWidth multiLine />
			<Field name="technologyUsed" component={SelectField} multiple={true} floatingLabelText="technology Used" fullWidth>
				{
					technology.map((value) =>
						<MenuItem
							key={value._id}
							value={value._id}
							primaryText={value.name}
						/>
					)
				}
			</Field>
			<Field name="ProjectImages" component={FileInput} label="logo" multiple={true} accept="image/*" />
			<Field name="ProjectVideo" component={FileInput} label="logo" multiple={false} accept="video/*" />
			<SendButton>
				<RaisedButton
					style={{ height: '50px', minWidth: '150px' }}
					labelStyle={{ lineHeight: '50px' }}
					secondary
					label="Send"
					labelPosition="before"
					type="submit"
					icon={<ContentSend />}
					disabled={pristine}
				/>
			</SendButton>
		</FormWraper>
	);
};

ProjectForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	technology: PropTypes.array,
};

export default reduxForm({
	form: 'projectForm',
})(ProjectForm);
