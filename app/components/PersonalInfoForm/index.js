import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextField from './../TextField';
import FileInput from './../FileInput';
import { Field, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const validate = values => {
	const errors = {};
	const requiredFields = ['firstName', 'lastName', 'designation', 'smallImage', 'largeImage', 'resume'];
	requiredFields.forEach(field => {
		if (!values.get(field)) {
			errors[field] = 'Required';
		}
	});
	return errors;
};

const PersonalInfoForm = props => {
	const { handleSubmit, pristine, loading } = props;
	console.log(loading);
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="firstName" component={TextField} label="First Name" />
			<Field name="lastName" component={TextField} label="Last Name" />
			<Field name="designation" component={TextField} label="Designation" />
			<Field name="smallImage" component={FileInput} label="Small Image" multiple={false} accept="image/*" />
			<Field name="largeImage" component={FileInput} label="Large Image" multiple={false} accept="image/*" />
			<Field name="resume" component={FileInput} label="Resume" multiple={false} accept="application/pdf" />
			<SendButton>
				<RaisedButton
					style={{ height: '50px', minWidth: '150px' }}
					labelStyle={{ lineHeight: '50px' }}
					secondary
					label={loading?'Sending..' : 'Send'}
					labelPosition="before"
					type="submit"
					icon={<ContentSend />}
					disabled={pristine || loading}
				/>
			</SendButton>
		</FormWraper>
	);
};

PersonalInfoForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'personalInfoForm',
	validate
})(PersonalInfoForm);
