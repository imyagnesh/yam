import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from './../../InputComponents/renderTextField';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;


const LoginForm = props => {
	const { handleSubmit, pristine, submitting } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="email" component={TextField} floatingLabelText="Email Address" />
			<Field name="password" component={TextField} floatingLabelText="password" type="password" />
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
})(LoginForm);

