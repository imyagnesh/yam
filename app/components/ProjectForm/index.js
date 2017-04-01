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
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const ProjectForm = props => {
	const { handleSubmit, pristine, technology } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="projectName" component={TextField} floatingLabelText="projectName" />
			<Field name="Description" component={TextField} floatingLabelText="Description" />
			<Field name="website" component={TextField} floatingLabelText="website" />
			<Field name="myRole" component={TextField} floatingLabelText="myRole" />
			<Field name="technologyUsed" component={SelectField} multiple={true} floatingLabelText="technology Used">
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
