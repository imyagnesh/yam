import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
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
	const requiredFields = ['email', 'password'];
	requiredFields.forEach(field => {
		if (!values.get(field)) {
			errors[field] = 'Required';
		}
	});
	if (values.get('email') && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
);



const LoginForm = props => {
	const { handleSubmit, pristine, submitting } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="email" component={renderTextField} label="Email Address" />
			<Field name="password" component={renderTextField} label="password" type="password" />
			<SendButton>
				<RaisedButton
					style={{ height: '50px', minWidth: '150px' }}
					labelStyle={{ lineHeight: '50px' }}
					secondary
					label="Send"
					labelPosition="before"
					type="submit"
					icon={<ContentSend />}
					disabled={pristine || submitting}
				/>
			</SendButton>
		</FormWraper>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'loginForm',  // a unique identifier for this form
  validate
})(LoginForm);

